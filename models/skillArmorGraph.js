let SkillArmorGraphNode = require('./skillArmorGraphNode');

class SkillArmorGraph {
    constructor()  {
        this.hash = {};
    }

    getArmor(skill, desiredPoints, currentPoints, equipment) {
        let pointsToAdd = Math.min(2, Math.max(1, desiredPoints - currentPoints));
        let currentNode = this.hash[skill][pointsToAdd];

        while(currentNode != null) {
            if (currentNode.points + currentPoints <= desiredPoints && equipment[currentNode.piece].id != currentNode.id) {
                if (Object.keys(equipment[currentNode.piece]).length === 0) {
                    return {
                        addedPoints: currentNode.points,
                        newArmor: currentNode
                    };
                } else {
                    return {
                        addedPoints: currentNode.points - equipment[currentNode.piece].points,
                        newArmor: currentNode
                    }
                }
            }

            currentNode = currentNode.nextNode;
        }

        return { addedPoints: 0, newArmor: null };
    }

    build(data) {
        for(let i = 1; i < data.armors.length; i++) {
            let currentArmor = data.armors[i];

            if (currentArmor.skill1 === 1) continue;
            this.insertNode(currentArmor.skill1, currentArmor.id, currentArmor.skill1Points, currentArmor.piece);

            if (currentArmor.skill2 === 1) continue;
            this.insertNode(currentArmor.skill2, currentArmor.id, currentArmor.skill2Points, currentArmor.piece);
        }
    }

    insertNode(key, id, points, piece) {
        if (!this.hash[key]) {
            this.hash[key] = {};

            this.hash[key][points] = new SkillArmorGraphNode(id, points, piece);
        } else if (!this.hash[key][points]) {
            this.hash[key][points] = new SkillArmorGraphNode(id, points, piece);
        } else {
            let currentNode = this.hash[key][points];
            while(currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new SkillArmorGraphNode(id, points, piece);
        }
    }
}

module.exports = SkillArmorGraph;
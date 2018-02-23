let SkillArmorGraphNode = require('./skillArmorGraphNode');

class SkillArmorGraph {
    constructor()  {
        this.hash = {};
    }

    build(data) {
        for(let i = 1; i < data.armors.length; i++) {
            let currentArmor = data.armors[i];

            if (currentArmor.skill1 === 1) continue;
            this.insertNode(currentArmor.skill1, currentArmor.id, currentArmor.skill1Points);

            if (currentArmor.skill2 === 1) continue;
            this.insertNode(currentArmor.skill2, currentArmor.id, currentArmor.skill2Points);
        }
    }

    insertNode(key, id, points) {
        if (!this.hash[key]) {
            this.hash[key] = new SkillArmorGraphNode(id, points);
        } else {
            let currentNode = this.hash[key];
            while(currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new SkillArmorGraphNode(id, points);
        }
    }
}

module.exports = SkillArmorGraph;
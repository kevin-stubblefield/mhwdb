class SkillArmorGraphNode {
    constructor(id, points) {
        this.id = id;
        this.points = points;
        this.nextNode = null;
    }
}

module.exports = SkillArmorGraphNode;
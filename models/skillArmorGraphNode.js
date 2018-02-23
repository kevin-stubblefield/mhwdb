class SkillArmorGraphNode {
    constructor(id, points, piece) {
        this.id = id;
        this.points = points;
        this.piece = piece;
        this.nextNode = null;
    }
}

module.exports = SkillArmorGraphNode;
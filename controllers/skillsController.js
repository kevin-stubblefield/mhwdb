let db = require('../db');
let SkillArmorGraph = require('../models/skillArmorGraph');

let getSkillArmorGraph = async function(cache) {
    let skillArmorGraph = cache.get('skillArmorGraph');

    if (!skillArmorGraph) {
        skillArmorGraph = await generateSkillArmorGraph();
    }

    return skillArmorGraph;
}

let generateSkillArmorGraph = async function() {
    let data = {};
    data.armors = await db.armors.getAll();
    var skillArmorGraph = new SkillArmorGraph();
    skillArmorGraph.build(data);
    return new Promise(function(resolve, reject) {
        resolve(skillArmorGraph);
    });
}

module.exports = {
    getIndex: async function() {
        let skills = await db.skills.getAll();
        return skills;
    },

    getSkillArmorGraph: getSkillArmorGraph
}
let db = require('../db');
let SkillArmorGraph = require('../models/skillArmorGraph');

let calculateArmorWithDesiredSkills = async function(skills, cache) {
    console.log(skills);
    let equipment = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}};

    let desiredSkills = parseSkills(skills);
    console.log(desiredSkills);

    let skillArmorGraph = await getSkillArmorGraph(cache);

    for (let skill in desiredSkills) {
        let currentEquippedPoints = 0;
        let limiter = 0;

        while(desiredSkills[skill] != currentEquippedPoints) {
            limiter++;
            let armor = skillArmorGraph.getArmor(skill, desiredSkills[skill], currentEquippedPoints, equipment);

            if (armor.newArmor) {
                currentEquippedPoints += armor.addedPoints;
                equipment[armor.newArmor.piece] = armor.newArmor;
            } else {
                return calcFailed();
            }

            if (limiter > 20) {
                return calcFailed();
            }
        }
    }
    console.log(equipment);

    return new Promise((resolve, reject) => {
        resolve({passed: true});
    })
}

let calcFailed = function() {
    return new Promise((resolve, reject) => {
        resolve({ passed: false, error: 'Couldn\'t determine armor set for provided skills.' });
    });
}

let parseSkills = function(skills) {
    let desiredSkills = {};
    for (let i = 0; i < skills.length; i++) {
        let parts = skills[i].split('-');
        desiredSkills[parts[0]] = parts[1];
    }
    return desiredSkills;
}

let getSkillArmorGraph = async function(cache) {
    let skillArmorGraph = cache.get('skillArmorGraph');

    if (!skillArmorGraph) {
        skillArmorGraph = await generateSkillArmorGraph();
        cache.set('skillArmorGraph', skillArmorGraph);
    }

    return skillArmorGraph;
}

let generateSkillArmorGraph = async function() {
    let data = {};
    data.armors = await db.armors.getAll();
    data.charms = await db.charms.getAll();
    let skillArmorGraph = new SkillArmorGraph();
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

    getSkillArmorGraph: getSkillArmorGraph,

    calculateArmorWithDesiredSkills: calculateArmorWithDesiredSkills
}
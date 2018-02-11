
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('set_bonuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('set_bonuses').insert([
        { skill_1_id: 1, skill_2_id: 1, name: 'Null' },
        { skill_1_id: 108, name: 'Nergigante Hunger' },
        { skill_1_id: 109, name: 'Vaal Hazak Vitality' },
        { skill_1_id: 110, name: 'Pink Rathian Mastery' },
        { skill_1_id: 111, skill_2_id: 112, name: 'Anjanath Will' },
        { skill_1_id: 113, skill_2_id: 114, name: 'Rathalos Mastery' },
        { skill_1_id: 115, skill_2_id: 116, name: 'Diablos Mastery' },
        { skill_1_id: 117, name: 'Uragaan Protection' },
        { skill_1_id: 118, name: 'Bazelgeuse Protection' },
        { skill_1_id: 119, name: 'Teostra Technique' },
        { skill_1_id: 120, name: 'Kushala Daora Flight' },
        { skill_1_id: 121, name: 'Xeno\'jiiva Divinity' },
        { skill_1_id: 122, name: 'Zorah Magdaros Mastery' },
        { skill_1_id: 123, skill_2_id: 124, name: 'Legiana Favor' },
        { skill_1_id: 125, skill_2_id: 126, name: 'Odogaron Mastery' },
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('ranks').insert([
    { id: 0, rank: 'Low' },
    { id: 1, rank: 'High' },
    { id: 2, rank: 'G' },
  ])
  .then(function() {
    return knex('monster_classifications').insert([
      { id: 0, classification: 'Fanged Wyvern' },
      { id: 1, classification: 'Bird Wyvern' },
      { id: 2, classification: 'Brute Wyvern' },
      { id: 3, classification: 'Piscine Wyvern' },
      { id: 4, classification: 'Flying Wyvern' },
      { id: 5, classification: 'Elder Dragon' },
    ])
  }).then(function() {
    return knex('monster_sizes').insert([
      { id: 0, size: 'Small Monster' },
      { id: 1, size: 'Large Monster' },
      { id: 2, size: 'Endemic Life' },
    ])
  });
};

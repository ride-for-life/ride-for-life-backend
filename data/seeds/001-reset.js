
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate(), knex('drivers').truncate(), knex('rides').truncate()
  





};

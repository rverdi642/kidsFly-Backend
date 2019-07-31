exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trip').del()
  .then(function () {
    // Inserts seed entries
    return knex('trip').insert([
  {
    user_id: 8,
    airport: "Saint Louis",
    airline: "Virgin",
    departure_time: 1570997628472,
    kids: 1,
    is_arriving: 1
  },
  {
    user_id: 2, 
    airpot: "Denver",
    airline: "American",
    departure_time: 1576532784248,
    kids: 1,
    is_arriving: 0
  },
  {
    user_id: 3,
    airport: "D.C.",
    airline:"American",
    departure_time: 1586125784525,
    kids: 2,
    is_arriving: 0
  },
  {
    user_id: 4,
    airport: "Saint Louis",
    airline: "Virgin",
    departure_time: 1590116420300,
    kids: 2,
    is_arriving: 1
  },
  {
    user_id: 5, 
    airport: "D.C.",
    airline: "Private",
    departure_time: 1594387317179,
    kids: 3,
    is_arriving: 1
  },
  {
    user_id: 6,
    airport: "Denver",
    airline:"Virgin",
    departure_time: 1569402060618,
    kids: 1,
    is_arriving: 0
  },
  {
    user_id: 7,
    airport: "D.C.",
    airline:  "Private",
    departure_time: 1576606650461,
    kids: 2,
    is_arriving: 0
  }
]);
});
};


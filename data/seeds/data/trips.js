exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
  .then(function () {
    // Inserts seed entries
    return knex('tasks').insert([
  {
    user_id: 8,
    airport: "Saint Louis",
    airline: "Virgin",
    departure_time: faker.date.future(1),
    kids: 1,
    is_arriving: 1
  },
  {
    user_id: 2, "Denver",
    airline: "American",
    departure_time: faker.date.future(1),
    kids: 1,
    is_arriving: 0
  },
  {
    user_id: 3,
    airport: "D.C.",
    airline:"American",
    departure_time: faker.date.future(1),
    kids: 2,
    is_arriving: 0
  },
  {
    user_id: 4,
    airport: "Saint Louis",
    airline: "Virgin",
    departure_time: faker.date.future(1),
    kids: 2,
    is_arriving: 1
  },
  {
    user_id: 5, 
    airport: "D.C.",
    airline: "Private",
    departure_time: faker.date.future(1),
    kids: 3,
    is_arriving: 1
  },
  {
    user_id: 6,
    airport: "Denver",
    airline:"Virgin",
    departure_time: faker.date.future(1),
    kids: 1,
    is_arriving: 0
  },
  {
    user_id: 7,
    airport: "D.C.",
    airline:  "Private",
    departure_time: faker.date.future(1),
    kids: 2,
    is_arriving: 0
  }
]);
});
};


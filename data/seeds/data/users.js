exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
  .then(function () {
    // Inserts seed entries
    return knex('tasks').insert([
      {
        first_name: "Admin",
        last_name: "Admin",
        email: "Admin",
        phone: "555-555-5555",
        password: "Admin",
        is_admin: true,
        airport: "Denver"
      },
      // id 2
      {
        first_name: "Oma",
        last_name: "Buckridge",
        email: "Stefan49@yahoo.com",
        phone: "207-140-0885",
        password: "password"
      },
      // id 3
      {
        first_name: "Demario",
        last_name: "Hayes",
        email: "Chloe.Cummings23@yahoo.com",
        phone: "800-917-7706",
        password: "password"
      },
      // id 4
      {
        first_name: "Brooklyn",
        last_name: "O'Connell",
        email: "something@yahoo.com",
        phone: "800-917-7706",
        password: "password"
      },
      // id 5
      {
        first_name: "Reese",
        last_name: "Collier",
        email: "Tomas.Lehner@hotmail.com",
        phone: "030-493-1946",
        password: "password"
      },
      // id 6
      {
        first_name: "Molly",
        last_name: "Hoeger",
        email: "Celia59@gmail.com",
        phone: "979-458-9017",
        password: "password"
      },
      // id 7
      {
        first_name: "Jermaine",
        last_name: "Kuhlman",
        email: "Tyrel94@gmail.com",
        phone: "741-808-8603",
        password: "password"
      },
      // id 8
      {
        first_name: "Junius",
        last_name: "Turner",
        email: "Zola.Howe15@hotmail.com",
        phone: "123-456-999",
        password: "password"
      },
    ]);
  });
};

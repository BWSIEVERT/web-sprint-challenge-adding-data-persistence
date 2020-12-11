exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "Dependencies",
          description: "Express, Helmet, Knex, and Sqlite3"
        },
        {
          name: "Nasa API",
          description: "Nasas open API giving access to universe data."
        },
        {
          name: "Social Media",
          description: "Use any form of social media to complete this project!"
        },
      ]);
    });
};

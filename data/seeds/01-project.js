exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Build a database in LambdaSchool",
          description: "Web 36 Sprint Challenge!",
        },
        {
          name: "Discover the universe",
          description: "Develop an API to explore our stars and further!",
        },
        {
          name: "Send kind words to someone",
          description: "Have you noticed someone having a bad day? Send some kind words to uplift them!",
        },
      ]);
    });
};

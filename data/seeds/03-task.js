exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Create tables for the database",
          notes: "Reference your previous project for direction!",
          project_id: 1,
        },
        {
          description: "Use redux to store your state and have global access.",
          notes: "To quickly setup your react app use: npx create-react-app <location>!",
          project_id: 2,
        },
        {
          description: "Compile a list of people having a tough time.",
          notes: "Explore available social media platforms to create your list!",
          project_id: 3,
        },
      ]);
    });
};

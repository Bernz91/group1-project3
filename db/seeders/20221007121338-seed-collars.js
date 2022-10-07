"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "collars",
      [
        {
          collar_name: "Classic",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/1df08a4f/686d71e43e1f39aefc6de6bb70d28c1c/classic.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collar_name: "Spread",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/5qFcWA5xo0wE7QAQNTNJnN/fe45360e3a2d423f2decd829351ceecc/Spread-_new__illustration.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collar_name: "Cutaway",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/dcbaf01b/942cfcabfdf768e0ba75cb79f143bffc/cutaway.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("collars", null, {});
  },
};

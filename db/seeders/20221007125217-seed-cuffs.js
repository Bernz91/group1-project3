"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cuffs",
      [
        {
          cuffName: "Round",
          additionalCost: 0,
          imageOne:
            "https://images.ctfassets.net/3aeub7qedhiv/ea343784/84ae65daa812144d8440605e79c1711a/barrel.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cuffName: "Angled",
          additionalCost: 0,
          imageOne:
            "https://images.ctfassets.net/3aeub7qedhiv/ca1fad60/55e38966e2ed25bf8b5a3684f4fa7005/angled.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cuffName: "Round Frecnh",
          additionalCost: 0,
          imageOne:
            "https://images.ctfassets.net/3aeub7qedhiv/cc5f7296/914ee4a1110d5ecf6bfec45a8f775289/roundfrench.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cuffs", null, {});
  },
};

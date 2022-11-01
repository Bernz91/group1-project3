"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "measurements",

      [
        {
          userId: "3bab595a-78a4-48f6-b093-eea8726a796e",
          categoryByUser: "new",
          measurementType: "cm",
          collar: 12,
          shoulders: 17.25,
          chest: 40,
          waist: 38,
          sleevesLength: 50,
          sleevesWidth: 12,
          elbow: 30,
          leftCuff: 3,
          rightCuff: 3,
          shirtLength: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("order_details", null, {});
  },
};

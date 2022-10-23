"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "measurements",

      [
        {
          user_id: userId[0][0].id,
          category_by_user: "new",
          measurement_type: "cm",
          collar: 12,
          shoulders: 17.25,
          chest: 40,
          waist: 38,
          sleeves_length: 50,
          sleeves_width: 12,
          elbow: 30,
          left_cuff: 3,
          right_cuff: 3,
          shirt_length: 100,
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

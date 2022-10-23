"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "orders",
      [
        {
          // tied to user 1 "another test" of user seeders (hard-coded)
          payment_id: 1,
          user_id: userId[0][0].id,
          quantity: 1,
          subtotal: 1,
          shipping_fee: 25,
          total: 250,
          status: "shipped",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};

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
          paymentId: 1,
          userId: "3bab595a-78a4-48f6-b093-eea8726a796e",
          quantity: 2,
          subtotal: 378,
          shippingFee: 0,
          total: 378,
          status: "shipped",
          shippingAddress: "845C Woodlands Drive 50 Singapore 640464",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // tied to user 1 "another test" of user seeders (hard-coded)
          paymentId: 1,
          userId: "3bab595a-78a4-48f6-b093-eea8726a796e",
          quantity: 1,
          subtotal: 1,
          shippingFee: 0,
          total: 35,
          status: "preparing",
          shippingAddress: "845C Woodlands Drive 50 Singapore 640464",
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

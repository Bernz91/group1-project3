"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "order_details",
      [
        {
          orderId: 1,
          measurementId: 1,
          fabricId: 1,
          collarId: 1,
          cuffId: 1,
          frontId: 1,
          pocketId: 1,
          backId: 1,
          quantity: 1,
          singleprice: 189,
          totalprice: 189,
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

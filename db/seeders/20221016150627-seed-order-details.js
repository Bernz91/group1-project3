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
        {
          orderId: 1,
          measurementId: 1,
          fabricId: 2,
          collarId: 2,
          cuffId: 1,
          frontId: 2,
          pocketId: 2,
          backId: 1,
          quantity: 1,
          singleprice: 189,
          totalprice: 189,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          measurementId: 1,
          fabricId: 2,
          collarId: 2,
          cuffId: 1,
          frontId: 1,
          pocketId: 2,
          backId: 1,
          quantity: 1,
          singleprice: 35,
          totalprice: 35,
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

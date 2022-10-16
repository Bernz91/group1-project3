"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "order_details",
      [
        {
          order_id: 1,
          measurement_id: 1,
          fabric_id: 1,
          collar_id: 1,
          cuff_id: 1,
          front_id: 1,
          pocket_id: 1,
          back_id: 1,
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

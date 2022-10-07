"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "backs",
      [
        {
          back_name: "Darts",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/831f3901/4e1b35a4827229345661ece02a1f95d3/darts.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          back_name: "Plain",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/a57ba48e/2234172eb32190a014771ccf0d254be2/plain.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          back_name: "Centre Pleats",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/67bcf5ae/9017704ae48fbc1e8022f607b889f334/centrepleats.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("backs", null, {});
  },
};

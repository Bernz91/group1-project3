"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pockets",
      [
        {
          pocket_name: "No Pocket",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/70C7pFkFHTMS7lGUVjEGxB/d3be74bbc18e580c41f922c38c15b9c0/1._No_Pocket.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pocket_name: "Single Rounded Plain (no flap)",
          additional_cost: 0,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/2U7LVLVnA8Ri5hMjp6dkwd/718272fa28266ce224ca764a05a048a6/2._Single_Rounded_Plain.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pocket_name: "Single Angled Plain (with flap)",
          additional_cost: 12,
          image_one:
            "https://images.ctfassets.net/3aeub7qedhiv/1P1cgs7gEwFdWkGSN746vi/49b7d8594af8a8d59e7ea469a1206224/3._Single_Angled_Plain.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pockets", null, {});
  },
};

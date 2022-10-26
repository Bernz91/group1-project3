"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fronts",
      [
        {
          frontName: "Clean",
          cost: 0,
          imageOne:
            "https://images.ctfassets.net/3aeub7qedhiv/ebf8b659/6d92bc0c9cacc702b00d6f34b90fe2bd/clean.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          frontName: "Placket",
          cost: 0,
          imageOne:
            "https://images.ctfassets.net/3aeub7qedhiv/bfeffd08/03b3291f70c63101cfb4d771b39ea415/placket.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          frontName: "Popover",
          cost: 15,
          imageOne:
            "https://images.ctfassets.net/3aeub7qedhiv/1ecXAqa0TQW3JZXFjL38dK/f72cdff623ac7b0c31a883319bd7ea0e/Popover.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fronts", null, {});
  },
};

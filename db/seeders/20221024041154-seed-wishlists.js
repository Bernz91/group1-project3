"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "wishlists",
      [
        {
          userId: "3bab595a-78a4-48f6-b093-eea8726a796e",
          fabricId: 1,
          collarId: 1,
          cuffId: 1,
          frontId: 1,
          pocketId: 1,
          backId: 1,
          measurementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "3bab595a-78a4-48f6-b093-eea8726a796e",
          fabricId: 2,
          collarId: 2,
          cuffId: 2,
          frontId: 2,
          pocketId: 1,
          backId: 1,
          measurementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: userId[0][1].id,
          fabricId: 1,
          collarId: 2,
          cuffId: 1,
          frontId: 2,
          pocketId: 2,
          backId: 2,
          measurementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("wishlists", null, {});
  },
};

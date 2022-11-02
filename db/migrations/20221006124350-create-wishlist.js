"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("wishlists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      fabricId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "fabrics",
          key: "id",
        },
      },
      collarId: {
        allowNull: false,

        type: Sequelize.INTEGER,
        references: {
          model: "collars",
          key: "id",
        },
      },
      cuffId: {
        allowNull: false,

        type: Sequelize.INTEGER,
        references: {
          model: "cuffs",
          key: "id",
        },
      },
      frontId: {
        allowNull: false,

        type: Sequelize.INTEGER,
        references: {
          model: "fronts",
          key: "id",
        },
      },
      pocketId: {
        allowNull: false,

        type: Sequelize.INTEGER,
        references: {
          model: "pockets",
          key: "id",
        },
      },
      backId: {
        allowNull: false,

        type: Sequelize.INTEGER,
        references: {
          model: "backs",
          key: "id",
        },
      },
      measurementId: {
        type: Sequelize.INTEGER,
        references: {
          model: "measurements",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("wishlists");
  },
};

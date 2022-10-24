"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
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
      fabricId: {
        type: Sequelize.INTEGER,
        references: {
          model: "fabrics",
          key: "id",
        },
      },
      collarId: {
        type: Sequelize.INTEGER,
        references: {
          model: "collars",
          key: "id",
        },
      },
      cuffId: {
        type: Sequelize.INTEGER,
        references: {
          model: "cuffs",
          key: "id",
        },
      },
      frontId: {
        type: Sequelize.INTEGER,
        references: {
          model: "fronts",
          key: "id",
        },
      },
      pocketId: {
        type: Sequelize.INTEGER,
        references: {
          model: "pockets",
          key: "id",
        },
      },
      backId: {
        type: Sequelize.INTEGER,
        references: {
          model: "backs",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      singleprice: {
        type: Sequelize.INTEGER,
      },
      totalprice: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("order_details");
  },
};

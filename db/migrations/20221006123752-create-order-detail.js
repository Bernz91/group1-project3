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
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
      },
      measurement_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "measurements",
          key: "id",
        },
      },
      fabric_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "fabrics",
          key: "id",
        },
      },
      collar_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "collars",
          key: "id",
        },
      },
      cuff_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "cuffs",
          key: "id",
        },
      },
      front_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "fronts",
          key: "id",
        },
      },
      pocket_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "pockets",
          key: "id",
        },
      },
      back_id: {
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

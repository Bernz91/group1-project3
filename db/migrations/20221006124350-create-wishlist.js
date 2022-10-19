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
      user_id: {
        type: Sequelize.STRING,
        references: {
          model: "users",
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

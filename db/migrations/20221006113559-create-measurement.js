"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("measurements", {
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
      category_by_user: {
        type: Sequelize.STRING,
      },
      measurement_type: {
        type: Sequelize.STRING,
      },
      collar: {
        type: Sequelize.INTEGER,
      },
      shoulders: {
        type: Sequelize.INTEGER,
      },
      chest: {
        type: Sequelize.INTEGER,
      },
      waist: {
        type: Sequelize.INTEGER,
      },
      sleeves_length: {
        type: Sequelize.INTEGER,
      },
      sleeves_width: {
        type: Sequelize.INTEGER,
      },
      elbow: {
        type: Sequelize.INTEGER,
      },
      left_cuff: {
        type: Sequelize.INTEGER,
      },
      right_cuff: {
        type: Sequelize.INTEGER,
      },
      shirt_length: {
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
    await queryInterface.dropTable("measurements");
  },
};

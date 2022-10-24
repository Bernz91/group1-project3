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
      userId: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      categoryByUser: {
        type: Sequelize.STRING,
      },
      measurementType: {
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
      sleevesLength: {
        type: Sequelize.INTEGER,
      },
      sleevesWidth: {
        type: Sequelize.INTEGER,
      },
      elbow: {
        type: Sequelize.INTEGER,
      },
      leftCuff: {
        type: Sequelize.INTEGER,
      },
      rightCuff: {
        type: Sequelize.INTEGER,
      },
      shirtLength: {
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

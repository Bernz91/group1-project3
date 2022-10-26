"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fabrics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fabricName: {
        type: Sequelize.STRING,
      },
      productQuantity: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      style: {
        type: Sequelize.STRING,
      },
      colour: {
        type: Sequelize.STRING,
      },
      material: {
        type: Sequelize.STRING,
      },
      pattern: {
        type: Sequelize.STRING,
      },
      imageOne: {
        type: Sequelize.STRING,
      },
      imageTwo: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("fabrics");
  },
};

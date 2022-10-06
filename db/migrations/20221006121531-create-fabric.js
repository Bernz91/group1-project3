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
      fabric_name: {
        type: Sequelize.STRING,
      },
      product_quantity: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      selling_price: {
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
      image_one: {
        type: Sequelize.STRING,
      },
      image_two: {
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

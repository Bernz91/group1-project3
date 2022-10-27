"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fabric extends Model {
    static associate(models) {
      // this.belongsToMany(models.order_detail, {
      //   through: "fabricOrderDetails",
      // });
    }
  }
  fabric.init(
    {
      fabricName: DataTypes.STRING,
      productQuantity: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      sellingPrice: DataTypes.INTEGER,
      style: DataTypes.ARRAY(DataTypes.STRING),
      colour: DataTypes.ARRAY(DataTypes.STRING),
      material: DataTypes.ARRAY(DataTypes.STRING),
      pattern: DataTypes.ARRAY(DataTypes.STRING),
      imageOne: DataTypes.STRING,
      imageTwo: DataTypes.STRING,
      // wishlistId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fabric",
    }
  );
  return fabric;
};

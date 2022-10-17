"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fabric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.order_detail);
      this.belongsTo(models.wishlist);

    }
  }
  fabric.init(
    {
      fabric_name: DataTypes.STRING,
      product_quantity: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      selling_price: DataTypes.INTEGER,
      style: DataTypes.ARRAY(DataTypes.STRING),
      colour: DataTypes.ARRAY(DataTypes.STRING),
      material: DataTypes.ARRAY(DataTypes.STRING),
      pattern: DataTypes.ARRAY(DataTypes.STRING),
      image_one: DataTypes.STRING,
      image_two: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fabric",
    }
  );
  return fabric;
};

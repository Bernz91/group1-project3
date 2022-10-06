"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init(
    {
      payment_id: DataTypes.INTEGER,
      user_uuid: DataTypes.UUID,
      quantity: DataTypes.INTEGER,
      subtotal: DataTypes.STRING,
      shipping_fee: DataTypes.INTEGER,
      total: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return order;
};
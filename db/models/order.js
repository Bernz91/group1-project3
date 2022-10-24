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
      this.belongsTo(models.order_detail);
      this.belongsTo(models.user);
      // this.belongsTo(models.wishlist)
    }
  }
  order.init(
    {
      paymentId: DataTypes.INTEGER,
      userId: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      shippingFee: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "order",
      // underscored: true,
    }
  );
  return order;
};

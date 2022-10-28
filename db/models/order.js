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
      this.belongsTo(models.user);
      this.hasMany(models.order_detail);
    }
  }
  order.init(
    {
      paymentId: DataTypes.INTEGER,
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      shippingFee: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
      shippingAddress: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "order",
      // underscored: true,
    }
  );
  return order;
};

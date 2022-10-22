"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.measurement);
      this.belongsTo(models.wishlist);
      this.belongsTo(models.order);
    }
  }
  user.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      shipping_address: DataTypes.TEXT,
      email_verification: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

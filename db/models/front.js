"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class front extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.order_detail, {
        through: "frontOrderDetails",
      });
      this.hasMany(models.wishlist);
      // this.belongsToMany(models.wishlist, { through: "frontWishlists" });
      // this.belongsTo(models.wishlist);
    }
  }
  front.init(
    {
      frontName: DataTypes.STRING,
      additionalCost: DataTypes.INTEGER,
      imageOne: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "front",
    }
  );
  return front;
};

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
      this.belongsToMany(models.wishlist, { through: "frontWishlists" });
    }
  }
  front.init(
    {
      front_name: DataTypes.STRING,
      additional_cost: DataTypes.INTEGER,
      image_one: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "front",
    }
  );
  return front;
};

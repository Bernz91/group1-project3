"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.order_detail, {
        through: "pocketOrderDetails",
      });
      // this.belongsToMany(models.wishlist, { through: "pocketWishlists" });
      // this.belongsTo(models.wishlist);
    }
  }
  pocket.init(
    {
      pocketName: DataTypes.STRING,
      additionalCost: DataTypes.INTEGER,
      imageOne: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pocket",
    }
  );
  return pocket;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cuff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.order_detail, {
        through: "cuffOrderDetails",
      });
      this.belongsToMany(models.wishlist, { through: "cuffWishlists" });
    }
  }
  cuff.init(
    {
      cuff_name: DataTypes.STRING,
      additional_cost: DataTypes.INTEGER,
      image_one: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "cuff",
    }
  );
  return cuff;
};

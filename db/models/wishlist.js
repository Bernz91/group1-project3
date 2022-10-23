"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsToMany(models.fabric, { through: "fabricWishlists" });
      this.belongsToMany(models.collar, { through: "collarWishlists" });
      this.belongsToMany(models.cuff, { through: "cuffWishlists" });
      this.belongsToMany(models.front, { through: "frontWishlists" });
      this.belongsToMany(models.pocket, { through: "pocketWishlists" });
      this.belongsToMany(models.back, { through: "backWishlists" });
    }
  }
  wishlist.init(
    {
      user_id: DataTypes.STRING,
      fabric_id: DataTypes.INTEGER,
      collar_id: DataTypes.INTEGER,
      cuff_id: DataTypes.INTEGER,
      front_id: DataTypes.INTEGER,
      pocket_id: DataTypes.INTEGER,
      back_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "wishlist",
      // underscored: true,
    }
  );
  return wishlist;
};

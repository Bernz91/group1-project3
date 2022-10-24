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
      this.hasMany(models.fabric);
      this.hasMany(models.collar);
      this.hasMany(models.cuff);
      this.hasMany(models.front);
      this.hasMany(models.pocket);
      this.hasMany(models.back);
      // this.belongsToMany(models.user, {
      //   through: "userWishlists",
      // });
      // this.belongsToMany(models.fabric, { through: "fabricWishlists" });
      // this.belongsToMany(models.collar, { through: "collarWishlists" });
      // this.belongsToMany(models.cuff, { through: "cuffWishlists" });
      // this.belongsToMany(models.front, { through: "frontWishlists" });
      // this.belongsToMany(models.pocket, { through: "pocketWishlists" });
      // this.belongsToMany(models.back, { through: "backWishlists" });
    }
  }
  wishlist.init(
    {
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      fabricId: DataTypes.INTEGER,
      collarId: DataTypes.INTEGER,
      cuffId: DataTypes.INTEGER,
      frontId: DataTypes.INTEGER,
      pocketId: DataTypes.INTEGER,
      backId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "wishlist",
      // underscored: true,
    }
  );
  return wishlist;
};

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
      this.hasMany (models.user)
      this.hasMany (models.fabric)
      this.hasMany (models.collar)
      this.hasMany (models.cuff)
      this.hasMany (models.front)
      this.hasMany (models.pocket)
      this.hasMany (models.back)
    }
  }
  wishlist.init(
    {
      user_uuid: DataTypes.STRING,
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

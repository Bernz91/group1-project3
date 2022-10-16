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
      // define association here
    }
  }
  wishlist.init(
    {
      user_uuid: DataTypes.UUID,
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

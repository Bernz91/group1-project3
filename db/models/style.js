"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  style.init(
    {
      style_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "style",
      underscored: true,
    }
  );
  return style;
};

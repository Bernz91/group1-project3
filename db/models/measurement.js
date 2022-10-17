"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class measurement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  measurement.init(
    {
      user_uuid: DataTypes.STRING,
      category_by_user: DataTypes.STRING,
      collar: DataTypes.INTEGER,
      shoulders: DataTypes.INTEGER,
      chest: DataTypes.INTEGER,
      waist: DataTypes.INTEGER,
      sleeves_length: DataTypes.INTEGER,
      sleeves_width: DataTypes.INTEGER,
      elbow: DataTypes.INTEGER,
      left_cuff: DataTypes.INTEGER,
      right_cuff: DataTypes.INTEGER,
      shirt_length: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "measurement",
      underscored: true,
    }
  );
  return measurement;
};

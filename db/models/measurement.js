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
      this.belongsTo(models.order_detail);
      // this.hasMany(models.user);
    }
  }
  measurement.init(
    {
      userId: DataTypes.STRING,
      categoryByUser: DataTypes.STRING,
      measurementType: DataTypes.STRING,
      collar: DataTypes.INTEGER,
      shoulders: DataTypes.INTEGER,
      chest: DataTypes.INTEGER,
      waist: DataTypes.INTEGER,
      sleevesLength: DataTypes.INTEGER,
      sleevesWidth: DataTypes.INTEGER,
      elbow: DataTypes.INTEGER,
      leftCuff: DataTypes.INTEGER,
      rightCuff: DataTypes.INTEGER,
      shirtLength: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "measurement",
      // underscored: true,
    }
  );
  return measurement;
};

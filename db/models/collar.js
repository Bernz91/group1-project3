"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class collar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsToMany(models.order_detail, {
      //   through: "collarOrderDetails",
      // });
    }
  }
  collar.init(
    {
      collarName: DataTypes.STRING,
      additionalCost: DataTypes.INTEGER,
      imageOne: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "collar",
    }
  );
  return collar;
};

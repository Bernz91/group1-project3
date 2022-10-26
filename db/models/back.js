"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class back extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsToMany(models.order_detail, {
      //   through: "backOrderDetails",
      // });
    }
  }
  back.init(
    {
      backName: DataTypes.STRING,
      additionalCost: DataTypes.INTEGER,
      imageOne: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "back",
    }
  );
  return back;
};

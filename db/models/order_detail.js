"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.back);
      this.hasMany(models.collar);
      this.hasMany(models.cuff);
      this.hasMany(models.fabric);
      this.hasMany(models.front);
      this.hasMany(models.pocket);
      this.hasMany (models.order)
      this.hasMany (models.measurement)

    }
  }
  order_detail.init(
    {
      order_id: DataTypes.INTEGER,
      measurement_id: DataTypes.INTEGER,
      fabric_id: DataTypes.INTEGER,
      collar_id: DataTypes.INTEGER,
      cuff_id: DataTypes.INTEGER,
      front_id: DataTypes.INTEGER,
      pocket_id: DataTypes.INTEGER,
      back_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      singleprice: DataTypes.INTEGER,
      totalprice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order_detail",
      // underscored: true,
    }
  );
  return order_detail;
};

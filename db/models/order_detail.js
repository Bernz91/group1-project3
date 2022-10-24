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
      // this.belongsToMany(models.back, {
      //   through: "backOrderDetails",
      // });
      // this.belongsToMany(models.collar, { through: "collarOrderDetails" });
      // this.belongsToMany(models.cuff, {
      //   through: "cuffOrderDetails",
      // });
      // this.belongsToMany(models.fabric, { through: "fabricOrderDetails" });
      // this.belongsToMany(models.front, {
      //   through: "frontOrderDetails",
      // });
      // this.belongsToMany(models.pocket, {
      //   through: "pocketOrderDetails",
      // });
      // this.hasMany(models.order);
      // this.hasMany(models.measurement);
    }
  }
  order_detail.init(
    {
      orderId: DataTypes.INTEGER,
      measurementId: DataTypes.INTEGER,
      fabricId: {
        type: DataTypes.INTEGER,
        references: {
          model: "fabrics",
          key: "id",
        },
      },
      collarId: {
        type: DataTypes.INTEGER,
        references: {
          model: "collars",
          key: "id",
        },
      },
      cuffId: DataTypes.INTEGER,
      frontId: DataTypes.INTEGER,
      pocketId: DataTypes.INTEGER,
      backId: DataTypes.INTEGER,
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

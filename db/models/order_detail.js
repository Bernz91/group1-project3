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
      this.belongsTo(models.order);
      this.belongsTo(models.measurement);
      this.belongsTo(models.fabric);
      this.belongsTo(models.collar);
      this.belongsTo(models.cuff);
      this.belongsTo(models.front);
      this.belongsTo(models.pocket);
      this.belongsTo(models.back);
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

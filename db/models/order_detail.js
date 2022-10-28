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
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
      },
      measurementId: {
        type: DataTypes.INTEGER,
        references: {
          model: "measurements",
          key: "id",
        },
      },
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
      cuffId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cuffs",
          key: "id",
        },
      },
      frontId: {
        type: DataTypes.INTEGER,
        references: {
          model: "fronts",
          key: "id",
        },
      },
      pocketId: {
        type: DataTypes.INTEGER,
        references: {
          model: "pockets",
          key: "id",
        },
      },
      backId: {
        type: DataTypes.INTEGER,
        references: {
          model: "backs",
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
      singleprice: DataTypes.INTEGER,
      totalprice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order_detail",
    }
  );
  return order_detail;
};

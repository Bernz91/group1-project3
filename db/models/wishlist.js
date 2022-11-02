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
      this.belongsTo(models.user);
      this.belongsTo(models.fabric);
      this.belongsTo(models.collar);
      this.belongsTo(models.cuff);
      this.belongsTo(models.front);
      this.belongsTo(models.pocket);
      this.belongsTo(models.back);
      this.belongsTo(models.measurement);
    }
  }
  wishlist.init(
    {
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      fabricId: {
        type: DataTypes.STRING,
        references: {
          model: "fabrics",
          key: "id",
        },
      },
      collarId: {
        type: DataTypes.STRING,
        references: {
          model: "collars",
          key: "id",
        },
      },
      cuffId: {
        type: DataTypes.STRING,
        references: {
          model: "cuffs",
          key: "id",
        },
      },
      frontId: {
        type: DataTypes.STRING,
        references: {
          model: "fronts",
          key: "id",
        },
      },
      pocketId: {
        type: DataTypes.STRING,
        references: {
          model: "pockets",
          key: "id",
        },
      },
      backId: {
        type: DataTypes.STRING,
        references: {
          model: "backs",
          key: "id",
        },
      },
      measurementId: {
        type: DataTypes.STRING,
        references: {
          model: "measurements",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "wishlist",
    }
  );
  return wishlist;
};

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
      this.belongsToMany(models.back, {
        through: "backOrderDetails",
      });
      this.belongsToMany(models.collar, { through: "collarOrderDetails" });
      this.belongsToMany(models.cuff, {
        through: "cuffOrderDetails",
      });
      this.belongsToMany(models.fabric, { through: "fabricOrderDetails" });
      this.belongsToMany(models.front, {
        through: "frontOrderDetails",
      });
      this.belongsToMany(models.pocket, {
        through: "pocketOrderDetails",
      });
      this.hasMany(models.order);
    }
  }
  order_detail.init(
    {
      order_id: DataTypes.INTEGER,
      measurement_id: DataTypes.INTEGER,
      fabric_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "fabrics",
          key: "id",
        },
      },
      collar_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "collars",
          key: "id",
        },
      },
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

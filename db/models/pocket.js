'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.order_detail);
      this.belongsTo(models.wishlist);

    }
  }
  pocket.init({
    pocket_name: DataTypes.STRING,
    additional_cost: DataTypes.INTEGER,
    image_one: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pocket',
  });
  return pocket;
};
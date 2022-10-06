'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  collar.init({
    collar_name: DataTypes.STRING,
    additional_cost: DataTypes.INTEGER,
    image_one: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'collar',
  });
  return collar;
};
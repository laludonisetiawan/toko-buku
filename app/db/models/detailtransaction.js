"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailTransaction extends Model {
    static associate(models) {}
  }
  DetailTransaction.init(
    {
      transaction: DataTypes.STRING,
      user: DataTypes.INTEGER,
      book: DataTypes.INTEGER,
      titleBook: DataTypes.STRING,
      imageBook: DataTypes.STRING,
      priceBook: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DetailTransaction",
    }
  );
  return DetailTransaction;
};

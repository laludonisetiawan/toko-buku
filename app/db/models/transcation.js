"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transcation extends Model {
    static associate(models) {}
  }
  Transcation.init(
    {
      invoice: DataTypes.STRING,
      user: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transcation",
    }
  );
  return Transcation;
};

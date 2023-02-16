"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      user: DataTypes.INTEGER,
      category: DataTypes.INTEGER,
      author: DataTypes.STRING,
      image: DataTypes.TEXT,
      published: DataTypes.DATE,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};

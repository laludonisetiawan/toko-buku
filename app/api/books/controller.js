const { Book, Category } = require("../../db/models");
const { Op } = require("sequelize");

module.exports = {
  getAllBooks: async (req, res, next) => {
    try {
      const { keyword = "" } = req.query;
      console.log(keyword);
      let condition = {
        user: req.user.id,
      };

      if (keyword !== "") {
        condition = { ...condition, title: { [Op.like]: `%${keyword}%` } };
      }

      const books = await Book.findAll({
        where: condition,
        include: {
          model: Category,
          attributes: ["id", "name"],
        },
      });
      res.status(200).json({
        message: "Success Get All Books",
        data: books,
      });
    } catch (err) {
      next(err);
    }
  },
};

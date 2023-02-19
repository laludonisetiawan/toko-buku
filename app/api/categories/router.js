const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/Auth");

router.get("/categories", auth, function (req, res) {
  res.status(200).json({ message: "Router categories" });
});

module.exports = router;

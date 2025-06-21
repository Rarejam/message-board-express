const express = require("express");
const newRoute = express.Router();
const newController = require("../controllers/newController");

newRoute.get("/", (req, res) => {
  res.render("new");
});
newRoute.post("/", newController);

module.exports = newRoute;

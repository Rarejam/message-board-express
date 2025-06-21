const express = require("express");
const indexRoute = express.Router();
// const indexController = require("../controllers/indexController");
// use newController as the controller here so that after if has finished doing its code,itll just go to the controller
// instead of the initial index back since it will display everythiung including the initial
const newController = require("../controllers/indexController");
indexRoute.get("/", newController);

module.exports = indexRoute;

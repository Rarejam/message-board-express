const express = require("express");
const infoRoute = express.Router();
const infoController = require("../controllers/infoController");

infoRoute.get("/", infoController);

module.exports = infoRoute;

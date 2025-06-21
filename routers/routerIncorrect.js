const express = require("express");
const routerIncorrect = express.Router();
const controllerIncorrect = require("../controllers/controllerIncorrect");

routerIncorrect.get("/", controllerIncorrect);
routerIncorrect.post("/", controllerIncorrect);
module.exports = routerIncorrect;

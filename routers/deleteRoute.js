const express = require("express");
const deleteRoute = express.Router();
const deleteController = require("../controllers/deleteController");
const { body, validationResult } = require("express-validator");
const controllerIncorrect = require("../controllers/controllerIncorrect");
// deleteRoute.get("/", deleteController);
// deleteRoute.post("/", deleteController);
// first of all let the delete page render a form and then post the result and
// check if it is correct...
const lengthErr = "must be between 8 and 12 characters";
// const alphaErr = 'must be letters'

// const validationPassword = [
//   body("password")
//     .trim()
//     .isLength({ min: 5, max: 10 })
//     .withMessage(`password ${lengthErr}`),
// ];

deleteRoute.get("/", (req, res) => {
  res.render("incorrect");
});
deleteRoute.post("/", deleteController);

module.exports = deleteRoute;

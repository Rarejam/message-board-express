const { body, validationResult } = require("express-validator");
// Add this middleware
require("dotenv").config();
// app.use(express.urlencoded({ extended: true }));

// const validationPassword = [
//   body("password")
//     .trim()
//     .isLength({ min: 8, max: 12 })
//     .withMessage("Password must be between 8 and 12 characters"),
// ];

const { deleteDetails } = require("../db/queries");
async function deleteController(req, res) {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).render("incorrect", {
  //       title: "input password",
  //       errors: errors.array(),
  //     });
  //   }
  const password = req.body.password;

  if (password == process.env.DELETE_PASSWORD) {
    await deleteDetails();
    //   messageArray.length = 0;
    res.redirect("/");
  } else {
    // const error = "wrong password";
    res.redirect("/incorrect");
  }
}

module.exports = deleteController;

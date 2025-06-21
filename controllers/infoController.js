const messageArray = require("../data/messageArray");
async function infoController(req, res) {
  res.render("info", { messages: messageArray });
}

module.exports = infoController;

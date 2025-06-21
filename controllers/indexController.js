// const messageArray = require("../data/messageArray");
const { getAllDetails } = require("../db/queries");
// const newController = require("./newController");

async function indexController(req, res) {
  const newMeesages = await getAllDetails();

  const messages = newMeesages.map((msg) => ({
    text: msg.message,
    user: msg.username,
    added: msg.date.getDate(),
  }));

  res.render("index", { messages });
}
//not quite needed
module.exports = indexController;

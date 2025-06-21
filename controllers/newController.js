const messagesArray = require("../data/messageArray");
const { inserDetails, getAllDetails } = require("../db/queries");
async function newController(req, res) {
  const { username, message, added } = req.body;
  let search_user = req.query.search;
  //insert the object into the database and await anoiher get query
  async function getnewDetails() {
    if (!username || !message) {
      return res.status(400).send("Username and text are required.");
    }
    await inserDetails({
      username: username,
      text: message,
      added: new Date(),
    });
  }
  await getnewDetails();

  const newDetails = await getAllDetails();
  let searchDetails = newDetails;
  if (search_user) {
    searchDetails = newDetails.filter((detail) => {
      detail.username.toLowerCase().includes(search_user.toLowerCase());
    });
  }
  //get query details and display
  const getAllnewDetails = searchDetails.map((detail) => ({
    text: detail.message,
    user: detail.username,
    added: detail.date,
  }));
  //get the details again from the databse after you have inserted
  // await res.render("/");
  res.render("index", { messages: getAllnewDetails });
  // res.sendFile('./views/index.html',{ root: __dirname})
  // res.send('this is it')
  // await res.redirect("/");
  console.log("the server is awaiting req");
}

module.exports = newController;

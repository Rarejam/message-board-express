const express = require("express");
const app = express();
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const indexRoute = require("./routers/indexRoute");
const newRoute = require("./routers/newRoute");
const infoRoute = require("./routers/infoRoute");
const messageArray = require("./data/messageArray");
const deleteRoute = require("./routers/deleteRoute");
const routerIncorrect = require("./routers/routerIncorrect");
// const tester = [
//     {
//         firstName: 'Jamal'
//     }
// ]

// const tester2 = ['this','that']
// app.get("/", (req, res) => {
//   res.render("index", { messages: messages });
//   // res.sendFile('./views/index.html',{ root: __dirname})
//   // res.send('this is it')
//   console.log("the server is awaiting req");
// });
app.use("/", indexRoute);
app.use("/info", infoRoute);
app.use("/new", newRoute);
app.use("/delete", deleteRoute);
app.use("/incorrect", routerIncorrect);
// app.post("/new", (req, res) => {
//   const username = req.body.username;
//   const message = req.body.message;
//   messages.push({ text: message, user: username, added: new Date() });
//   res.redirect("/");
// });

//use `` instead of '' to write html syntax within a res.send()
app.use((req, res) => {
  res.send(`this is an error page <br /> <a href='/'>home</a>`);
  // res.render();
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("the server is running,awaiting response");
});

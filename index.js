const express = require('express')
const app = express()
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


// const tester = [
//     {
//         firstName: 'Jamal'
//     }
// ]
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World2!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hello World3!",
    user: "Rarejam",
    added: new Date()
  }
];

// const tester2 = ['this','that']
app.get('/',(req,res) => {
    res.render('index', {messages : messages})
    // res.sendFile('./views/index.html',{ root: __dirname})
    // res.send('this is it')
    console.log('the server is awaiting req')
})

app.get('/new',(req,res) => {
    res.render('new')
})
app.get('/info',(req,res) => {
    res.render('info',{messages})
})
app.post('/new',(req,res) => {
    const username = req.body.username
    const message = req.body.message
    messages.push({ text: message, user: username, added: new Date() });
    res.redirect('/')
})

const PORT = process.env.PORT || 2007
app.listen(PORT, () => {
console.log('the server is running,awaiting response')
})
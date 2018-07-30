const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const PORT = 8080;
const path = require('path');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cookieSession({
  name: "cookies",
  keys: ["user_id"]
}));

app.use(express.static('dist'));


// Fake Database
var Userid = 1;

const users = {
  1: {
    id: 1,
    email: "123@123",
    password: "123"
  },
}


// View routes (static, to do: use variables)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/user_id", (req, res) => {
  console.log(req.session);
  if(!req.session.user_id){
    res.redirect("/register");
    return;
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/user_id/lists", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/user_id/list_id", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/register", (req, res) => {
  var registerfailed = false;
  if(req.body.password !== req.body.confirmPassword){
    registerfailed = true;
  }

  if(registerfailed){
    res.send({message: "Register Failed."});
  }
  // set the cookies here
  else {
    Userid += 1;
    req.session.user_id = Userid;
    users[Userid] = {
      id: Userid,
      email: req.body.email,
      password: req.body.password
    }

    res.send(users[req.session.user_id]);
  }
});

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/login");
});
// Test routes
// app.get("/test", (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get("/sam", (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// })


// Data routes
app.get('/turtles', (req, res) => {
  // res.send({ turtles: ['turtle', 'different turtle'] })
  res.send({ turtles: ['🐢', '🐢', '🐢', '🐢', '🐢'] })
});

// app.post('/:user_id/lists,' (req, res) => {
//   //Add a record to lists database
// });

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});

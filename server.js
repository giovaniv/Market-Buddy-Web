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

app.use(express.static('dist'))

// View routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/register", (req, res) => {
  console.log(req.body);

  var registerfailed = false;

  if(registerfailed){
    res.send({ turtles: ['🐢', '🐢', '🐢', '🐢', '🐢'] });
  }
  // set the cookies here

  res.send(req.body);
});

app.get("/sam", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})


// Data routes
app.get('/turtles', (req, res) => {
  // res.send({ turtles: ['turtle', 'different turtle'] })
  res.send({ turtles: ['🐢', '🐢', '🐢', '🐢', '🐢'] })
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});

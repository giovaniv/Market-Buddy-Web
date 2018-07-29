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

app.use(cookieSession({
  name: "cookies",
  keys: ["user_id"]
}));

app.use(express.static('dist'))

// View routes (static, to do: use variables)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/user_id", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/user_id/lists", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/user_id/list_id", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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

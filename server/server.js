const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const PORT = 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieSession({
  name: "cookies",
  keys: ["user_id"]
}));

app.get("/", (req, res) => {
  res.send( {name: "testing"} );
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});

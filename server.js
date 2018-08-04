const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcryptjs");
const PORT = 8080;
const path = require('path');
const request = require('request');
const http = require('http');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static('dist'));
app.use('/build', express.static('build'));

// View routes (static, to do: use variables)
app.get("/", (req, res) => {
  res.redirect("/main");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/logout", (req, res) => {
  res.redirect("/login");
});


app.post("/search", (req, res) => {
  let item = req.body.item;

  request("http://192.168.88.120:7000/products/?name=" + item, function (error, response, body) {
    res.send(body)
  });
});

app.post('/user_id/list_id', (req, res) => {
  console.log(req.body);
  res.send("Sucess");
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});












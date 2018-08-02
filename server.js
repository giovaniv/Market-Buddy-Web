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


// Fake Database
var Userid = 1;

const users = {
  1: {
    id: 1,
    name: "Shark",
    email: "test@test.com",
    password: "2"
  },
}

// View routes (static, to do: use variables)
app.get("/", (req, res) => {
  res.redirect("/main");
});

app.get("/main", (req, res) => {
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

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/logout", (req, res) => {
  // res.redirect("/login");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", (req, res) => {
  var registerfailed = false;

  if(req.body.password !== req.body.confirmPassword || req.body.email === "" || req.body.name === ""){
    registerfailed = true;
  }
  for(var user in users) {
    if(users[user].email === req.body.email){
      registerfailed = true;
    }
  }

  if(registerfailed){
    res.send({message: "Register Failed."});
  }
  else {
    Userid += 1;
    users[Userid] = {
      id: Userid,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    //CODE WRITTEN BY ROHIT
    // ==========================
    // curl -d '{"id":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data
    var postData = JSON.stringify({user: users[Userid]});
    const options = {
        hostname: '192.168.88.120',
        port: 7000,
        path: '/users/register',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    };

    const reqTest = http.request(options, (res) => {
        res.setEncoding('utf8');
        //incoming data arrives here
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            // res.json(users[Userid]);
            console.log('No more data in response.');
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    // write data to request body
    reqTest.write(postData);
    reqTest.end();
    //CODE WRITTEN BY ROHIT ENDS HERE
    // =================================

    res.json(users[Userid]);
    // res.redirect('/');
  }

});

app.post("/login", (req, res) => {
  let loginfailed = true;
  let current_user = null;

  for(var user in users) {
    if(users[user].email === req.body.email){
      if(users[user].password === String(req.body.password)){
        console.log(users[user]);
        loginfailed = false;
        current_user = users[user];
      }
    }
  }

  if(loginfailed){
    res.send( {message: "Your email and password did not match our records, please try again."} );
    return;
  }

  request("http://192.168.88.120:7000/signin", function (error, response, body) {

  });

  console.log("user_id is " + current_user);
  res.json(current_user);

});

app.post("/logout", (req, res) => {
  // req.session = null;
  res.redirect("/login");
});

app.post("/search", (req, res) => {
  // console.log("in search " + req.body);
  // console.log("in search " + req.body.item);
  let item = req.body.item;
  // let results = [];

  request("http://192.168.88.120:7000/products?name=" + item, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    // body.forEach(function(i){
    //   results.push(body[i].name)
    // });
    // res.send(results);
    console.log(body);
    // let string = JSON.parse(body);
    res.send(body)
  });

  // res.send(product);
  // res.send(responseJson);

});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});

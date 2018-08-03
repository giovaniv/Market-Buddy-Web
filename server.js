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
  res.sendFile(path.join(__dirname, "index.html"));
});
/*
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

    // curl -d '{"name":"req.body.name", "email": "req.body.email"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data
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

    res.json(users[Userid]);
    // res.redirect('/');
  }

});

app.post("/login", (req, res) => {
  let current_user = {
    email: req.body.email,
    password: req.body.password
  };
  let postUser = JSON.stringify({user: current_user});
  let loggedInUser = {};

  const options = {
    hostname: '192.168.88.120',
    // hostname: 'localhost',
    port: 7000,
    path: '/users/login',
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
      // res.json(chunk) //won't work here
      loggedInUser = chunk;
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });


  // write data to request body
  reqTest.write(postUser);
  reqTest.end();
  // res.json(chunk); does not have access to chunk
  console.log("loggedInUser:", loggedInUser);
  res.json(loggedInUser);


  //old code ----------------------------------
  // let loginfailed = true;
  // for(var user in users) {
  //   if(users[user].email === req.body.email){
  //     if(users[user].password === String(req.body.password)){
  //       console.log(users[user]);
  //       loginfailed = false;
  //       current_user = users[user];
  //     }
  //   }
  // }
  // if(loginfailed){
  //   res.send( {message: "Your email and password did not match our records, please try again."} );
  //   return;
  // }
  // request("http://192.168.88.120:7000/signin", function (error, response, body) {

  // });
  // res.json(current_user);
  //old code ---------------------------------
});
*/
app.post("/logout", (req, res) => {
  res.redirect("/login");
});


app.post("/search", (req, res) => {
  let item = req.body.item;

  request("http://192.168.88.124:7000/products/?name=" + item, function (error, response, body) {
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












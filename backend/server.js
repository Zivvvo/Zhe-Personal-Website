const express = require('express');

const user = require('./routes/user');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('listening on port ' + port));

app.get("/", function (req, res) {
    res.send("home page");
  });

app.get("/express_backend", (req, res) => {
    res.send({express: 'express backend connected to react'});

});

console.log(user);
app.post("/user",user.login);



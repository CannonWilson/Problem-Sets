// Routing Problem Set #1

const express = require('express');
const app = express()
const port = 5000;
const users = require('./Users')

app.use( (req, res, next) => {
    console.log("Hostname: ", req.hostname, " Path: ", req.path);
    next()
})

app.get('/', (req, res) => {
    console.log(users)
    res.send("Page 1, honey!")
})

app.get('/page2', (req, res) => {
    console.log("Loaded page 2");
    res.send("<a href='www.google.com'>Google</a>");
})

app.get('/user/:count', (req, res) => {

    let data = "Couldn't find anyone";
    users.forEach( (user) => {
        if (user.count === parseInt(req.params.count)) {
            data = user;
        }
    })

    res.send(data)
})

app.listen(port);
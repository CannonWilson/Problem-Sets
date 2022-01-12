const express = require('express');
const app = express()
const port = 5000;


// Steps:
// Create new directory & BasicServer.js file
// npm install express
// const express = require('express')
// const app = express();
// Const port = 5000;

app.get('/', (req, res) => {
    res.send("page 1")
})

app.get('/2', (req, res) => {
    res.send("page 2")
})

app.listen(port);
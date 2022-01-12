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
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
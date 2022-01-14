const express = require('express');
const app = express();
const port = 5000;
const paying = require('./PayingRoutes')
const nonpaying = require('./NonpayingRoutes')

app.get("/", (req, res) => {
    res.send("This is the home page of the application.")
})

app.use("/paying", paying)
app.use("/nonpaying", nonpaying)

app.listen(port);
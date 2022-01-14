const express = require('express')
const app = express();
const port = 5000;

app.get("/", (req, res) =>{
    res.send("Please type your search query into the browser search bar above.")
})

app.get("/:search", (req, res) => {
    res.redirect(`https://www.youtube.com/results?search_query=${req.params.search}`)
})

app.listen(port);
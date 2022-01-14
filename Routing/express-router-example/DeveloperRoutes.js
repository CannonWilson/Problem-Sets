const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is full data for a paying developer")
})

router.get("/account", (req, res) => {
    res.send("Paying developer's account")
})

router.get("/history", (req, res) => {
    res.send("Paying developer's history")
})


router.get("/settings", (req, res) => {
    res.send("Paying developer's settings")
})

module.exports = router;
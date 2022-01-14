const express = require('express');
const router = express.Router();
const developer = require('./DeveloperRoutes')

router.get("/", (req, res) => {
    res.send("Please specify a paying user type (student, hobbyist, or developer).")
})

router.get("/student", (req, res) => {
    res.send("This is the full data for a paying student")
})

router.get("/hobbyist", (req, res) => {
    res.send("This is full data for a paying hobbyist")
})

router.use("/developer", developer);

module.exports = router;
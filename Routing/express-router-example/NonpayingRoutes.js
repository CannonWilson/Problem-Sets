const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Please specify a nonpaying user type (student, hobbyist, or developer).")
})

router.get("/student", (req, res) => {
    res.send("This is example data for a student")
})

router.get("/hobbyist", (req, res) => {
    res.send("This is example data for a hobbyist")
})

router.get("/developer", (req, res) => {
    res.send("This is example data for a developer")
})

module.exports = router;
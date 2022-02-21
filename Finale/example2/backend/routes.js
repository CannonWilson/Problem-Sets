const express = require('express')
const router = express.Router()

router.get('/name', (req, res) => {
    res.send('name')
})

router.get('/email', (req, res) => {
    res.send('email')
})

router.get('/phone', (req, res) => {
    res.send('phone')
})

module.exports = router
const express = require('express')
const app = express()
const port = 4000;

const routes = require('./routes')
const cors = require('cors')

app.use('/users', routes)
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.listen(port)
const express = require('express')
const {MongoClient} = require('mongodb')
const router = express.Router()
const cors = require('cors')

require('dotenv').config({ debug: true })
const connectionString = process.env.CONNECTION
const client = new MongoClient(connectionString)

router.use(cors())
router.use(express.urlencoded({ extended: true }))

router.get('/name/:name', (req, res) => {

    async function nameQuery() {
        try {
            await client.connect()
            const count = await client.db('test_db').collection('users').count({name: req.params.name})
            res.send(count.toString())
            await client.close()
        }
        catch(error) {
            console.log(error)
            res.sendStatus(400)
        }
    }
    nameQuery()
})

router.get('/email/:email', (req, res) => {

    async function nameQuery() {
        try {
            await client.connect()
            const count = await client.db('test_db').collection('users').count({email: req.params.email})
            res.send(count.toString())
            await client.close()
        }
        catch(error) {
            console.log(error)
            res.sendStatus(400)
        }
    }
    nameQuery()
})

router.get('/phone/:phone', (req, res) => {

    async function nameQuery() {
        try {
            await client.connect()
            const count = await client.db('test_db').collection('users').count({phone: req.params.phone})
            res.send(count.toString())
            await client.close()
        }
        catch(error) {
            console.log(error)
            res.sendStatus(400)
        }
    }
    nameQuery()
})

module.exports = router
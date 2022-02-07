const express = require('express')
const app = express();
const {MongoClient} = require('mongodb')
const bodyParser = require('body-parser')
require('dotenv/config')

const url = process.env.DB_CONNECTION
const client = new MongoClient(url)

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html')
})

app.get('/api', (req, res) => {

    try {
        async function findAll() {
            await client.connect()
            const cursor = await client.db('super_db').collection('super_collection').find().project({_id : 0})
            const heroes = await cursor.toArray()

            res.send(heroes)

            await cursor.close()
            await client.close()
        }
        findAll()

    } catch(err) {
        console.log(err)
    }
})

app.post('/api', (req, res) => {

    try {

        const newDoc = {
            superName: req.body.superName,
            normalName: req.body.realName
        }

        async function insert() {
            await client.connect()
            console.log('Connected to DB')

            await client.db("super_db").collection('super_collection').insertOne(newDoc)

            await client.close()
        }
        insert()

        res.redirect('/')

    } catch(err) {
        console.log(err)
    }
})

app.listen(5000)
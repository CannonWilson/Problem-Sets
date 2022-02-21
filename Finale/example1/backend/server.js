const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')
const app = express()
const port = 4000

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.get('/users/:name/:email', (req, res) => {
    const userObject = {
        name: req.params.name,
        email: req.params.email
    }

    const connectionUrl = "mongodb+srv://CWilson1901:<password>@cluster0.guijn.mongodb.net/test_db?retryWrites=true&w=majority"
    const client = new MongoClient(connectionUrl)

    async function insertDoc() {
        try {
            await client.connect()

            const usersCollection = client.db('test_db').collection('users')

            await usersCollection.insertOne(userObject)

            res.sendStatus(200) // Everything happened ok!

            await client.close()
        }
        catch(err) {
            console.log(err)
            res.sendStatus(500) // Status code for server-side error
        }
    }

    insertDoc()
})

app.listen(port)
# MongoDB Problem Set #4: MongoDB in JavaScript

---
In this problem set, you will see how to apply what you have learned in the 
previous MongoDB problem sets to your JavaScript code.

To set the stage, superheroes have turned eval and are running amok in Amarillo, TX. 
As a normal citizen, there's little you can do to stop them. But, you can
help the police/military identify the heroes by their real names in order
to investigate what happened to change these superheroes into supervillains.

You will need to create a webpage where citizens like you can report the
real names of various superheroes. These submissions must then be
stored in a MongoDB database that you can hand over to the authorities.

## Problem 1: HTML
Create a new 'index.html' file in a new WebStorm project. Inside that
HTML file, create a `form` that makes a POST request to the `/api` path.
The form should have two input fields for the superhero name and that
superhero's real name, as well as a button to submit the form and a 
paragraph that shows which superheroes have already been identified.
For now, this paragraph should be blank.

<details>
<summary>Hint: Form Setup</summary>

The `<form>` tag has two important attributes you must specify, the HTTP
`method`, and the `action` (or the path to make the request at).

You will also need to specify the `name` attribute of each input.
</details>

<details>
<summary>Solution</summary>

The body of your HTML file should now look like this:
```
  <form method="post" action="/api">
    <input name="superName" placeholder="Superhero:">
    <input name="realName" placeholder="Real name:">
    <button>Submit</button>
    <div id="identifiedHeroes"></div>
  </form>
```
</details>

## Problem 2: Create an Express Server

Use Express (after installing the node module)
in a file named `server.js` to serve up your HTML
file to anyone making a GET
request at the `/` route. Also create the outline of routes
for a GET request at `/api` and a POST request at `/api`, although
these methods can be left empty for now. Your application
should run on `localhost:5000`.

<details>
<summary>Hint: Send a File with Express</summary>

In order to send a file using Express, you must specify
the exact path to that file. The `__dirname` environment
variable will help you get the path to the directory
the server file is running in. Then, you just need to 
add the file's name to the end of that path.
</details>

<details>
<summary>Solution</summary>

Your 'server.js' file should now look like this:
```
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html')
})

app.get('/api', (req, res) => {
    
})

app.post('/api', (req, res) => {
    
})

app.listen(5000)
```

### More Info

---

The code above creates an Express app that handles three different
requests. The first request might be a bit confusing. `res.sendFile`
sends a file to the client, but it needs the full path to the file
you want the server to send. Thus, you should use the 
`__dirname` environment variable to locate the current directory
and then use string concatenation to add `/index.html` to the end
of that file path.
</details>


## Problem 3: Insert a New MongoDB Document

Start by creating a new database in your existing MongoDB
cluster named 'super_db'. Create a collection inside that
database called 'super_collection'. Next, 
install `mongodb` and `body-parser` in your WebStorm project. 

At the top of your 'server.js', create a new `MongoClient`
that uses your cluster's connection url. 
You can find guidance on how to do this by logging into
MongoDB's website, clicking 'Connect' on your cluster, and then
selecting 'Connect your application'.

Inside the post request in 'server.js', you will connect to your
database, insert a new document based on the request's body's content,
and then close the connection. You should wrap all of this
functionality inside a `try`/`catch` block. If any of the previous steps
fail, catch the error and print it out to the console.

Once the document is successfully inserted, redirect the user
back to the main page.

<details>
<summary>Hint 1: Create a Document</summary>

Remember that documents are just objects. You can create them
in Javascript like this:
```
const newDoc = {
    field1: value1,
    field2: value2
}
```
</details>

<details>
<summary>Hint 2: Client Not Connected Error</summary>

You'll get an error if you try to insert a document before
you successfully connect to the database. You'll need
to use asynchronous JavaScript here.
</details>

<details>
<summary>Solution</summary>

Add the following code at the top of 'server.js':
```
const {MongoClient} = require('mongodb')
const bodyParser = require('body-parser')

const url = "mongodb+srv://CWilson1901:<your password goes here>@cluster0.guijn.mongodb.net/super_db?retryWrites=true&w=majority";
const client = new MongoClient(url)

app.use(bodyParser.urlencoded({extended: true}))
```
This code creates a new `MongoClient` that you will use to connect
to inside your response to a POST request. Remember that we use `body-parser`
to be able to access the contents of an HTTP request's body. We'll use the 
request's body in order to access the values given to the input fields
by the user.

This is the code for your POST response:
```
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
```
This code creates an object that will serve as a new document in the 
collection. Its fields are called `superName` and `normalName`, although you
can name your fields whatever you like as long as you stick to the same naming
convention throughout your collection. The values for these fields are the
values of the request body, accessed by the value of the `name` attribute
of the HTML input fields.



### More Info

---

It's always good practice to put your code that works with a database
inside a `try`/`catch` block. In case something goes wrong, you can redirect
the user to a different page or show an error message. In addition,
best practice involves closing the connection to the database as soon as
possible. Leaving connections open limits the number of users that can
access your database at once, and it places a higher load on your server.

You may wonder about the asynchronous function call used. Without it,
you will run into the following error: "MongoNotConnectedError: MongoClient 
must be connected to perform this operation". Without using asynchronous
JavaScript, the code for inserting a new document will be executed before
the application connects to the database.

Finally, we redirect the user back to the page they were on so they
get a seamless experience uploading their superhero name.
</details>

## Problem 4: Find All Superheroes
Next, you'll add code to your GET request on the `/api` path in order
to return all superheroes and their real names. Send an array of heroes 
to the requestor using `<cursor>.toArray`. Exclude the `_id` field.

<details>
<summary>Hint: Exclude _id Field</summary>

In order to exclude the `_id` field from your cursor, you must use
a projection. In order to do this within JavaScript code, use the 
`.project()` method. Remember that projections take in objects
with `1` meaning the field is included and `0` meaning the field is excluded.
</details>

<details>
<summary>Solution</summary>

Your app's response to a GET request at `/api` should look like this:
```
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
```

### More Info

---

You'll notice that we use `cursor.close()` here. Keeping a cursor
open puts strain on your database and your application's memory, so it's best
to close them as quickly. However, notice that we send
the response before closing the cursor because we prioritize the 
response speed of our API over an extra, temporary load on the
app and database.

</details>

## Problem 5: Show All Identified Superheroes

Finally, you'll show every superhero currently in the database on your
homepage. In problem 1, you created an empty div. Now, you should
add a `<script>` at the bottom of your HTML that makes a `fetch` request
and adds every hero with their real name to that empty div. You should
show each hero as a list item in an unordered list.

<details>
<summary>Solution</summary>

Your script should look something like this:
```
<script>
        async function fetchHeroes() {
            const response = await fetch('/api')
            const data = await response.json()
            let inner = "<ul>"
            data.forEach( hero => {
                inner += `<li>Superhero: ${hero.superName}, Real name: ${hero.normalName}</li>`
            } )
            inner += "</ul>"
            document.getElementById('identifiedHeroes').innerHTML = inner
        }
        fetchHeroes()
    </script>
```
First, we make a fetch request and turn the response into JSON format.
Then, we create an empty string to store what will become the innerHTML 
attribute of the empty div. Next, we loop over all the heroes
and add their information to the string before changing the
`div`'s inner HTML

</details>


## Problem 6: Hide Your Info
These evil superheroes are a crafty bunch. If they find your 
code on GitHub, they'll be able to look in your 'server.js' file
and find your MongoDB cluster's login information. With that,
they could access your cluster and wipe your whole database to 
protect their identities.
They might even be able to track you down and . . .

Use a '.env' file and functionality from the `dotenv` node module
to hide the URL you use to log into your cluster. Also create a 
'.gitignore' file and use it to make git ignore your '.env' file.

<details>
<summary>Solution</summary>

Start by running `npm install dotenv`. Then,
create a file named '.env' at the root of your project. Inside
that file, you can create a new variable and call it whatever you
want. Its value should be equal to the entire connection string
you use to connect to your cluster. My '.env' file looks like this:
```
DB_CONNECTION=mongodb+srv://CWilson1901:<my password>@cluster0.guijn.mongodb.net/super_db?retryWrites=true&w=majority
```

Next, you can access this variable and use it to connect to your
`MongoClient` like this:
```
require('dotenv/config')

const url = process.env.DB_CONNECTION
const client = new MongoClient(url)
```

Finally, create a '.gitignore' file like usual and git-ignore your
'.env' file by typing this: 
```
.env
```
</details>
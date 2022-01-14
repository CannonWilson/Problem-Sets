# Routing Problem Set #1: Intro to Express

## Problem 1: File Setup
Create a new directory to store all of your
files for this problem set. `cd` into that
directory and create a new file called "BasicServer.js".
Install Express. Inside "BasicServer.js", write three
lines of code to import `express`, make 
an Express application, and create a variable
named `port` with a value of 5000.

<details>
<summary>Solution</summary>

This is the code you're looking for:
```
const express = require('express');
const app = express()
const port = 5000;
```

### More Info

---

Here, we are importing the `express` module
with the `require` syntax instead of our
normal `import` syntax. `require` is a little
different from `import`, because of a lack
of support from Node.js.
</details>

## Problem 2: Launching Your Server

Show "Page 1, honey!" on the screen when you 
visit your site on localhost:5000.

<details>
<summary>Hint 1: Show Text</summary>

In order to show text on the screen, you
must tell your server how to handle 
GET requests at the route
your page is using. Then, you'll
have to do one more thing (that's)
in the next hint.
</details>

<details>
<summary>Hint 2: Launch It!</summary>

In order to launch your server using Express,
you must handle a GET request and make
your application listen. Remember that the 
listen method creates your http server.
</details>

<details>
<summary>Solution</summary>

At this point, "BasicServer.js" should look like this:
```
const express = require('express');
const app = express()
const port = 5000;

app.get('/', (req, res) => {
    res.send("Page 1, honey!")
})

app.listen(port);
```
You can launch your server and view its response
by running `node BasicServer.js` in your terminal
before viewing localhost:5000 in your browser.

### More Info

---

`app.get()` helps us do our routing, which is programming
how our application endpoints (URIs) respond to visitor
requests like "show me the home page". `app.get()` takes two
arguments, the first being our route path ("/" refers to the
root route, which is usually the home page), the second being 
the callback function (the code to run whenever that type of
request is made at that path).

`app.listen(port)` creates a http server running on the
specified port. This method allows connections and requests
to be made at the specified host and port.
</details>

## Problem 3: Second Page

Create a second route for your site. The user loading
this page should see a functioning link to google.com, and
your server should make a print statement whenever the
second page is loaded.

<details>
<summary>Hint: Links</summary>

Look at the data you sent in Problem 2. It was a string right?
Try putting an element inside that string.
</details>

<details>
<summary>Solution</summary>

Add the following code to "BasicServer.js":
```
app.get('/page2', (req, res) => {
    console.log("Loaded page 2");
    res.send("<a href='www.google.com'>Google</a>");
})
```
You might need to rerun your file using
Node to make these changes.

### More Info

---

Here, we establish another route for our 
application, reachable at the path "/page2".
We include a print statement inside our callback
function, which will print out its message
in the terminal you used to launch your
server. Finally, instead of responding with
a string of text like in Problem 2, we now respond
with an `<a>` tag, a html element. Note that we 
can return anything we want that would display on
any normal HTML page.
</details>

## Problem 4: Create Your Own Middleware

Create your own middleware function that prints the
hostname and the current path
anytime your app receives a request.

<details>
<summary>Hint 1: Syntax</summary>

The `app.use()` syntax binds your middleware to your
`app` object. For arguments, it takes a path and a callback
function. If no path is specified, the callback function
is run anytime the app receives any request.
</details>

<details>
<summary>Hint 2: Getting Hostname and Current Path</summary>

The application's hostname and current path are stored as properties
of the request object.
</details>

<details>
<summary>Hint 3: Middleware Created but Page Won't Load</summary>

In order for your middleware to continue the functionality
of your app (such as loading sending a response or loading
more middleware), you have to call `next()` at the end of your
callback function. You will also have to include `next` as 
an argument to the callback function.
</details>

<details>
<summary>Solution</summary>

I added the following lines to "BasicServer.js" above my GET requests:
```
app.use( (req, res, next) => {
    console.log("Path: ", req.path)
    next()
})
```

Remember that middleware are just functions.
The above code binds your `app` object to the function
you supply it. This anonymous arrow function takes in
three arguments, two of which should be familiar to you 
(`req` and `res`). The last one, `next`, is a function 
built into all Express middleware functions, and it
runs the next thing the app should do (either running
another middleware function or handling requests/responses).

The current path is everything after the hostname. In 
"https://en.wikipedia.org/wiki/Main_Page", "https" is
the protocol, "en.wikipedia.org" is the hostname,
and "/wiki/Main_Page" is the path.

While this is a simple example, Express middleware
can be incredibly useful for lots of things, including:
error catching, security, authentication, etc. We'll 
import other middleware that do these things using
the same `require` syntax that Express uses.

You can
view the official documentation for Express middleware
[here](https://expressjs.com/en/guide/using-middleware.html).
</details>

## Problem 5: Params

You can pass parameters inside your path to give your
application specific data/information. In this challenge,
You will create a new path that takes a parameter named
`count` at the end of the path. Your task is to receive
a request at this new path and to validate if the supplied
`count` parameter corresponds to a valid user in the 
`users` array below:
```
const users = [
    {
        count: 2,
        name: "Jbob",
        bio: "My name is Joe Bob."
    },
    {
        count: 4,
        name: "EasternEuropeCat",
        bio: "I am an Estonian lawyer with a photogenic cat named Billy."
    },
    {
        count: 5,
        name: "Water_b0ttl3-Lover",
        bio: "The name says it all. I LOVE water bottles."
    }
]
```
This user array must be stored in another file called "Users.js". If 
the request is valid, display the user object,
otherwise display your own error message.

<details>
<summary>Hint 1: Import/Export syntax</summary>

Look back at Node Problem Set #3 to remind yourself how
to handle the imports and exports here.
</details>

<details>
<summary>Hint 2: Data Value to Send</summary>

Here's one way to do it: 
inside `res.send()`, pass in a variable representing
your data. That variable should be your error message by default.
As you search through the `users` array, assign
to that same data variable if the user's count is correct.
</details>

<details>
<summary>Hint 3: Parameters</summary>

Parameters are passed to the end of paths like this:
"/yourpathname/:parametervalue". However, when you type
your complete path into your browser, it should look like
this: "localhost:5000/yourpathname/parametervalue" (no colon).

</details>

<details>
<summary>Solution</summary>

1. Add `module.exports = users;` add the bottom of "Users.js"
to export your variable called `users`.
2. Import your `users` variable in "BasicServer.js" with 
`const users = require('./Users').
3. Your new route should look something like this:
```
app.get('/user/:count', (req, res) => {

    let data = "Couldn't find anyone";
    users.forEach( (user) => {
        if (user.count === parseInt(req.params.count)) {
            data = user;
        }
    })

    res.send(data)
})
```

### More Info

---

Some things to notice:

`user.count` is of type `int` while `req.params.count` is
of type `string`, so you will have to do something to
convert between the types to compare their values.

I use `forEach` here to loop through the value in the `users`
array. You could have used any other type of loop, or even
the built-in JavaScript array prototype functions like `.find()`.

</details>


## Problem 6: Bypass the YouTube Homepage
You have a client who gets distracted by the YouTube
homepage and ends up wasting hours of their time
watching videos the didn't initially want to watch.
However, YouTube is a valuable resource to them
for learning new things.
Your client wants you to build a simple
web app using Express that allows them to bypass
the YouTube homepage and find videos by adding their
search query into your site's URL.

<details>
<summary>Hint 1: Where to Start</summary>

Start by creating a new file with your normal Express
functionality. Also, go to YouTube and type in
any search query into the search bar. Look at 
the URL to see what pops up. You need to see how they structure
their own paths on the search page so that you can
send your client to the appropriate page.
</details>

<details>
<summary>Hint 2: Redirecting with Express</summary>

Instead of `res.send()`, use `res.redirect()`.
</details>

<details>
<summary>Solution</summary>

Create a new file and use the following code:
```
const express = require('express')
const app = express();
const port = 5000;

app.get("/:search", (req, res) => {
    res.redirect(`https://www.youtube.com/results?search_query=${req.params.search}`)
})

app.listen(port);
```

### More Info

---

This is pretty cool right? People getting distracted by YouTube's 
homepage is a real problem.

In addition to the code above, it would be a good idea to tell
people how to use your site once they visit it with the following code:
```
app.get("/", (req, res) =>{
    res.send("Please type your search query into the browser search bar above.")
})
```

</details>
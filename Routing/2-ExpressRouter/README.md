# Routing Problem Set #2: Express Router

---

Express Router is quite similar to what you
saw in Routing Problem Set #1. The main difference
is that these routes are modular. That means that
you can separate your routes into different files,
and you can stack routes on top of each other.

For instance, say that you have a site with many
paths. Your API should have different functionality
for paying and non-paying requesters who
are testing out your API, as well as 
different functionality for students, hobbyists,
and professional developers (all of whom
pay different prices for this different functionality).

Express router lets us handle all the API
routes for paying customers in one file,
while all the routes for non-paying customers
are stored in a different file. This separation
of concerns helps us organize our routes and their
functionality instead of having one big
file that handles every route.

## Problem 1: Create an API With Express Router
Install Express in a new project. Create three
files called "RouterServer.js", "PayingRoutes.js",
and "NonpayingRoutes.js". Create your `app` in
"RouterServer.js" and use `express.router()` in
"PayingRoutes.js" and "NonpayingRoutes.js". 
The following paths should have valid routes:
"/", "/nonpaying", "/paying", "/nonpaying/student", "/nonpaying/hobbyist",
"/nonpaying/developer", "/paying/student", "/paying/hobbyist",
and "/paying/developer".

<details>
<summary>Hint 1: "RouterServer.js"</summary>

This file is a good place to start. This file
should look a lot like what you did for 
Routing Problem Set #1 Problem 2.
</details>

<details>
<summary>Hint 2: Express Router</summary>

To use the Express router, import Express and
call `express.Router()`. Your routes will 
look a lot like before, except using your router instead
of `app`.
</details>

<details>
<summary>Hint 3: Tying it Together in "RouterServer.js"</summary>

You will have to import your new routes and 
establish at a path with the `app.use()` 
syntax.
</details>

<details>
<summary>Solution</summary>

1. In "RouterServer.js", import your new routes and assigns
them a variable name that you will use later to create a new
path. This is the modularity of Express's router in action.
Make sure to do all the required stuff (imports, get requests,
`app.listen()`) to launch your Express app.
```
const express = require('express');
const app = express();
const port = 5000;
const paying = require('./PayingRoutes')
const nonpaying = require('./NonpayingRoutes')

app.get("/", (req, res) => {
    res.send("This is the home page of the application.")
})

app.use("/paying", paying)
app.use("/nonpaying", nonpaying)

app.listen(port);
```
2. In "PayingRoutes.js", I import `express` and create a new
router object. Then, I establish routes for "/paying/", 
"/paying/student", "/paying/hobbyist", and "/paying/developer".
Finally, I export the `router` at the bottom of the page
to make it usable by the `app` in "RouteServer.js".
```
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Please specify a paying user type (student, hobbyist, or developer).")
})

router.get("/student", (req, res) => {
    res.send("This is the full data for a paying student")
})

router.get("/hobbyist", (req, res) => {
    res.send("This is the full data for a paying hobbyist")
})

router.get("/developer", (req, res) => {
    res.send("This is the full data for a paying developer")
})

module.exports = router;
```
3. The "NonpayingRoutes.js" looks similar:
```
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
```

### More Info

---

You should now be able to visit any of the valid
paths you created in your browser. And, your "RouterServer.js"
file is much less complicated than if you specified every
single path in that one file. For very complicated APIs, 
this type of modular routing helps clean up the developers'
code and makes it easier to troubleshoot problems.
</details>

## Problem 2: We Need to Go Deeper!

Now, create valid routes for "/paying/developer/account",
"/paying/developer/history", and "/paying/developer/settings" 
in a new file using the Express router.

<details>
<summary>Hint</summary>

You will now have to use `router.use()` in "PayingRoutes.js",
which is very similar in functionality to `app.use()`.
</details>

<details>
<summary>Solution</summary>

1. I created a new file named "DeveloperRoutes.js" that looks like
this:
```
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
```
2. Next, I updated "PayingRoutes.js" to 
use these new routes:
```
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
```
</details>
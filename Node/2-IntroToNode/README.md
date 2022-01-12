# Node Problem Set #2: Intro to Node

---

## Problem 1: Print Statement
Node is used to run JavaScript code outside
the browser. To see how it works, make a new 
directory. In the directory, make a new
JS file named "HelloWorld.js" that 
prints `Hello world` to the
screen. Use Node to execute the file.

<details>
<summary>Solution</summary>

1. Add this code to your file:
```
console.log("Hello world");
```
2. In your terminal, navigate to the directory
containing "HelloWorld.js" and run:
```
node HelloWorld.js
```

### More Info

---

You just ran JavaScript outside the browser!
With Node, you only need to know one programming language
to control your website's functionality
(client side) and to create the server
running your website (server side).
</details>

## Problem 2: Bitcoin Price

To further explore the power of Node, we will
use `fetch` outside of the browser to print the
current bitcoin price every ten seconds. To start,
create a new file called "Bitcoin.js" in the same
directory as "HelloWorld.js" from Problem #1.
Then, use install a node module 
named `node-fetch` and create a new
"package.json" file. Inside the
"package.json", add the following line under
the package's description:
```
"type": "module",
```
This line allows us to use our normal `import`
syntax instead of the `require` syntax. Look 
[here](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_package_json_type_field)
for more info.

Every 10 seconds, make a `fetch` request
to this URL: "https://api.coindesk.com/v1/bpi/currentprice.json"
and print out the current price of Bitcoin in 
US dollars.

<details>
<summary>Hint 1: `node-fetch` and "package.json"</summary>

The first command you need to run is
`npm install node-fetch` to install the
`node-fetch` module from the npm registry.
Next, run `npm init -y` to create a new
"package.json" that says yes to all the setup
questions with the `-y` flag. Hit enter on line
5 and write `"type": "module"` to be able to
import our `fetch` function later.
</details>

<details>
<summary>Hint 2: Import `fetch`</summary>

We haven't dealt with the `node-fetch` module before, so the
import statement is a bit tricky.
Write `import fetch from "node-fetch"`
at the top of the file to gain access to the
`fetch` function.
</details>

<details>
<summary>Hint 3: Getting Price from the Response</summary>

To view the format of the data the API will return to
you, click on this [link](https://api.coindesk.com/v1/bpi/currentprice.json).
You will have to convert the response to JSON. Use the 
dot operator `.` to access deeper levels of nested objects
and their properties. Remember that you are looking for the
price in US dollars. You can always Google the current price
of Bitcoin if you want to double-check you're getting the right
value.
</details>

<details>
<summary>Hint 4: Making the `fetch` Every 10 Seconds</summary>

Create your own function
named `GetPrice` that makes your `fetch` request.
Use `setInterval` to call your `GetPrice` function
every 10 seconds. You can see the documentation for
`setInterval` [here](https://developer.mozilla.org/en-US/docs/Web/API/setInterval).
Keep in mind that the delay argument takes a value
in milliseconds (thousandths of a second).
</details>

<details>
<summary>Solution</summary>

1. Add the following code to "Bitcoin.js":
```
import fetch from "node-fetch"

function GetPrice() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(response => console.log(response.bpi.USD.rate))
}

setInterval(GetPrice, 10 * 1000);
```
2. Run your file with `node Bitcoin.js` and watch the prices
scroll across your screen.

### More Info

---

I hope that now you see how by running
JavaScript outside the browser,
Node lets us create cool stuff in a language
we already know. With Node, you can use
JavaScript as a full-fledged programming
language in any environment (not just
your browser). When we learn Express, we'll
see how we can use Node to create our very own
server. Stay tuned.
</details>
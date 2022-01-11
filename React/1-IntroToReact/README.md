# React Problem Set #1: Intro to React

---

## Problem 1: Set up a new React project
<details>
<summary>Hints</summary>

1. Use the terminal to go to the directory you want
   to hold your new app.
2. Run the command to create a new React app.
</details>

<details>
  <summary>Solution</summary>

1. Navigate to the desired parent directory 
of your project using the `cd` command in 
the terminal.
2. Run the following command: 
```
npx create-react-app YourAppNameHere
```
Replace `YourAppNameHere` with the name of your app. Note 
that you must have Node.js installed for this to work.

### More Info

---

`npx` is a tool that helps you install
packages (large bundles of code created by other programmers)
from the [npm registry](https://www.npmjs.com/).

`create-react-app` is a command that installs the corresponding [npm 
package](https://www.npmjs.com/package/create-react-app) created by Facebook.
The package includes the necessary folders and files to 
let you create a single-page application using the 
React library.
</details>

## Problem 2: Run your new React project in the browser
<details>
<summary>Hints</summary>

1. Use the terminal inside WebStorm to go inside the app you just created.
2. Run the command to start the development server.
</details>

<details>
  <summary>Solution</summary>

1. If you are already in the directory you just ran the
`create-react-app` command inside of, simply run `cd YourAppName`
in the WebStorm terminal to navigate into your new app.
2. Run the following command:
```
npm start
```
You should be taken automatically to your preferred browser,
which is now running your React app. You should see
"localhost:3000" in the searchbar, which means that your
React app is running locally on port 3000. "localhost" refers
to the local IP address of your current device, meaning other 
people won't be able to see your app by typing "localhost:3000"
into their browser like you can.

### More info

---

The `npm start` command runs a predefined command specified in the 
`start` property of a package's `scripts` object.

To see what this means, look inside the "package.json" file in 
the root of your project. On about line 14, you should see 
an object named `"scripts"` that defines `"start"`, 
`"build"`, `"test"`, and `"eject"`.

`"start"`, has the value `"react-scripts start"`. "react-scripts"
is a node module that was downloaded when you created 
your React app. "start" is a file inside that 
module that contains all the code needed to launch your 
React app locally in your browser.

</details>

## Problem 3: Delete the "Learn React" link being rendered to the page
<details>
<summary>Hints</summary>

1. Try checking out index.js and see what it's rendering 
to the page.
2. Delete the `<a>` tag with the content of "Learn React"
</details>

<details>
  <summary>Solution</summary>

1. Click on "App.js" in the "src" folder of your project
2. Delete from `<a>` to `</a>`

### More info

---

"create-react-app" uses [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin),
another package that (among other things), allows a
programmer to specify the entry point of the program.
React is configured to have "index.js" as the entry point,
meaning that it is the first file to be loaded when the
site is visited.

Inside "index.js" you will see a method called 
`ReactDOM.render`. One line 9, you will see `<App />`,
a component that is imported on line 4.
"App.js" in the "src" folder is where all the content 
of our application resides.

To delete the "Learn React" link, delete line 12
through line 19. The link will no longer render
to the screen because it is no longer a part of the
"App" function that is used as a component in "index.js".

</details>

## Problem 4: Make the React logo on the page half as tall

<details>
<summary>Hint</summary>

1. Go to "App.js" and find the logo. Where is the logo's 
styling coming from?
</details>

<details>
  <summary>Solution</summary>

1. Click on "App.css" in the "src" folder of your project
2. Inside `.App-logo` change `height: 40vmin;` to `height: 20vmin;`

### More info

---

Like we learned in our projects using static HTML, React 
pages use styling written in a CSS stylesheet file. Now,
custom CSS is accessed using `import` statements instead
of `<link>` tags.

On line 8 of App.js, you will see that the `<img>` tag's 
`src` attribute is set to `{logo}`. The curly brackets 
are a special syntax to tell the program reading your 
file that the contents are JavaScript code and not a 
string. `logo` is a .svg file in the "src" folder.

Also on line 8, the image has a `className` of `"App-logo"`.
`className` is similar to `class` that we have seen 
previously in static HTML. The styling of the `App-logo`
class is specified on lines 5-8 of "App.css".

</details>

## Problem 5: Stop running your React app
<details>
<summary>Hint</summary>

1. Go to the WebStorm terminal and remember the right key
   input to stop the development server.
</details>

<details>
  <summary>Solution</summary>

1. Go to the WebStorm terminal and type `control-c` 
(if you are on a Mac).

### More info

---

Now that you have stopped the development server for
your React app, you will no longer be able to view
your app in the browser once you refresh the page.

</details>
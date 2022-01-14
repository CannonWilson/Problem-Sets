## Routing Problem Set #3: React Router

---

Before, we used Express to return static content like
HTML, links, and object data. We also use Express to
make API calls and trigger database logic (whenever we
need to find, insert, delete, or update data in our 
database).

On the other hand, `react-router-dom` has functionality to navigate
between multiple views of our single-page application.
This means that only a single web document will be
loaded while we create and update its body
content using JavaScript. In this problem set, we will
see how to navigate between different views in a 
React application using `react-router-dom`.

## Problem 1: Create a New React App and Install `react-router-dom`

<details>
<summary>Solution</summary>

In whichever directory you want to hold your new
project folder, run:
```
npx create-react-app YourProjectName
```
Then, run:
```
npm install react-router-dom
```
</details>

## Problem 2: Create Three Components
Call these components `Home`, `About`, and `NotFound`.
They can return whatever elements you want to have
on these views (keep it simple). Go ahead and import them in "App.js"
but do not display them.

<details>
<summary>Solution</summary>

In "Home.js":
```
export const Home = () => {
    return (
        <div>This is the home page</div>
    )
}
```
In "About.js":
```
export const About = () => {
    return (
        <div>This is the About page</div>
    )
}
```
In "NotFound.js":
```
export const NotFound = () => {
    return (
        <div>Not found</div>
    )
}
```
In "App.js":
```
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {NotFound} from "./Components/NotFound";
```

### More Info

--- 

Please note that your files can be named differently
from these, and you can declare and import your components
with slightly different syntax. I also organized these
files into a "Components" directory, (which is best practice)
but you don't have to with such a simple app.
</details>

## Problem 3: Add Routes for Home and About
Don't worry about your `NotFound` component yet.

<details>
<summary>Hint 1: Where to start</summary>

You need to use the `BrowserRouter`, `Routes`, and `Route` 
components provided by `react-router-dom`.
</details>

<details>
<summary>Hint 2: Declare a route</summary>

You must provide each route with props describing
a path and a component to render at that path.
</details>

<details>
<summary>Solution</summary>

At the top of "App.js", add the following import statement
to access the `BrowserRouter`, `Routes`, and `Route` components
provided by `react-router-dom`:
```
import {BrowserRouter, Route, Routes} from "react-router-dom";
```
Then, you should use those components like this:
```
<BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
</BrowserRouter>
```
The above code should be inside the return statement of your
`App` function.

### More Info

---

`BrowserRouter` is the component that manipulates HTML history
to keep the UI and URL in sync on your single-page application.
This means that typing in a new URL will update the view displayed
on the screen without loading a new HTML page or document. It must contain
the `Routes` component and the `Route` components in order
to function properly.

The `Routes` component contains all of your `Route` components. `Routes`
provides the functionality to switch between your `Route`s correctly.

Finally, the `Route` component lets you specify a path and a component
to render at that path. As your user navigates between different
paths on your site, `Route` shows the view corresponding to the
current path.
</details>

## Problem 4: Add Route for NotFound
Add a route to show the NotFound component whenever an invalid
path is used.

<details>
<summary>Hint 1</summary>

The easiest way to do this involves a wildcard.
</details>

<details>
<summary>Solution</summary>

This is the `Route` you are looking for:
```
<Route path="*" element={ <NotFound/> } />
```

### More Info

---

In programming, the `*` character often serves as a 
wildcard. This means that `*` serves as a substitute
for one or more other characters that might be found.
For example, you might find the following line of code
inside a ".gitignore" file:
```
*.log
```
Because the `*` serves as a substitute for any other 
character here, every file ending in ".log" extension
will be git ignored, regardless of its name.

Here, the wildcard describes any path at all. Because our
other `Route` components specify all of our valid routes, 
our router uses this route for all other (invalid) routes.
</details>

## Problem 5: Redirects
Redirect from the "/home" path to the root file path
using `react-router-dom`'s `Navigate` element.

<details>
<summary>Hint 1: Using Navigate </summary>

First, create a new `Route` component.
The `Navigate` element must be nested
inside the `element` prop for your route.
</details>

<details>
<summary>Solution</summary>

Add a new route that looks like this:
```
<Route path="/home" element={<Navigate to="/" />} />
```
This kind of `Route` allows us to redirect our 
site visitors to a different view whenever
they try to load a specific URL. 

To test your understanding, modify your `Route`s 
so that any time an invalid URL is given,
the visitor is redirected to your `NotFound` view.
</details>
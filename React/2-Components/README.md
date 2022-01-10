# React Problem Set #2: Components

---

## Problem 1: Create a custom component inside App.js
Call the component "StoreItem". Its contents should
be one `<h2>` tag with the text "This is an item." 
Render three `StoreItem` components inside the App's 
header but before the logo.

<details>
<summary>Hints</summary>

1. Remember that React components are reusable bits of code
that return elements describing what should appear on the 
screen. Reusable bits of code that return something . . . that
sounds like a function.
2. Make sure that you declare your function defining your
component before it is used inside the return statement
for `App`. Otherwise, you'll get an error.
</details>

<details>
  <summary>Solution</summary>

1. After the import statements but before the `App`
function is declared, create a new function called
`StoreItem`:
```
function StoreItem() {}
```
2. The `StoreItem` function should return an `<h2>` tag
saying "This is an item."
```
function StoreItem() {
   return <h2>This is an item.</h2>
}
```
3. Inside the `App` function, below the `<header>` opening
tag but above the `<img>` tag, write:
```
<StoreItem />
<StoreItem />
<StoreItem />
```
Nice job! Now you have created your own custom
component called `StoreItem` and rendered it to the screen.
</details>

## Problem 2: Use props to describe your custom component
Modify the `StoreItem` component you just made to take in
props describing the item's number, name, and price according
to this key:

| number | name | price |
| --- | --- | --- |
| 0 | banana | 0.49 |
| 1 | car | 15000 |
| 2 | monkey | 2 |

Render the number, name, and price of the item to the screen.

<details>
<summary>Hints</summary>

1. Make sure that `StoreItem` is taking in props where you 
declare the custom component in your "App.js" file
2. Inside each of the three custom components you declared
in your `App` function, pass in each prop (number, name, and 
price) as an attribute.
</details>

<details>
<summary>Solution</summary>

1. Your `StoreItem` components should now take in props as 
attributes, which looks like this:
```
        <StoreItem
            number={0}
            name="banana"
            price={0.49}
        />
        <StoreItem
            number={1}
            name="car"
            price={15000}/>
        <StoreItem
            number={2}
            name="monkey"
            price={2}
        />
```
2. Your `StoreItem` function should now take in props as the
only argument, and should return the number, name, and price
of the item. It should look something like this:
```
function StoreItem(props) {
  return <h2>number: {props.number}, name: {props.name}, price: {props.price}</h2>
}
```

### More info

---

React allows a developer to break down complicated pages
into simpler, resuable components. While we may not be saving
a lot of time or effort so far using React, imagine working 
on a website like Amazon that shows 50 items once the 
page loads. Putting those posts into React components that
are customized with the item's name, image, price, etc.
allows the developers to write cleaner, shorter code 
that avoids repetition. Furthermore, imagine receiving
the assignment of changing the way those items look
on the page. With React, you only need to change one
section of code to change how all 50 items look.

[Here's](https://reactjs.org/docs/components-and-props.html)
the official React documentation for components and props.
It's quite well-written, and it's worth looking through.

</details>

## Problem 3: Move your StoreItem component into its own file
Create a new directory called "Components" in the "src" folder.
Create a new JS file in "Components" called "StoreItem.js". 
Make sure that you complete the necessary actions to still render
your `StoreItem` components to the screen.

<details>
<summary>Hints</summary>

1. Once you have created the new folder and file, move your
`StoreItem` function from "App.js" into "StoreItem.js".
2. Make sure you're exporting and importing correctly.
</details>

<details>
<summary>Solution</summary>

1. Create the "Components" folder and the "StoreItem.js" file
according to the problem instructions above.
2. Cut your `StoreItem` function from "App.js" and paste it into
"StoreItem.js". Then, add your export statement. The file should 
look like this once you are done:
```
function StoreItem(props) {
    return <h2>number: {props.number}, name: {props.name}, price: {props.price}</h2>
}

export default StoreItem;
```
3. Add the following import statement to your "App.js":
``` 
import StoreItem from "./Components/StoreItem";
```

### More Info

---

Putting components into their own files and organizing them
within folders helps developers to keep their projects
organized as they grow.

Another way you could have imported and exported `StoreItem` is
shown below:

(In "StoreItem.js")
``` 
export const StoreItem = function StoreItem(props) {
    return <h2>number: {props.number}, name: {props.name}, price: {props.price}</h2>
}
```

(In "App.js")
```
import {StoreItem} from "./Components/StoreItem";
```
This syntax works as well. Above, the StoreItem function is imported
in brackets because in "StoreItem.js" it was assigned to a variable
name using the const keyword. Before, when we used the `export default`
syntax, the function was not assigned, so the curly brackets were not
needed. You'll see both versions, so make sure you understand 
the difference (look for an equal sign).

Alternatively, an even shorter way of declaring the `StoreItem`
function in "StoreItem.js" using an arrow function is shown below. 
This type of function is called an anonymous function since it is
not named with a name following a function keyword. The import 
inside "App.js" would still use the curly braces since it is 
assigned, even if it is not named.
``` 
export const StoreItem = (props) => {
    return <h2>number: {props.number}, name: {props.name}, price: {props.price}</h2>
}
```
You can read more about anonymous functions [here](https://www.javascripttutorial.net/javascript-anonymous-functions/).
</details>
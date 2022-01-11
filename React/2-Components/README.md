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

## Problem 4: Add CSS to your component
Create a file named "ContactForm.css" in the "Components"
directory. Give your `StoreItem` a blue background.

<details>
<summary>Solution</summary>

1. Create a new CSS file as instructed above.
2. Add the following to the file to create a new class
that gives elements a blue background:
```
.blue-background {
    background-color: blue;
}
```
3. Import the CSS stylesheet you made inside "StoreItem.js":
```
import "./StoreItem.css"
```
4. Modify the `<h2>` element being returned to use the new
class you made:
```
    return <h2 className="blue-background">number: {props.number}, name: {props.name}, price: {props.price}</h2>
```
</details>

## Challenge: Map many items onto StoreItem components

Delete the three `StoreItem` components from "App.js".
Copy the code below into your "App.js" above the return statement.
``` 
const items = [
    {
      id: 0,
      title: "banana",
      cost: 0.49
    },
    {
      id: 1,
      title: "car",
      cost: 15000
    },
    {
      id: 2,
      title: "monkey",
      cost: 2
    },
    {
      id: 3,
      title: "table",
      cost: 2000
    },
    {
      id: 4,
      title: "couch",
      cost: 600
    },
    {
      id: 5,
      title: "remote",
      cost: 20
    },
    {
      id: 6,
      title: "bowl",
      cost: 3
    },
    {
      id: 7,
      title: "drums",
      cost: 2500
    },
    {
      id: 8,
      title: "diploma",
      cost: 1000000
    },
    {
      id: 9,
      title: "tv",
      cost: 400
    },
    {
      id: 10,
      title: "phone",
      cost: 1000
    },
    {
      id: 11,
      title: "pillow",
      cost: 50
    }
  ]
```
Then, use the `map` function to map all of these items onto
`StoreItem` components that you render to the screen. `id` 
corresponds to the `StoreItem`'s number, `title`
corresponds to the `StoreItem`'s name, and `cost`
corresponds to the `StoreItem`'s price.

<details>
<summary>Hint 1</summary>

Start by putting some open and closing curly braces in the header
and above the image, where you deleted the three `StoreItem` components.
</details>

<details>
<summary>Hint 2</summary>

Inside the curly braces, write `items.map()`. Look at the 
documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to try and figure out what to put inside
the parentheses.
</details>

<details>
<summary>Hint 3</summary>

Inside the curly braces, you wrote `items.map()`. Now, take each item
and map it to a new `StoreItem` component where the attributes/props
of each component is the corresponding value of the current item's
properties (id, title, or cost).
</details>

<details>
<summary>Answer</summary>

Here's what the code should look like:
```
{items.map( item => {
           return <StoreItem
              number = {item.id}
              name = {item.title}
              price = {item.cost}
          />
        } )} 
```
For every value in the items array, which map refers to as `item`,
return a new `StoreItem` component where the attributes passed in
as props are the corresponding properties in the current item object.

If you want an extra challenge, store the items array above in its
own separate file and still render all items to the screen.
</details>
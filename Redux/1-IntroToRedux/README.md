# Redux Problem Set #1: Intro To Redux

---
Redux is a state management tool. It helps us keep our
data up-to-date across every component of our application
without relying on passing every piece of data using props.

React-Redux is a library that allows developers to use
Redux seamlessly across their React components.

## Problem 1: Create a New React App
Create a new React app before installing the 'redux' node module 
and the 'react-redux' node module.

<details>
<summary>Solution</summary>

1. Create a new React app (I named mine "redux-example") with:
``` 
npx create-react-app redux-example
```
2. Install the 'redux' node module:
```
npm install redux
```
3Install the 'react-redux' node module:
```
npm install react-redux
```
</details>

## Problem 2: Redux Actions
First, delete every file in the "src" directory of your project except
for "index.js".
Then, delete the code in your "index.js" file and paste this code
inside it instead:
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <button onClick={}>Increase</button>
        <button onClick={}>Decrease</button>
    </div>,
  document.getElementById('root')
);
```
The above code renders two buttons to the screen. Our goal
for the rest of this problem set is to use Redux to create a simple
application that tracks a number that can be increased
or decreased by pressing a button. We will only use the "index.js" file
for the rest of the problem set.

For this problem, create two actions called "increaseAction" and
"decreaseAction". Remember that a Redux action is simply
a function that returns an object. That object must have a property
called "type" that describes the purpose/result of the action. 

<details>
<summary>Solution</summary>

The following code should be after your imports but before you
render anything:
```
const increaseAction = () => {
    return {
        type: "INCREASE",
    }
}

const decreaseAction = () => {
    return {
        type: "DECREASE"
    }
}
```
This creates two actions, one named 'increaseAction' and one
named 'decreaseAction'. These functions return an object with a
'type' property that describes the action. It is best practice
to make the value of your 'type' properties in all-caps.
</details>

## Problem 3: Create a Reducer
Reducers are functions that take in the current state and an
action to perform as arguments. The reducer returns the new 
state based on the action given to it. 

Create a reducer that increases the state by 1 or decreases
the state by 1 based on the action type. If one of the expected action
types is not found, return the current state by default.

<details>
<summary>Hint: Reducer Structure</summary>

``` 
const reducer = (state = 0, action) => {
    if (action.type === "ACTION1") {
        // Return an updated state here
    }
    // return the current state here as a default.
}
```
In a reducer, the state must be given a default value. Since
we are counting the value of a number, we should specify a 
default state value of 0. We check the 'type' property of the
action and then return the updated state based on the action's type.
More if statements can be added above to respond to other action types.
If all 'if' statements fail, you should return the current state.
</details>

<details>
<summary>Solution</summary>

```
const reducer = (state = 0, action) => {
    if (action.type === "INCREASE") {
        return state + 1
    }
    if (action.type === "DECREASE") {
        return state - 1
    }
    return state
}
```
This reducer increases the state by 1 if the action's type is
"INCREASE" or decreases the state by 1 if the action's type is
"DECREASE". If neither 'if' statement is triggered, the current
state is returned. 

### More Info

---
If an action is dispatched and the reducer cannot match the type
of the action, the current state should be returned as 
a default. If it is not, the reducer returns nothing and the
state value becomes undefined. In complicated apps where the
state stores lots of important information for the user
navigating between pages, this can break the functionality of your
site.

You might see 'switch-case' syntax used in defining a reducer.
The same reducer as above can be defined using that syntax like 
this:
```
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1
        case "DECREASE":
            return state - 1
        default:
            return state
    }
}
```
</details>

## Problem 4: Creating a Store and Subscribing
Create a store object using `createStore` from Redux. Then,
add a change listener to that store that prints out the 
state of the store after every time an action is dispatched.

<details>
<summary>Hint 1: Create a Redux Store</summary>

After you have created an object from `createStore` and assigned
a variable name to it, you can subscribe
to it like this: `yourStore.subscribe()`. Inside the parentheses you
will specify a function that will get called every time an
action is dispatched.
</details>

<details>
<summary>Hint 2: Accessing the Current State</summary>

To get the current state of your redux store, use `yourStore.getState()`.
</details>

<details>
<summary>Solution</summary>

1. First, import `createStore` from `redux` like this:
``` 
import {createStore} from "redux";
```
2. Next, create a store object and subscribe to it:
``` 
const store = createStore(reducer)
store.subscribe( () => {
    console.log(store.getState())
})
```
The above code uses a callback of an anonymous arrow function 
that logs the current state using `getState`.
</details>

## Problem 5: Dispatching Your Actions
Rewrite the code for your buttons so that they dispatch the 
appropriate action whenever they are clicked.

<details>
<summary>Hint: Dispatch Syntax</summary>

When dispatching an action to your store, you use this general
syntax:
```
store.dispatch(actionName())
```
Notice the parentheses after the action. The store is dispatching
a call to the action function, not the action function itself.
</details>

<details>
<summary>Solution</summary>

Your buttons' `onClick` attribute should be modified to dispatch
the `increaseAction` or the `decreaseAction` to the store like this:
```
<button onClick={ () => store.dispatch(increaseAction())}>Increase</button>
<button onClick={ () => store.dispatch(decreaseAction())}>Decrease</button>
```
Notice the parentheses after `increaseAction` and `decreaseAction`. 
The store is dispatching a call to the action function, 
not the action function itself.

Now, you should be able to see the results of your work by 
right-clicking on your webpage and selecting "Inspect". Click 
on "Console" in the top panel of the developer tools that
pop up on the right side of your screen. Click your buttons and
see what happens in the console.
</details>
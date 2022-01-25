# Redux Problem Set #2 - Advanced Redux

---
For this problem set, you will need to 
create a new React project with 'redux', 'react-redux', and
'react-router-dom' installed.

In this problem set, you will create a React application 
that flips through the pictures and names of people/characters and 
allows users to choose if a particular person
is a wizard or not. On one view, the user will be able 
to sign in/sign out and view their previous choices. On the 
other page, the user will be shown a picture and a name of 
a person/character if they are logged in. 
Depending on the button they press, the user
will update their list of decisions on the wizardly-ness of various
people.

## Problem 1: Project Setup
Use React's routing functionality to create two pages,
'/sign-in' and '/main'. All other routes should show a component
with a "404 Not Found" message.

<details>
<summary>Hint: Where to Look</summary>

If you are having trouble on this part, look
back at your work in Routing Problem Set #3.
</details>

<details>
<summary>Solution</summary>

1. Create a component for the sign-in view:
```
function SignIn() {
    return (
        <div>Sign In</div>
    )
}

export default SignIn;
```
2. Create a component for the main view:
```
function Main() {
    return (
        <div>Main</div>
    )
}

export default Main;
```
3. Create a component for the 404 view:
```
function NotFound() {
    return (
        <h1>404 Not Found</h1>
    )
}

export default NotFound;
```
4. In "App.js":
```
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./Components/SignIn";
import Main from "./Components/Main";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
</details>

## Problem 2: 

## Problem 2: Log In/Log Out Actions and Reducer
Create a new directory inside the "src" folder named "Redux". Inside
that folder, create two new directories named "Actions" and "Reducers".
In these folders, make two actions and one reducer for logging in and 
logging out. Here, `state` should be a boolean value representing
if the user is logged in or not (defaults to false).

<details>
<summary>Solution</summary>

1. In "Actions/LogIn.js":
```
export const LogInAction = () => {
    return {
        type: "LOGIN"
    }
}
```
2. In "Actions/LogOut.js":
```
export const LogOutAction = () => {
    return {
        type: "LOGOUT"
    }
}
```
3. In "Reducers/LoggedReducer.js":
```
export const LoggedReducer = (state = false, action) => {
    if (action.type === "LOGIN") {
        return true;
    }
    if (action.type === "LOGOUT") {
        return false;
    }
    return state;
}
```
</details>

## Problem 3: Wizard Actions and Reducers
Create two actions for when someone decides the current person
IS a wizard or IS NOT a wizard. Create one reducer to handle
both actions. The state in this case should be initialized as
an empty array. Objects following this format should be pushed
onto the array by the reducer:
``` 
{
    name: action.payload,
    wizard: false
}
```
You will notice in the code above that the action has a property
called 'payload'. This property is defined by the action (much 
like 'type') by an argument passed into the action function. 
The reducer then updates the state
using the data stored in the action's payload.

<details>
<summary>Hint 1: Creating an Action</summary>

The action should be a function that takes the wizard's name
as its only argument. It should return an object with a unique
'type' property, as well as a 'payload' property equal to the
wizard's name.
</details>

<details>
<summary>Hint 2: Updating a State Array</summary>

The reducer should push new objects to the state array like this:
```
state.push({
            name: action.payload,
            wizard: false
        })
```
Note that the state here should be initialized to an empty array.
</details>

<details>
<summary>Solution</summary>

1. I created a file named "Actions/YesWizard.js" holding:
```
export const YesWizardAction = (wizardName) => {
    return {
        type: "YESWIZARD",
        payload: wizardName
    }
}
```
2. Likewise, "Actions/NoWizard.js" has this code:
```
export const NoWizardAction = (wizardName) => {
    return {
        type: "NOWIZARD",
        payload: wizardName
    }
}
```
3. Finally, "Reducers/WizardReducer.js" has this code:
```
export const WizardReducer = (state = [], action) => {
    if (action.type === "NOWIZARD") {
        state.push({
            name: action.payload,
            wizard: false
        })
        return state
    }
    if (action.type === "YESWIZARD") {
        state.push({
            name: action.payload,
            wizard: true
        })
        return state
    }
    return state
}
```
</details>

## Problem 4: 

Created IncreaseCounter.js and  CounterReducer.js
Created CombinedReducer.js
Created Store.js
Wrapped App component in index.js in Provider
Added code to SignIn.js and Main.js (Important to use React <Link> not <a>)

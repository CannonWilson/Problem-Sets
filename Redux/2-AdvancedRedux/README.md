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
with a "404 Not Found" message. Create a "Components" directory
to store your new components.

<details>
<summary>Hint: Where to Look</summary>

If you are having trouble on this part, look
back at your work in Routing Problem Set #3.
</details>

<details>
<summary>Solution</summary>

1. Create a component for the sign-in view in "Components/SignIn.js":
```
function SignIn() {
    return (
        <div>Sign In</div>
    )
}

export default SignIn;
```
2. Create a component for the main view in "Components/Main.js":
```
function Main() {
    return (
        <div>Main</div>
    )
}

export default Main;
```
3. Create a component for the 404 view in "Components/NotFound.js":
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

## Problem 2: Counter Action and Reducer
Create a new directory inside the "src" folder named "Redux". Inside
that folder, create two new directories named "Actions" and "Reducers".
In these folders, make one new action and one reducer for increasing 
the current state by 1. The default value should be zero. Later,
we will use this piece of state to keep track of how many wizards
the user has classified.

<details>
<summary>Solution</summary>

1. In "Actions/IncreaseCounter.js":
```
export const IncreaseCounterAction = () => {
    return {
        type: "INCREASE"
    }
}
```
2. In "Reducers/CounterReducer.js":
```
export const CounterReducer = (state = 0, action) => {
    if (action.type === "INCREASE") {
        return state + 1
    }
    return state
}
```
</details>

## Problem 3: Log In/Log Out Actions and Reducer
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

## Problem 4: Wizard Actions and Reducer
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

## Problem 5: Combine Your Reducers
The Redux Store can only be created with one reducer.
For that reason, we must combine our reducers into one
mega reducer that we can pass into `createStore` later.

Create a new file in the "Reducers" directory named 
"CombinedReducer.js". Import all the reducers you
have made so far and export them as a single reducer.

<details>
<summary>Hint 1: Syntax</summary>

In order to combine your reducers, you need to use 
the `combineReducers` from the `redux` library.
This function takes only one argument, an object 
with name-value pairs where the name is anything that describes
the piece of state that reducer modifies (such as 'counter') 
and the value is a reducer.
</details>

<details>
<summary>Solution</summary>

In "Reducers/CombinedReducer.js":
```
import {combineReducers} from "redux";
import {WizardReducer} from "./WizardReducer";
import {LoggedReducer} from "./LoggedReducer";
import {CounterReducer} from "./CounterReducer";

export const combinedReducer = combineReducers({
    isLoggedIn: LoggedReducer,
    wizardChoices: WizardReducer,
    counter: CounterReducer
})
```

### More Info

---
The names we assign to our reducers inside the combined
reducers should help us identify which piece of state
that reducer modifies. In future problems, we will
write `state.isLoggedIn` in order to access
the piece of state that describes if the user has logged in
or not. This piece of state is referenced by the name (`isLoggedIn`)
we assign
to that particular reducer (`LoggedReducer`) in our combined 
reducer here. This will become clearer in the following problems.
</details>

## Problem 6: Create Your Store
Create a new file named "Store.js" in the "Redux" directory.
Create and export a new store object called `store` from this file.

<details>
<summary>Solution</summary>

In "Redux/Store.js":
```
import {createStore} from "redux";
import {combinedReducer} from "./Reducers/CombinedReducer";

export const store = createStore(combinedReducer)
```
The above code imports your combined reducer and creates and
exports a new Redux store object named `store`.

### More Info

---
The code here can be modified to look like this:
```
import {createStore} from "redux";
import {combinedReducer} from "./Reducers/CombinedReducer";

export const store = createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```
If you are using the Redux browser extension that
helps you keep track of your `state` (download for Google Chrome
[here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)),
this code will create a store that the browser extension
can recognize. Otherwise, the extension will not
be able to track your `state` and help you debug your code.
This browser extension is completely optional, but is nice to
have if you are working on a big project that uses Redux.
</details>

## Problem 7: Update "index.js" 
Now that you have successfully created your `store`, you must
wrap your `App` component with a special React-Redux component
that makes your `store` available to every component in your 
application. In "index.js", wrap your `App` component with
the `Provider` component from `react-redux`.

<details>
<summary>Solution</summary>

Your "index.js" file should now contain this code:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./Redux/Store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
```
</details>

## Problem 8: Tying it Together

Below you will find dropdown menus for an outline of the 
code that your Main view and SignIn views should contain.
Comments mark the spots where you should add your own code.

<details>
<summary>Sign In</summary>

```
import {Link} from "react-router-dom";

function SignIn() {
    return (
        <div>
            {/* Trigger your actions in the onClick attributes to update the piece of state determining if the user is logged in or not */}
            <button onClick={ }>Log In</button>
            <button onClick={ }>Log Out</button>

            {/* Add code in the curly braces below to show on the screen if the user is logged in or not */}
            <p>Logged In? {}</p>
            
            {/* Add code in the curly braces below to keep track of how many people the user has classified. */}
            <p>You have classified {} people.</p>
            
            {/* Add a line of code below that maps all of the user's choices to elements that are shown on the view */}
            {}
            
            {/* You must use React's <Link> here. If you use <a> tags, a new document will be loaded and your store will be reset. */}
            <Link to="/main">Main page Link</Link>
        </div>
    )
}

export default SignIn;
```
</details>

<details>
<summary>Main</summary>

```
import {Link} from "react-router-dom";

function Main() {
    
    const wizards = [
        {
            name: "Gandalf",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/DSC09942_-_Gandalf_%2837033407776%29.jpg/640px-DSC09942_-_Gandalf_%2837033407776%29.jpg"
        },
        {
            name: "Thor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/640px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
        },
        {
            name: "Iron Man",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/SDCC_2012_-_Tony_Stark_%287626726486%29.jpg/640px-SDCC_2012_-_Tony_Stark_%287626726486%29.jpg"
        },
        {
            name: "Old Harry Potter",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Daniel_Radcliffe_SDCC_2014.jpg/640px-Daniel_Radcliffe_SDCC_2014.jpg"
        },
        {
            name: "Jafar",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Aladdin_-_11884148073.jpg/640px-Aladdin_-_11884148073.jpg"
        },
        {
            name: "Ron Weasley",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rupert_Grint_%28cropped%29.JPG/640px-Rupert_Grint_%28cropped%29.JPG"
        },
        {
            name: "Barack Obama",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/640px-President_Barack_Obama.jpg"
        },
        {
            name: "Thats all folks! Check the Sign In page to see your selections.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/640px-Thats_all_folks.svg.png"
        }
    ]

    function WizardSelector() {
        return (
            <div>
                {/* Complete the image's src attribute using the state's counter variable to get the current wizard's image */}
                <img width="300px" src={} />

                {/* Add text to the paragraph below that shows the current wizard's name */}
                <p>{}</p>
                
                <button onClick={ () => {
                    if (index < wizards.length-1) {
                        // Dispatch the correct action for when someone has chosen the person is a wizard
                        // Dispatch the action that increases the counter
                    }
                }
                }>Yes, Wizard</button>
                <button onClick={ () => {
                    if (index < wizards.length-1) {
                        // Dispatch the correct action for when someone has chosen the person is not a wizard
                        // Dispatch the action that increases the counter
                    }
                }
                }>No, not a Wizard</button>
            </div>
        )
    }

    return (
        <div>
            <Link to="/sign-in">Sign In page Link</Link>
            { isLoggedIn ? <WizardSelector />: <h1>Please log in</h1> }
        </div>
    )
}

export default Main;
```
</details>

Keep in mind that you will need to add new import
statements to these files to make everything work.
Redux's `useDispatch()` and `useSelector()` functions
will come in handy here.


<details>
<summary>Solution</summary>

There's a lot going on here, so make sure to grab an 
instructor if you would like help understanding any
of this code.

1. In "SignIn.js":
```
import {useDispatch, useSelector} from "react-redux";
import {LogInAction} from "../Redux/Actions/LogIn";
import {LogOutAction} from "../Redux/Actions/LogOut";
import {Link} from "react-router-dom";

function SignIn() {
    const isLoggedIn = useSelector( (state) => state.isLoggedIn )
    const wizardChoices = useSelector( (state) => state.wizardChoices )
    const counter = useSelector( (state) => state.counter )
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={ () => dispatch(LogInAction())}>Log In</button>
            <button onClick={ () => dispatch(LogOutAction())}>Log Out</button>
            <p>Logged In? {isLoggedIn.toString()}</p>
            <p>You have classified {counter} people.</p>
            {wizardChoices.map( (wizard) => <div key={wizard.name}>{wizard.name}: {wizard.isWizard.toString()}</div> )}
            <Link to="/main">Main page Link</Link>
        </div>
    )
}

export default SignIn;
```
2. In "Main.js":
```
import {useDispatch, useSelector} from "react-redux";
import {YesWizardAction} from "../Redux/Actions/YesWizard";
import {NoWizardAction} from "../Redux/Actions/NoWizard";
import {IncreaseCounterAction} from "../Redux/Actions/IncreaseCounter";
import {Link} from "react-router-dom";

function Main() {

    const isLoggedIn = useSelector( (state) => state.isLoggedIn )
    const index = useSelector( (state) => state.counter )
    const dispatch = useDispatch()
    const wizards = [
        {
            name: "Gandalf",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/DSC09942_-_Gandalf_%2837033407776%29.jpg/640px-DSC09942_-_Gandalf_%2837033407776%29.jpg"
        },
        {
            name: "Thor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/640px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
        },
        {
            name: "Iron Man",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/SDCC_2012_-_Tony_Stark_%287626726486%29.jpg/640px-SDCC_2012_-_Tony_Stark_%287626726486%29.jpg"
        },
        {
            name: "Old Harry Potter",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Daniel_Radcliffe_SDCC_2014.jpg/640px-Daniel_Radcliffe_SDCC_2014.jpg"
        },
        {
            name: "Jafar",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Aladdin_-_11884148073.jpg/640px-Aladdin_-_11884148073.jpg"
        },
        {
            name: "Ron Weasley",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rupert_Grint_%28cropped%29.JPG/640px-Rupert_Grint_%28cropped%29.JPG"
        },
        {
            name: "Barack Obama",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/640px-President_Barack_Obama.jpg"
        },
        {
            name: "Thats all folks! Check the Sign In page to see your selections.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/640px-Thats_all_folks.svg.png"
        }
    ]

    function WizardSelector() {
        return (
            <div>
                <img width="300px" src={wizards[index].image} />
                <p>{wizards[index].name}</p>
                <button onClick={ () => {
                    if (index < wizards.length-1) {
                        dispatch(YesWizardAction(wizards[index].name))
                        dispatch(IncreaseCounterAction())
                    }
                }
                }>Yes, Wizard</button>
                <button onClick={ () => {
                    if (index < wizards.length-1) {
                        dispatch(NoWizardAction(wizards[index].name))
                        dispatch(IncreaseCounterAction())
                    }
                }
                }>No, not a Wizard</button>
            </div>
        )
    }

    return (
        <div>
            <Link to="/sign-in">Sign In page Link</Link>
            { isLoggedIn ? <WizardSelector />: <h1>Please log in</h1> }
        </div>
    )
}

export default Main;
```
</details>
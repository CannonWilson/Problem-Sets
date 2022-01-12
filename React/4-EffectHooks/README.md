# React Problem Set #4: Effect Hooks

---

## Problem 1: Create `InputField` component
Create a new file called "InputField.js". Add two React
state hooks, one called `text` and one called `valid`.
The component should contain one `<input>` element and one
`<p>` element. Changing the `<input>` element should trigger
the update function for the `text` hook. The `<p>` tag should
display whether the current text is valid or not. Import and
display the component on "App.js". Don't worry if your valid
value is not updating, that comes in Problem #2.

<details>
<summary>Hint 1: Where to look</summary>

Look back at the code you wrote for Problem Set #3 Problem 2
if you need to jog your memory.
</details>

<details>
<summary>Hint 2: Initial values</summary>

You should pass `useState` initial values of `"""` and `false` for
`text` and `valid`, respectively.
</details>

<details>
<summary>Hint 3: Input onChange</summary>

`onChange` takes in a function. That function should have one argument,
a React `ChangeEvent`. The function should return the code
to update `text` based on the value of the event target.
</details>

<details>
<summary>Hint 4: Value for `valid` not displaying</summary>

As a boolean, `valid` must be explicitly converted to the
string type.
</details>


<details>
<summary>Solution</summary>

1. In "InputField.js", import `useState`. Create the function
defining your component called `InputField`. Write two React
state hooks for `text` and `valid`, including update functions.
Return an `<input>` element and a `<p>` tag. Your entire "InputField.js"
file should look like this:
``` 
import {useState} from "react";

function InputField() {
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false)

    return (
        <div>
            <input placeholder="type here" onChange={ (event) => setText(event.target.value)} />
            <p>More than two characters? {String(valid)}</p>
        </div>
    )
}

export default InputField;
```
2. Import the component with `import InputField from "./Components/InputField";`
at the top of "App.js". 
3. Add your component inside the `App` function's return statement
with `<InputField />`.

## More Info

---

In order to convert `valid`'s boolean value to a string
that can be displayed on the page, you have to explicitly
convert it to a string. You can do this with the `String()`
function as shown above. Another way to do it:
```
<p>{`More than two characters? ${valid}`}</p>
```

</details>


## Problem 2: `useEffect` for input validation
Use the `useEffect` hook for realtime validation of 
the user's input into your component. If the input
is two characters or longer, update the value of 
`valid` to `true`. Otherwise, update the value to
`false`. The effect should be triggered every time
`text` is updated.

<details>
<summary>Hint 1: syntax</summary>

After you declare your state hooks, write `useEffect()`.
Inside the parentheses, you will provide two arguments,
one is the callback function that you want to trigger.
The second argument is an array of dependencies, whenever
one is updated, the callback function is called again.
</details>

<details>
<summary>Hint 2: callback function</summary>

Inside the callback function, you should check if the length
of the `text` variable is greater than two. Then, update the
`valid` variable accordingly.
</details>

<details>
<summary>Solution</summary>

1. Change your import statement to now include `useEffect`:
```
import {useState, useEffect} from "react";
```
2. Create a new `useEffect` hook with `text` as its only
dependency. The callback function should be an anonymous
arrow function that checks if `text.length` is greater
than 2 and updates the `valid` variable. This code
should be below your state hook declarations but
above your component function's return statement. See below:
```
useEffect( () => {
        if (text.length > 2) {
            setValid(true);
        }
        else {
            setValid(false);
        }
    }, [text])
```

### More Info

---

We use React's `useEffect` hook to contain side effects.
Remember that a block of code has a side effect if it relies on
or changes something outside its parameters. In this example,
our `setText` function has a side effect because our `valid` variable
depends on the value of the `text` variable, which `setText` is updating.

`useEffect` allows a developer to control when a function runs based
on when certain data changes. This function is called the callback 
function, and this data is called dependencies. Putting code inside
a callback function means that the code will be triggered once, and
then only again if the dependencies change. This means that the
component containing the `useEffect` logic will not 
trigger the callback function on every rerender, only when the data
has changed. Limiting the amount of code that gets triggered on
rerender is crucial to optimizing the performance of your website.
Otherwise, out-of-control rerendering can slow down your site and
make your UI unresponsive.
</details>

## Challenge: `useEffect` for an API call
Create a new file called "GuessAge.js" in the "Components"
directory. In that file, make a new component named
`GuessAge`, and display the component in "App.js".
Pass in a name as a prop to the component. The name can be whatever
name you like, as long as it is of type `string`. Use `useEffect`
inside the component to contain an API call to "https://api.agify.io/?name=".
The callback function of `useEffect` should only be triggered once.
Note that your specific name query will have to be included in the
URL after the equal sign. "agify.io" provides a fun, free API that
guesses the age of a person based only on their name. The API
requires no validation, meaning you won't need an API key. Get the name
property out of the object that gets returned by your request and
display the name on the page inside a `<p>` tag.

<details>
<summary>Hint 1: File Setup</summary>

You'll need to import both `useState` and `useEffect` at the top
of the file. Make sure your `GuessAge` function takes props 
as an argument. Then, make a React state hook for a variable
that will store the result of your API call. I called this
variable `result`. Inside the parentheses of `useEffect`, you'll
make your API request. Return one `<p>` tag with contents including
your input name and the `result` variable's value.
</details>

<details>
<summary>Hint 2: Making `useEffect` Run Only Once</summary>

`useEffect` triggers the callback function once by default. Then,
the callback function is triggered again when a dependency 
changes. To avoid triggering the callback function more than once, 
don't specify any dependencies as an argument. 
</details>

<details>
<summary>Hint 3: API Call</summary>

Use `fetch` to make an API call from the URL in the instructions.
Remember to pass in your input name at the end of the URL in 
order to make a valid query.
</details>

<details>
<summary>Hint 4: After the API Call</summary>

Remember that `.then()` after a `fetch` request allows you
to work with the result from the API call. You'll first want to
turn the response into a JSON format. Then, use the corresponding
property name of the output given back to you by the API to update
the `result` state variable you made.
</details>

<details>
<summary>Hint 5: The API's Response </summary>

Examine the output from your API call by passing in example input
to the query. The result can be viewed in your browser by viewing
"https://api.agify.io/?name=joe" for instance. The API appears 
to give back an object containing a `"name"`, `"age"`, and `"count"`.
Only the name property will be useful to you as you update your
React `result` state variable after your fetch request.
</details>

<details>
<summary>Solution</summary>

1. Your "GuessAge.js" file should look like this:
```
import {useState, useEffect} from "react";

function GuessAge(props) {

    const [result, setResult] = useState("");

    useEffect( async () => {
        fetch(`https://api.agify.io/?name=${props.name}`)
            .then(response => response.json())
            .then(response => setResult(response.age))
    })

    return (
        <p>Result: {props.name} is {result} years old.</p>
    )
}

export default GuessAge;
```
2. Make sure you are importing your component in "App.js"
3. In "App.js", pass in whatever name you like as a prop
like this:
```
<GuessAge
    name="Joe"
/>
```
### More Info

---

Notice that `useEffect` is only being given a callback function,
and no dependencies. After the callback function runs once
by default, changes in the dependencies trigger the
callback function again. To avoid this, don't specify any dependencies.
This can be done by not specifying another argument after the callback
function, or by giving `useEffect` an empty array, like so:
```
useEffect( async () => {
        fetch(`https://api.agify.io/?name=${props.name}`)
            .then(response => response.json())
            .then(response => setResult(response.age))
    }, [])
```

After Problem #2, I talked about how `useEffect` can reduce
the amount of code that gets triggered on rerender. To see this
for yourself, change the `<p>` in the return statement of 
your `GuessAge` function to look like this:
```
<p style={{backgroundColor: "green"}}>Result: {props.name} is {result} years old.</p>
```
Now, try changing the background color from green to red. 
Notice that when you view your component in the browser, 
it gets rerendered because your styling caused its appearance 
to change. But, your code does not make another API
call. Pretty cool, right? You can imagine a situation not too
dissimilar, where you as a developer want to change the way
a component looks without triggering a complicated API call. For
instance, imagine that you have a web-based tool that displays any kind of
data that also allows the user to customize the appearance of
the tool according to a number of color themes. You don't want to 
trigger another API call and have the tool go blank everytime 
they change the appearance of the tool, right? Or another example:
imagine that you are showing a button with the user's name
on it, like "Click me {name}". You don't want their name to 
disappear right before they click the button 
because you're making another API call to get their name again, right? 
I hope these examples make the point of why `useEffect` is so awesome.
</details>
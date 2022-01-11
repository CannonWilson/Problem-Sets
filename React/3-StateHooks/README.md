# React Problem Set #3: State Hooks

---

## Problem 1: Add the necessary import statement in App.js to use state hooks

<details>
  <summary>Solution</summary>

1. At the top of "App.js", write:
```
import {useState} from "react"
```
</details>

## Problem 2: Create a new state variable called `number` and display its value in a `<p>` tag
Initialize number as zero.

<details>
<summary>Hint 1</summary>

Remember that the function you want to use is `useState()`. 
Pass in your initial value inside the parentheses. Write this line
of code above the `App` function's return statement.
</details>

<details>

<summary>Hint 2</summary>

Now that you've written `useState(0)`, you have to create
a new array variable with two values and set it equal to 
`useState(0)`.
</details>

<details>

<summary>Solution</summary>

1. Write this code above the `App` function's return statement:
``` 
   const [number, setNumber] = useState(0);
```
2. Add a `<p>` tag inside the `App` function's return statement:
``` 
<p>number: {number}</p>
```

### More Info

---

`useState` is a function included in the React library that 
returns two things, a state value and a function to update
that value. Here, our state value is called `number`, and
we call the function used to update it `setNumber`. React's
state update functions are special because they only rerender the
component the state is inside. Rerendering a whole page takes 
more time and resources than rerendering just one component. 
In this problem, our state hook is inside 
our `App` component, so we are not benefitting from this
selective rerendering property. However, 
we'll see this benefit play out when we make
a separate component in Problem 4 of this problem set.
</details>

## Problem 3: Use buttons to update `number` 
Create two buttons, one that increases the number by one, 
and one that squares the number

<details>
<summary>Hints</summary>

1. Create two new button elements inside the `App` function's return 
statement. 
2. Supply their `onClick` attributes with functions that 
update `number` using the `setNumber` function you already created.
</details>

<details>
<summary>Solution</summary>

1. Add a button inside the `App` function's return statement 
that looks like this:
``` 
<button onClick={ () => setNumber(number+1)}> Add one </button>
```
2. Add another button in the same place with the following code:
``` 
<button onClick={ () => setNumber(number**2)}> Square </button>
```

### More Info

---

Remember that the `onClick` attribute of a button takes a function
as an argument. The syntax `() =>` means that we are passing
in an anonymous function that uses no parameters.

The content of the anonymous function uses the update function you
already created when you declared your state hook. You pass
in the desired new value of number, and the update function
sets your state value to the desired value and rerenders the
component the hook is inside (`App` in this case).
</details>

## Problem 4: Move the functionality and elements you created into a new component
Create a new file called "Number.js" inside your "Components" directory.
Create a function called `Number` that uses your state hook and returns the
components you just created. Make sure you are rendering the same content
to the screen as in Problem #3.

<details>
<summary>Solution</summary>

1. Create the new file in the "Components" directory as instructed above
2. Add the following code to the new "Number.js" file you created:
``` 
import {useState} from "react"

function Number() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <p>number: {number}</p>
            <button onClick={ () => setNumber(number+1)}> Add one </button>
            <button onClick={ () => setNumber(number**2)}> Square </button>
        </div>
    )
}

export default Number;
```
3. Remove the React hook and the elements you wrote in this problem
set from "App.js". You can also remove the `useState` import statement at the
top of "App.js"
4. Add the following import at the top of "App.js":
``` 
import Number from "./Components/Number";
```
5. Add your custom `Number` component inside the `App` function's
return statement like so:
``` 
<Number />
```

### More Info

---

Awesome job! You just created your own component that 
uses React's state hook. Now, whenever you press 
either button to update `number`, only your component
rerenders, instead of your whole page rerendering. 
Now you're saving processing power on your visitors' 
devices and eliminating the visual lag that occurs when
the browser rerenders many elements at once.

</details>

## Challenge: Create a simple contact form that displays user input on submit
Create a new file called "ContactForm.js" in your
"Components" directory. In that file, make a new
function called `ContactForm`. Create three new
React state hooks for `firstName`, `lastName`, and
`email`. The `ContactForm` component should contain
three input fields, one submit button, and an empty 
`<p>` tag that will display the user's
first name, last name, and email 
once the submit button is pressed. Place the 
`ContactForm` component in "App.js" when you
are finished building it.

<details>
<summary>Hint 1: useState</summary>

The initial value for your state variables should 
be an empty string.
</details>

<details>
<summary>Hint 2: Input Field Changes</summary>

Much like the `onClick` attribute we used for our
buttons in Problem 3, the `input` tags will use
the `onChange` attribute. `onChange` takes a function
as an argument. The function you give it should take an
[input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
as an argument and use `event.target.value`
to update the first name, last name, or email.
</details>

<details>
<summary>Hint 3: Button's Submit Function</summary>

The button you create should have an `onClick` attribute
that references a function. For clarity, I created a new named 
function called `SubmitFunction`,
and I placed the function be inside the `ContactForm` 
function but above the `ContactForm` function's return statement.
</details>

<details>
<summary>Hint 4: Rendering User Input to the Screen</summary>

Your `<p>` tag should be given an `id` so that you can reference
it from inside the function that the submit button calls for `onClick`.
Inside that function, change the `<p>` tag's `innerHTML` 
(an easy way is by using
[template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals))
to be a string containing the values of the state variables you created.
</details>

<details>
<summary>Solution</summary>

1. Add the following code to "ContactForm.js":
``` 
import {useState} from "react";

function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    function SubmitFunction() {
        document.getElementById("output").innerHTML = `first: ${firstName}, last: ${lastName}, email: ${email}`;
    }

    return (
        <div>
            <input placeholder="first name" onChange={event => setFirstName(event.target.value)} />
            <input placeholder="last name" onChange={event => setLastName(event.target.value)} />
            <input placeholder="email" onChange={event => setEmail(event.target.value)} />
            <button onClick={SubmitFunction}>Submit</button>
            <p id="output" />
        </div>
    )
}

export default ContactForm;
```
2. Import the `ContactForm` component at the top of "App.js":
``` 
import ContactForm from "./Components/ContactForm";
```
3. Display your component to the screen by referencing it inside
the `App` function's return statement:
```
<ContactForm />
```

### More Info

---

It will help to break down what's going on in step 1 of the solution.
First, we import `useState` like we did in Problem #1.
Then, we created the `ContactForm` function that defines our
`ContactForm` component. Then, we create three React state hooks
for the user's `firstName`, `lastName`, and `email`, as well as
update functions for all of those state variables.

Next, we declare a function called `SubmitFunction` that references
the empty `<p>` tag's `id` and sets its `innerHTML` to contain
the state values we created earlier. 

Inside the return statement, we include three input fields,
one submit button, and an empty `<p>` tag. The input fields
have an `onChange` attribute that takes an anonymous function.
The anonymous function takes an [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
as an argument and returns a call to the corresponding state
update function. The [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
is an object with various
properties that is created whenever editable content (such 
as an input field) is changed. The state update function is given the
input `event`'s `target`'s current `value`, which is the
entire string input the user has typed into that input field. 
To clarify, the target is the HTML element that the event
object is referencing, the editable element the
user is currently typing inside.

Finally, our submit button calls our `SubmitFunction` whenever
it is pressed.

</details>
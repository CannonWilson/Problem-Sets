# Node Problem Set #3: Libraries and Modules

In this quick problem set, you will create 
your own library, 
as well as your own module
so you can gain an appreciation for 
how they work.

A note on `import` vs. `require`: 

To use `import {useState} from "react"`, we must have
`"react"` as a dependency in our "package.json" file, 
which then points to a valid node module to grab the correct code.
Because we will not write our own node module 
by uploading our code to the npm registry,
we must use the `require` syntax for our module.



## Problem 1: Create Your Own Math Library
For a simple definition, a library is just
a collection of reusable code. Usually we
use other people's or other organizations'
libraries (like React), and we expect that
these libraries have good documentation
so that we can easily use them ourselves.
However, we can write our own libraries too.
In this problem, you will create your own
library that contains definitions for 
adding, multiplying, subtracting,
and dividing two numbers.

Start by creating a new folder at the root
of a project. It is important that there are
no npm-related files or folders in the directory.
Create a file named "MathLibrary.js". Inside the
file, define an object called `Math` with methods
for adding, multiplying, subtracting, and dividing
two numbers.

<details>
<summary>Hint 1: JS Object Syntax</summary>

Remember that an object is created with this
basic format:
```
const MyObject = {
    
}
```
</details>

<details>
<summary>Hint 2: Adding Methods to Objects</summary>

An object is given a method like this:
```
const MyObject = {
    MyMethod: function() {
        console.log("MyMethod triggered")
    }
}
```
or like this:
```
const MyObject = {
    AnotherMethod: () => {
        console.log("AnotherMethod triggered")
    }
}
```
</details>

<details>
<summary>Hint 3: Adding Multiple Methods to Objects</summary>

An object is given multiple methods or properties by
separating them with commas like this:
```
const MyObject = {
    propertyOne: "First property",
    propertyTwo: 2,
    
    MyMethod: function() {
        console.log("MyMethod triggered")
    },
    AnotherMethod: () => {
        console.log("AnotherMethod triggered")
    }
}
```
</details>

<details>
<summary>Solution</summary>

Your "MathLibrary.js" file should look like this:
```
const Math = {
    Add: function (x, y) {
        return x + y;
    },
    Multiply: function(x, y) {
        return x * y;
    },
    Subtract: function (x, y) {
        return x - y;
    },
    Divide: function(x, y) {
        return x / y;
    }
}
```
</details>

## Problem 2: Export Your Module

Export the module you created using the
`module.exports` syntax. `module.exports` 
is a special object included in every JS
file in your Node application. Whatever you
assign to it will be exposed to other
files for them to import using the
`require` syntax.

<details>
<summary>Solution</summary>

Write the following code after you declare your `Math` object:
```
module.exports = Math
```
</details>

## Problem 3: Import Your Module in Another File

Create a new file in the same directory as "MathLibrary.js"
called "MyCode.js". Inside "MyCode.js", import your module,
and `console.log` the results of using all the methods you
created for the different operations on random inputs.
Then, use Node to run your code.

<details>
<summary>Hint 1: Import Your Module</summary>

Create a new variable to store the `Math` object 
from your library and assign to it
using the `require` syntax.
</details>

<details>
<summary>Hint 2: Using Your Methods</summary>

Once you import your module and assign it
a variable name, you will be able to get 
the result of a problem like you would with
any other object:
```
Object.OperationName(input);
```
</details>

<details>
<summary>Solution</summary>

1. Add the following contents to "MyCode.js"
```
const MyMath = require("./MathLibrary.js");

console.log("Add 2 and 4", MyMath.Add(2,4));
console.log("Multiply 2 and 4", MyMath.Multiply(2,4));
console.log("Subtract 5 from 4", MyMath.Subtract(4,5));
console.log("Divide 8 by 4", MyMath.Divide(8,4));
```
2. Run `node MyCode.js` to see the output of your program.

### More Info

---

Congrats! You just created your own module/library. 
Hopefully this problem set helps you appreciate
what's going on when you import
third party code to use in your application.

</details>



virtual pointer
import slides, speeches, notecards
give feedback on body language, movement, etc.
Recording features
Give feedback on slides on the website
Analyze audio for feedback (rushing, too slow, etc.)
Can you detect 'um uh'
Change your preparation time 
Physiological responses (heart rate, breathing)
Physical experience of presenting (blasting lights, echoing)
Actually teach good public speaking skills (how to organize a talk)
- Start with how
- Descriptive titles
- Know how to introduce everything

Q: How would people pay?

The power of mental imaging (when it happens, you're prepared)
How to have crucial conversations (needed outcomes, potential responses)
- Dealing with hostility
- Preparing for interviews (have a big base of potential interview questions)
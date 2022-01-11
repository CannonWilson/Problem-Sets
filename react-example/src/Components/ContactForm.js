// Code for React Problem Set #3 Challenge

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
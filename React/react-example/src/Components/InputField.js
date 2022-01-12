// Problem Set #4 Problem 1

// Problem Set #4 Problem 1
// import {useState} from "react";

// Problem Set #4 Problem 2
import {useState, useEffect} from "react";

function InputField() {
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false)

    // Problem Set #4 Problem 2
    useEffect( () => {
        if (text.length > 2) {
            setValid(true);
        }
        else {
            setValid(false);
        }
    }, [text])

    return (
        <div>
            <input placeholder="type here" onChange={ (event) => setText(event.target.value)} />
            <p>More than two characters? {String(valid)}</p>
        </div>
    )
}

export default InputField;
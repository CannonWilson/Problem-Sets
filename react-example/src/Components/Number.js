// Code for React Problem Set #3 Problem 4

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
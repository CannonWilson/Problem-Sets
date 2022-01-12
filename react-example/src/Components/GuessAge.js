// React Problem Set #4 Challenge
import {useState, useEffect} from "react";

function GuessAge(props) {

    const [result, setResult] = useState("");

    useEffect( async () => {
        fetch(`https://api.agify.io/?name=${props.name}`)
            .then(response => response.json())
            .then(response => setResult(response.age))
    })

    return (
        // Try adding this code inside the opening <p> tag below and see
        // if your can see your age disappear while another API call is made.
        // Spoiler alert, the age will stay put even though the component
        // is being rerendered. Cool!
        // style={{backgroundColor: "red"}}
        <p>Result: {props.name} is {result} years old.</p>
    )
}

export default GuessAge;
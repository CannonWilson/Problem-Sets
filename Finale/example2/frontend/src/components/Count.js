import {useState, useEffect} from 'react'
import "./Count.css"

function Count() {

    const [count, setCount] = useState(0)
    const [selection, setSelection] = useState("name")
    const [query, setQuery] = useState("")
    const [resMessage, setResMessage] = useState("")


    useEffect( () => {
        const selectElem = document.getElementsByTagName('select')[0]

        selectElem.onchange = () => {
            const index = selectElem.selectedIndex
            let inputText = selectElem.children[index].value.toLowerCase()
            setSelection(inputText)
        }
    })


    useEffect( () => {

        document.getElementById("nameInput").className = "inactive"
        document.getElementById("emailInput").className = "inactive"
        document.getElementById("phoneInput").className = "inactive"
        document.getElementById(selection + "Input").className = "active"

    }, [selection])


    async function countBtnClicked() {
        setResMessage("waiting . . .")
        const url = "http://localhost:4000/users/" + selection + "/" + query
        const rawRes = await fetch(url)
        if (rawRes.ok) {
            const jsonRes = await rawRes.json()
            setResMessage(jsonRes)
        }
        else {
            setResMessage("Something went wrong. Please try again.")
        }
    }

    return(
        <div>
            <h1>Count page</h1>
            <hr></hr>
            <label>Search by:</label>

            <select>
                <option id="nameBtn">Name</option>
                <option id="emailBtn">Email</option>
                <option id="phoneBtn">Phone</option>
            </select>

            <input name="name" placeholder="name" id="nameInput" onInput={() => setQuery(document.getElementById('nameInput').value)} />
            <input name="email" placeholder="email" id="emailInput" onInput={() => setQuery(document.getElementById('emailInput').value)} />
            <input name="phone" placeholder="phone" id="phoneInput" onInput={() => setQuery(document.getElementById('phoneInput').value)} />
            <button onClick={countBtnClicked}>Get count</button>

            <p>{resMessage}</p>
        </div>
    )
}

export default Count
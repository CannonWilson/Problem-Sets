import {useState, useEffect} from 'react'
import "./Count.css"

function Count() {

    const [count, setCount] = useState(0)
    const [selection, setSelection] = useState("name")
    const [resMessage, setResMessage] = useState("")

    async function getCount() {
        const rawRes = await fetch()
    }

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
        const url = "https://localhost:4000/users/" + selection
        const rawRes = await fetch(url)
        const jsonRes = await rawRes.json()


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
            <input placeholder="name" id="nameInput" />
            <input placeholder="email" id="emailInput" />
            <input placeholder="phone" id="phoneInput" />
            <button onClick={countBtnClicked}>Get count</button>

            <p>{resMessage}</p>
        </div>
    )
}

export default Count
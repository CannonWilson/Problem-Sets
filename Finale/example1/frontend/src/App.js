import React, {useState} from 'react'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [result, setResult] = useState("")


    async function insertData() {
      const url = "http://localhost:4000/users/" + name + "/" + email
      const res = await fetch(url)
      if (res.ok) {
        setResult("Looks like that insertion was successful, check your db!")
      }
      else {
        setResult("Uh oh, an error occurred. Please try again.")
      }
    }

  return (
    <div>
      <input onChange={() => setName(document.getElementById('name').value)} placeholder="Name:" id="name"/>
      <input onChange={() => setEmail(document.getElementById('email').value)} placeholder="Email:" id="email"/>
      <button onClick={insertData}>Insert document</button>
      <p id="target">{result}</p>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

// React Problem Set #4 Problem 3
import GuessAge from "./Components/GuessAge";

// React Problem Set #4 Problem 1
import InputField from "./Components/InputField";

// React Problem Set #3 Problem 1, removed in Problem 4
// import {useState} from "react"

// React Problem Set #3 Problem 4
import Number from "./Components/Number";

// React Problem set #3 Challenge
import ContactForm from "./Components/ContactForm";

// React Problem set #2 Problem 1
// function StoreItem() {
//   return <h2>This is an item.</h2>
// }

// React Problem Set #2 Problem 2
// function StoreItem(props) {
//   return <h2>number: {props.number}, name: {props.name}, price: {props.price}</h2>
// }

// React Problem Set #2 Problem 3
import StoreItem from "./Components/StoreItem";

function App() {

  // React Problem Set #2 Challenge
  const items = [
    {
      id: 0,
      title: "banana",
      cost: 0.49
    },
    {
      id: 1,
      title: "car",
      cost: 15000
    },
    {
      id: 2,
      title: "monkey",
      cost: 2
    },
    {
      id: 3,
      title: "table",
      cost: 2000
    },
    {
      id: 4,
      title: "couch",
      cost: 600
    },
    {
      id: 5,
      title: "remote",
      cost: 20
    },
    {
      id: 6,
      title: "bowl",
      cost: 3
    },
    {
      id: 7,
      title: "drums",
      cost: 2500
    },
    {
      id: 8,
      title: "diploma",
      cost: 1000000
    },
    {
      id: 9,
      title: "tv",
      cost: 400
    },
    {
      id: 10,
      title: "phone",
      cost: 1000
    },
    {
      id: 11,
      title: "pillow",
      cost: 50
    }
  ]

  // React Problem Set #3 Problem 2
  // const [number, setNumber] = useState(0)


  return (
    <div className="App">
      <header className="App-header">

        {/* React Problem Set #4 Challenge */}
        <GuessAge
            name="Joe"
        />

        {/* React Problem Set #4 Problem 1 */}
        <InputField />


        {/* Code for React Problem Set #3 Challenge*/}
        <ContactForm />


        {/* React Problem Set #3 Problem 2 */}
        {/* <p>number: {number}</p> */}


        {/* React Problem Set #3 Problem 3 */}
        {/*<button onClick={ () => setNumber(number+1)}> Add one </button>*/}
        {/*<button onClick={ () => setNumber(number**2)}> Square </button>*/}


        {/* React Problem Set #3 Problem 4 */}
        <Number />


        {/* React Problem Set #2 Problem 1 */}
        {/*<StoreItem />*/}
        {/*<StoreItem />*/}
        {/*<StoreItem />*/}


        {/* React Problem Set #2 Problem 2 */}
        {/*<StoreItem*/}
        {/*    number={0}*/}
        {/*    name="banana"*/}
        {/*    price={0.49}*/}
        {/*/>*/}
        {/*<StoreItem*/}
        {/*    number={1}*/}
        {/*    name="car"*/}
        {/*    price={15000}/>*/}
        {/*<StoreItem*/}
        {/*    number={2}*/}
        {/*    name="monkey"*/}
        {/*    price={2}*/}
        {/*/>*/}


        {/* React Problem Set #2 Challenge */}
        {items.map( item => {
          return <StoreItem
              number = {item.id}
              name = {item.title}
              price = {item.cost}
          />
        } )}


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        {/* React Problem Set #1 Problem 3 */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
    </div>
  );
}

export default App;

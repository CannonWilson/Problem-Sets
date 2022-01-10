import logo from './logo.svg';
import './App.css';
import StoreItem from "./Components/StoreItem";

function App() {

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

  return (
    <div className="App">
      <header className="App-header">

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

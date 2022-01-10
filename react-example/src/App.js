import logo from './logo.svg';
import './App.css';
import {StoreItem} from "./Components/StoreItem";

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <StoreItem
            number={0}
            name="banana"
            price={0.49}
        />
        <StoreItem
            number={1}
            name="car"
            price={15000}/>
        <StoreItem
            number={2}
            name="monkey"
            price={2}
        />

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

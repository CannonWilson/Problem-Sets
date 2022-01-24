// Redux Problem Set #1

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

const increaseAction = () => {
    return {
        type: "INCREASE",
    }
}

const decreaseAction = () => {
    return {
        type: "DECREASE"
    }
}

const reducer = (state = 0, action) => {
    if (action.type === "INCREASE") {
        // console.log(state+1)
        return state + 1
    }
    if (action.type === "DECREASE") {
        // console.log(state-1)
        return state - 1
    }
    return state
}


const store = createStore(reducer)
store.subscribe( () => {
    console.log(store.getState())
})

ReactDOM.render(
    <div>
        <button onClick={ () => store.dispatch(increaseAction())}>Increase</button>
        <button onClick={ () => store.dispatch(decreaseAction())}>Decrease</button>
    </div>,
  document.getElementById('root')
);

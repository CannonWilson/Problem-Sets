// File for React Problem Set #2 Problem 3

// React Problem Set #2 Problem 4
import "./StoreItem.css"

function StoreItem (props) {
    // React Problem Set #2 Problem 4 add blue-background className
    return <h2 className="blue-background">number: {props.number}, name: {props.name}, price: {props.price}</h2>
}

export default StoreItem
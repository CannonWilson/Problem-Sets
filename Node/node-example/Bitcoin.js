// Node Problem Set #1 Problem 2

import fetch from "node-fetch"

function GetPrice() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(response => console.log(response.bpi.USD.rate))
}

setInterval(GetPrice, 10 * 1000);
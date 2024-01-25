//component file
import ListContainer from "./components/ListContainer"
import React from "react"
import ReactDOM from "react-dom"

// const element = <h1>Hello from Create React App</h1>
// ReactDOM.render(element, document.getElementById("root"))


ReactDOM.render(
    <React.StrictMode>
        <ListContainer/>
    </React.StrictMode>,
    document.getElementById("root"))
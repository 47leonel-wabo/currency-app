import "./App.css";
import Header from "./components/common/Header";
import List from "./components/list/List";
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "./index.css";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header title={"Crypto-Currencies"}/>
            <List/>
        </div>
    );
}

export default App;

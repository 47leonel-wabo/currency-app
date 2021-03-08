import "./App.css";
import Header from "./components/common/Header";
import "./index.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from "react";
import List from "./components/list/List";

function App() {
    return (
        <BrowserRouter>
            <>
                <Header title={"Crypto-Currencies"}/>
                <Switch>
                    <Route path="/currencies" component={List} exact/>
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default App;

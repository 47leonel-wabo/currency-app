import "./App.css";
import Header from "./components/common/Header";
import "./index.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from "react";
import List from "./components/list/List";
import NotFound from "./components/not_found/NotFound";
import CurrencyDetails from "./components/details/CurrencyDetails";

function App() {
    return (
        <BrowserRouter>
            <>
                <Header title={"Crypto-Currencies"}/>
                <Switch>
                    <Route path="/currencies" component={List} exact/>
                    <Route path="/currency/:id" component={CurrencyDetails} exact/>
                    <Route component={NotFound}/>
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default App;

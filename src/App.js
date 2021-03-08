import "./App.css";
import Header from "./components/common/Header";
import List from "./components/list/List";
import "./index.css";

function App() {
    return (
        <div className="App">
            <Header title={"Crypto-Currencies"}/>
            <List/>
        </div>
    );
}

export default App;

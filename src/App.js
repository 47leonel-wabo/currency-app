import "./App.css";
import AppBody from "./components/Body";
import Header from "./components/common/Header";
import List from "./components/list/List";

function App() {
  return (
    <div className="App">
      <Header title={"React Application"} />
      <AppBody />
      <List />
    </div>
  );
}

export default App;

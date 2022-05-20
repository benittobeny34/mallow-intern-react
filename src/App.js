import './App.css';
import Counter from "./components/Counter";
import DataFetching from "./components/DataFetching";
import DataFetchingSingleRecord from "./components/DataFetchingSingleRecord";

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      {/*  <DataFetching/>*/}
        <DataFetchingSingleRecord/>
    </div>
  );
}

export default App;

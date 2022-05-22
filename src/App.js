import logo from './logo.svg';
import './App.css';
import CounterOne from "./components/CounterOne";
import ComplexState from "./components/ComplexState";
import MultipleUseReducer from "./components/MultipleUseReducer";

function App() {
  return (
    <div className="App">
        {/*<CounterOne/>*/}
        {/*<ComplexState/>*/}
        <MultipleUseReducer/>
    </div>
  );
}

export default App;

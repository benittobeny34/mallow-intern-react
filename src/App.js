import './App.css';
import React, {useReducer} from "react";
import ComponentA from "./components/ComponentA";

const initialState = 0;

const counter = (state, action) => {
    if (action === 'increment') {
        return state + 1;
    } else if (action === 'decrement') {
        return state - 1;
    } else {
        return initialState;
    }
}

export const CounterContext = React.createContext();

function App() {
    const [count, dispatch] = useReducer(counter, initialState);
    return (
        <CounterContext.Provider value={{counterValue: count, handler: dispatch}}>
            <div className="App">
                <p>Count {count}</p>
                <ComponentA/>
            </div>
        </CounterContext.Provider>
    );
}

export default App;

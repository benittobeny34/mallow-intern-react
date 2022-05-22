import React, {useReducer} from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 5,
};

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'increment1':
            return {...state, firstCounter: state.firstCounter + 1};
        case 'decrement1':
            return {...state, firstCounter: state.firstCounter - 1};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + 1};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - 1}
        case 'reset':
            return initialState;
    }
}

function ComplexState() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Counter1: {state.firstCounter}</p>
            <p>Counter2: {state.secondCounter}</p>
            <button onClick={() => dispatch({type: 'increment1'})}>Increment Counter One</button>
            <button onClick={() => dispatch({type: 'decrement1'})}>Decrement Counter One</button>

            <button onClick={() => dispatch({type: 'increment2'})}>Increment Counter 2</button>
            <button onClick={() => dispatch({type: 'decrement2'})}>Decrement Counter 2</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset All Counter</button>
        </div>
    )
}

export default ComplexState;
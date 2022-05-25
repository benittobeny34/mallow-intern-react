import React, {useContext} from "react";
import ComponentC from "./ComponentC";
import {CounterContext} from "../App";

function ComponentB() {
    const counterContext = useContext(CounterContext);
    return (
        <div>
            <div>
                <button onClick={() => {
                    counterContext.handler('increment')
                }}>
                    IncrementB
                </button>
                <button onClick={() => {
                    counterContext.handler('decrement')
                }}>DecrementB
                </button>
                <button onClick={() => {
                    counterContext.handler('reset')
                }}>ResetB
                </button>
            </div>
            <ComponentC/>
        </div>
    )
}

export default ComponentB;
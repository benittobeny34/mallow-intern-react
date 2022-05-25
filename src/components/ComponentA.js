import React, {useContext} from "react";
import ComponentB from "./ComponentB";
import {CounterContext} from "../App";

function ComponentA() {
    const counterContext = useContext(CounterContext)
    return (
        <div>
            <div>
                <button onClick={() => {
                    counterContext.handler('increment')
                }}>
                    IncrementA
                </button>
                <button onClick={() => {
                    counterContext.handler('decrement')
                }}>DecrementA
                </button>
                <button onClick={() => {
                    counterContext.handler('reset')
                }}>ResetA
                </button>
            </div>
            <ComponentB/>
        </div>
    )
}

export default ComponentA;
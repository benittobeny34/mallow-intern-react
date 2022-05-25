import React, {useContext} from "react";
import {CounterContext} from "../App";

function ComponentD() {
    const counterContext = useContext(CounterContext)
    return (
        <div>
            <div>
                <button onClick={() => {
                    counterContext.handler('increment')
                }}>
                    IncrementD
                </button>
                <button onClick={() => {
                    counterContext.handler('decrement')
                }}>DecrementD
                </button>
                <button onClick={() => {
                    counterContext.handler('reset')
                }}>ResetD
                </button>
            </div>
        </div>
    )
}

export default ComponentD;
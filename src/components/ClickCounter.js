import React, {useState} from "react";

function ClickCounter() {
    let initialName = {"firstName": "", "lastName": ""};
    const [count, setCount] = useState(0);
    const [name, setName] = useState(initialName)
    return (
        <div className="click-counter">
            <button
                onClick={
                    () => {
                        setCount(count + 1)
                    }
                }
            >Clicked {count} times
            </button>
            <input type="text" onChange={updateFirstName}/>
            <input type="text" onChange={updateLastName}/>

            <div>{JSON.stringify(name)}</div>
        </div>
    )

    function updateFirstName(e) {
        setName({
            ...name,
            firstName: e.target.value,
        });
    }

    function updateLastName(e) {
        setName({
            ...name,
            lastName: e.target.value
        });
    }
}

export default ClickCounter;
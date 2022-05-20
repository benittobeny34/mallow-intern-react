import React, {useState, useEffect} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    //useEffect runs the callback function after every render, component did mount, component did update
    useEffect(() => {
        document.title = `${count} times clicked`;
    })
    return (
        <div>
            <button onClick={
                () => {
                    setCount(count + 1)
                }
            }
            >Clicked {count} times
            </button>
        </div>
    );

}

export default Counter;
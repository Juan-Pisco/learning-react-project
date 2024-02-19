import {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(10)

    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={(e) => {
                handleClick()
            }}><h1>+</h1></button>
        </div>
    )
}

export default Counter;
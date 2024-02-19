import {useEffect, useState} from "react";

function Lifecycle() {
    const [count, setCount] = useState(0) // Normal use of state

    useEffect(() => {

        console.log("Count updated")

        return () => console.log('This will execute when the component gets destroyed!')

    }, [count]); // if the second param is empty, the code inside the useEffect will execute right away, else, it will execute when the value inside the array is changed

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + 1)}}> + </button>
        </div>
    );
}

export default Lifecycle;
import {createContext, useContext, useState} from "react";

export const CountContext = createContext();

function CountProvider({children}) {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

function Count() {
    const {count} = useContext(CountContext)
    return <h3>{`Current count: ${count}`}</h3>
}

function CountButton() {
    const {setCount} = useContext(CountContext);
    const {count} = useContext(CountContext);
    // const value = useContext(CountContext); // option 2
    return (
        // <button onClick={() => value.setCount(value.count + 1)}> // option 2
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    )
}

function CountComponent() {
    return (
        <CountProvider>
            <Count/>
            <CountButton/>
        </CountProvider>
    )
}

export default CountComponent;

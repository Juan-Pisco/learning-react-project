import {createContext, useState} from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({children}) => {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState(0)

    return (
        <CalculatorContext.Provider
            value={{firstNumber, setFirstNumber, secondNumber, setSecondNumber, result, setResult}}>
            {children}
        </CalculatorContext.Provider>
    )
}

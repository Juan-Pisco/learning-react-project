import {useContext} from "react";
import {CalculatorContext, CalculatorProvider} from "./CalculatorContext";


function CalculatorInputs() {
    const values = useContext(CalculatorContext)

    return (
        <div>
            First Number: <input onChange={(e) => values.setFirstNumber(parseInt(e.target.value))}
                                 type="number"/> <br/>
            Second Number: <input onChange={(e) => {
            values.setSecondNumber(parseInt(e.target.value))
        }}
                                  type="number"/>
        </div>
    )
}

function CalculatorButton() {
    const values = useContext(CalculatorContext)

    function onClickHandler() {
        values.setResult(values.firstNumber + values.secondNumber)
    }

    return (
        <button onClick={onClickHandler}><h1>+</h1></button>
    )
}

function CalculatorResults() {
    const values = useContext(CalculatorContext)

    return (
        <h3>result is {values.result}</h3>
    )
}


function Calculator() {
    return (
        <CalculatorProvider>
            <CalculatorInputs/>
            <CalculatorButton/>
            <CalculatorResults/>
        </CalculatorProvider>
    );
}

export default Calculator;

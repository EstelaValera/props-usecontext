import { useState } from "react";
import { Link } from "react-router-dom";
import { useCalculator } from './CalculatorProvider';

function Calculator() {
    const {numbers, addNumbers} = useCalculator();
    const calculatorButtons = [];

    const handleChangeNumbers = (e) => {
        addNumbers(e.target.value)

        if (e.target.className === 'offButton') {
            e.target.className = 'onButton';
        } else {
            e.target.className = 'offButton'
        }
    }

    const setButtons = (num) => {
        for (let i = 0; i < num; i++) {
            let buttonClass = 'offButton'

            if (numbers.includes(i.toString())) {
                buttonClass = 'onButton'
            }

            const newButton = <button key={i} value={i} className={buttonClass} onClick={handleChangeNumbers}>{i}</button>
            calculatorButtons.push(newButton)
        }

        return calculatorButtons;
    }
    
    return (
        <div className="calculatorWrap">
            <h2 className="Calculadora">Calculadora</h2>
            {numbers &&
                <marquee>
                    {numbers.sort((a,b) => a.localeCompare(b, undefined, {numeric:true})).map((number, index) => (
                        <span key={index}>{number} </span>
                    ))}
                </marquee>
            }
            <div className="buttonsWrap">
                {setButtons(10)}
            </div>
            <Link className="linkWrap" to='/result'>
                <button className="linkButton">Resultado</button>
            </Link>
        </div>
    )
}

export default Calculator;
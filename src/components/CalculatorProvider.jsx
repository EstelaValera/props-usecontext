import React, { createContext, useState, useContext } from 'react';

const CalculatorContext = createContext()

export const CalculatorContextProvider = ({children}) =>{
    const [numbers, setNumbers] = useState([]);
    const [result, setResult] = useState(0);
    
    const addNumbers = (newNumber) => {
        let allNumbers = numbers;

        if(allNumbers.includes(newNumber)){
            allNumbers = allNumbers.filter((number) => number !== newNumber)
        } else {
            allNumbers.push(newNumber);
        }

        setNumbers(allNumbers);
        sumNumbers();
    }

    const sumNumbers = () => {
        let total = 0;
        const allNumbers = numbers;

        allNumbers.forEach((number) => {
            total += Number(number);
        })

        setResult(total);
    }

    const resetCalculator = () => {
        setNumbers([]);
        setResult(0);
    }
    
    return(
        <CalculatorContext.Provider value={{numbers, addNumbers, result, resetCalculator}}>
            {children}
        </CalculatorContext.Provider>
    )

}
export const useCalculator = () => useContext(CalculatorContext);
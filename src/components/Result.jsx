import { Link } from "react-router-dom";
import { useCalculator } from "./CalculatorProvider";

function Results() {
    const { numbers, result, resetCalculator } = useCalculator();

    const handleReset = () => {
        resetCalculator();
    }

    return (
        <div className="resultWrap">
            <h2 className="centrar">Resultado: {result}</h2>
            {numbers &&
                <ul>
                    <p>Numeros pulsados:</p>
                    {numbers.map((number, index) => (
                        <li key={index}>
                            <p>{number}</p>
                        </li>
                    ))}
                </ul>}
            <div >
                <button className="buttonsReset" onClick={handleReset}>Reset</button>
                <Link className="linkWrap" to='/'>
                    <button className="linkButton">Calculadora</button>
                </Link>
            </div>
        </div>
    );
}

export default Results;
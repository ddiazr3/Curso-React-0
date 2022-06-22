import PropTypes from "prop-types";
import {useState} from 'react'

export const CounterApp = ({value}) => {

    //actualizar el valor de una constante = useState se dice cual es el valor inicial
    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        // Forma 1 = setCounter(counter +1)
        //forma 2 donde c es valor de counter
        setCounter((c) => c + 1)
    }
    const handleSub = () => setCounter((c) => c - 1)
    const handleReset = () => setCounter(value)

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSub}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    );

}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


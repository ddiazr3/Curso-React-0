import {useState} from 'react';
import {useCounter} from '../hooks/useCounter'

export const CounterWithCustomHooks = () => {

    //con este recibimos una constante y un metodo
    const {counter,increment, decrement, reset} = useCounter();


    return (
        <>
            <h1>Counter with Hook {counter}</h1>

            <hr/>

            <button className="btn btn-success"
                     onClick={() => increment(2)}
            >+1</button>
            <button className="btn btn-success"
                    onClick={reset}
            >Reset</button>
            <button className="btn btn-success"
                    onClick={() => decrement(5)}
            >-1</button>
        </>
    )
}

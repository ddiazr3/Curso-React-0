import {useCounter} from "../hooks";
import {useState, useMemo } from "react";

const heavyStuff = (iterationNumber = 10) => {
  for (let i = 0; i< iterationNumber; i++){
      console.log("ahí vamos")
  }

  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHooks = () => {

    const {counter, increment} = useCounter(1);
    const [show, setShow] = useState(true);

    /**
     * Este ejercicio se enfoco mas en el useMemo donde solo cuando cambien el valor de la
     * la constante counter se ejecutar el nuevo metodo llamado heavyStuff
     * @type {string}
     */
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small> {counter}</small></h1>
            <hr/>
            <h4>{ memorizedValue }</h4>
            <button className="btn btn-primary"
             onClick={() => increment()}>
                +1
            </button>

            <button className="btn btn-outline-primary"
                    onClick={() => setShow(!show)}
                   >
                Show/Hide { JSON.stringify(show)}
            </button>

        </>
    )
}

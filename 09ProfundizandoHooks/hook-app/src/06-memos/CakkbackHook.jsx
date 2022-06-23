import {useState, useCallback} from "react";
import {ShowIncrement} from "./ShowIncrement";

export const CakkbackHook = ({value}) => {

    const [counter, setCounter] = useState(10);

    /**
     * Esta funcion useCallback se usa en un boton que ejecuta una accion pero que ese boton sea un componente
     * aparte y para que no se redivuje cada ves
     * O PARA MEMORIZAR ESTE METODO Y NO SE VUELVA A CREAR
     * @type {(function(): void)|*}
     */
    const increment = useCallback(
        () => {
            setCounter((value) => value + 1)
        },
        [],
    );


    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}></ShowIncrement>

        </>
    )
}

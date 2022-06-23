import {useFetch, useCounter} from "../hooks";
import {LoadingQuote, Quote} from "../03- examples";

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`quotes/${counter}`)

    //Si viene data coloca los valores de la data y si no la desestructuracion autor y quote se ponen en variables undefined


    return (<>
        <h1>Breakingbad Qouta</h1>
        <hr/>

        {
            isLoading ? <LoadingQuote/> : <Quote data={data}/>
        }
        <button className="btn btn-info"
                disabled={isLoading}
                onClick={() => increment()}>Next Quote
        </button>


    </>)
}

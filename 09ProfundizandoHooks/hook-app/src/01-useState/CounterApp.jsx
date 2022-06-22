import {useState} from 'react';

export const CounterApp = () => {


    // const [state, setCounter] = useState({
    //     counter01: 10,
    //     counter02: 20,
    //     counter03: 30
    // });
    //
    // const { counter01, counter02, counter03 } = state;
    // return (
    //     <>
    //         <h1>Counter with Hook1 : {counter01}</h1>
    //         <h1>Counter with Hook2 : {counter02}</h1>
    //         <h1>Counter with Hook3 : {counter03}</h1>
    //
    //         <hr/>
    //
    //         <button className="btn btn-success"
    //             // onClick={() => setCounter((c) => c + 1)}
    //         >+1</button>
    //         <button className="btn btn-success"
    //             // onClick={() => setCounter((c) => c = 10)}
    //         >Reset</button>
    //         <button className="btn btn-success"
    //             // onClick={() => setCounter((c) => c - 1)}
    //         >-1</button>
    //     </>






    const [counter, setCounter] = useState(10);
    return (
        <>
            <h1>Counter : {counter}</h1>

            <hr/>

            <button className="btn btn-success"
            onClick={() => setCounter((c) => c + 1)}
            >+1</button>
        </>
    )
}

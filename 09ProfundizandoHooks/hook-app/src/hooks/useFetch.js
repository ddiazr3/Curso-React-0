import {useEffect, useState} from "react";

export const useFetch = (url) => {

    const fullPath = `https://www.breakingbadapi.com/api/${url}`

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({
            ...state, //persiste la data que ya tiene
            isLoading: true, //agrega un valor solo a un campo del objeto
        })
       const resp = await fetch(fullPath);
       const data = await resp.json()
        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    //este useEffect se va a ejecutar cada ves que cambia la URL
    useEffect(() => {
        getFetch()
        // return () => {
        //     effect
        // };
    }, [url]);


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}

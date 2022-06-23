import {useState} from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = (value) => {
       setFormState(initialForm)
    }

    return {
        ...formState,//desestructuramos el objeto que retorna el formState
        formState,
        onResetForm,
        onInputChange
    }
}

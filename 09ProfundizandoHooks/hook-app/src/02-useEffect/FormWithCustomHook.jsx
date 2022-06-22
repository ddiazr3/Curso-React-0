import {useState, useEffect} from "react";
import {Message} from "./Message";

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'dany@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    //cuando solo se ejecuta cuando algo del formState cambia
    // useEffect(() => {
    //     console.log("use Effect")
    // }, [formState]);

    //Cuando solo queremos que se ejecute cuando solo cambia una constante
    // useEffect(() => {
    //     console.log("use Effect")
    // }, [email]);




    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr/>
            <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
            />

            {
                username === 'strider' &&  <Message></Message>
            }



            <input
                type="email"
                className="form-control mt-2"
                placeholder="xxx@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        </>
    )
}

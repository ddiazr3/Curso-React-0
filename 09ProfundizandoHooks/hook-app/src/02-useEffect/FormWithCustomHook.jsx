import {useState, useEffect} from "react";
import {useForm} from "../hooks/useForm";

export const FormWithCustomHook = () => {


    //se crea los hook para la logica del negocio y no cargar mucho el componente
    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });


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

            <input
                type="email"
                className="form-control mt-2"
                placeholder="xxx@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Reset
            </button>

        </>
    )
}

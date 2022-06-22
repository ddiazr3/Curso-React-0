import {useState} from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    //cuando se le da enter al input
    const onSubmit = (event) => {
        event.preventDefault()
        //valida que tenga mas de un caracter el valor este
        if(inputValue.trim().length <= 1) return;

        //Forma uno
        //por el props recibido le agregamos el valor del input a la constate categorias del padre
        //onAddCategories(cat => [inputValue,...cat]);

        //Forma DOs
        onNewCategory(inputValue.trim());

        setInputValue("");
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}

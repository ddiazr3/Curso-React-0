import {useState} from "react";
import {AddCategory, GifGrid} from "./Components" //para obtener dos mismos archivos de la misma carpeta

export const GifExpertApp = () => {

    //useState sirve para mantener el estado de la constante
    const [categorias, setCategorias] = useState(["One Punch"]);

    const onAddCategory = (category) => {
        //validar que no exista una categoria
        if (categorias.includes(category)) return;

        setCategorias([...categorias, category]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // onAddCategories={ setCategorias } Forma Una de cambiar valores al padre
                onNewCategory={value => onAddCategory(value)}
            >

            </AddCategory>

            {/*<button onClick={onAddCategory}>Agregar</button>*/}

            {categorias.map((category) => (
                <GifGrid key={category} category={category}></GifGrid>
            ))}


        </>
    )
}

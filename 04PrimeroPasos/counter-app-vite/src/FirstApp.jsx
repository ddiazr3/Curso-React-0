// export function App(){
//     return (<h1>Hola Mundo!!</h1>)
// }

// export const App = () => <h1>Hola Mundo!!</h1>;
import PropTypes from 'prop-types'; // para validar las propiedades
//instalar npm i prop-types
export const App = ({title}) => {

    // console.log(props)

    return
}

//valida el tipo de props que recibe y si es o no requerido
App.propTypes= {
    title: PropTypes.string.isRequired
}
// se usa para colocar valores por defaul a las props
App.defaultProps = {
    title: "No hay titulo"
}


import { useEffect} from "react";

export const Message = () => {

    //esto nos dice cuando un componente se monta o se desmonta del aplicativo
    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            const cords = {x,y}
            console.log(cords)
        }


        window.addEventListener('mousemove', onMouseMove)
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        };
    }, []);

  return(
      <>
      <h3>Usuario Ya existe</h3>
      </>
  )
}

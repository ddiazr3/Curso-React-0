import {memo} from "react";

/**
 * Cuando se ejecuta un metodo del padre para que no se cree
 * @type {React.NamedExoticComponent<{readonly increment?: *}>}
 */
export const ShowIncrement = ({increment }) => {
    console.log("***")
    return (

        <>
           <button
           className="btn btn-primary"
           onClick={() => {
               increment()
           }}
           >
                +1
           </button>
        </>
    )
}

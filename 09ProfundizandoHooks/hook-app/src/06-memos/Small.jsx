import {memo} from "react";

/**
 * El memo sirve para que no se ejecute desde un componente padre a menos que
 * cambie algun valor de sus props
 * @type {React.NamedExoticComponent<{readonly value?: *}>}
 */
export const Small = memo(({value}) => {
    console.log("me volvi a crear")
    return (
        <>
            <small>{value}</small>
        </>
    )
})

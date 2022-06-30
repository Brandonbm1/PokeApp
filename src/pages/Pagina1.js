import React, { useContext } from 'react'
import { ContextPokemon } from '../context/ContextPokemon'

const Pagina1 = () => {

    const {nombre} = useContext(ContextPokemon)
    return (
        <h1>Pagina1 {nombre}</h1>
    )
}
export default Pagina1
import React, { createContext } from "react";

export const ContextPokemon = React.createContext("")


export const ContextProvider = ({ children }) => {
    const nombre = "Brandon"
    return (
        <ContextPokemon.Provider value={{
            nombre
        }}>
            {children}
        </ContextPokemon.Provider>
    )
}
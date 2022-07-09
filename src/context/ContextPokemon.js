import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const ContextPokemon = React.createContext("")


export const ContextProvider = ({ children }) => {
    
    // limitMax 898
    const limit = 40
    const offset = 0

    let timeOut;
    
    const [pokedex, setPokedex] = useState();
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    // const [nextUrl, setNextUrl] = useState();
    // const [prevUrl, setPrevUrl] = useState();
    

    
    const getPokemon = (res) => {
        res.map(async item => {
            const result = await fetch(item.url)
            const data = await result.json()

            setPokeData(state => {
                // console.log(state)
                state = [...state, data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                
                return state;
            })
        })
        setPokeData(() => {
            const data = new Set(pokeData)
            let result = [...data]
            return result
        })
    }
    const pokeFun = async () => {
        setLoading(true)
        const res = await fetch(url);
        const data = await res.json()
        // setNextUrl(res.data.next)
        // setPrevUrl(res.data.previous)
        getPokemon(data.results)
        setLoading(false)
        // setTimeout(() => {
        //     setLoading(false)
        // }, 5000)
    }
    useEffect(() => {
        pokeFun()
    }, [url])
    // console.log(pokedex.toString)
    return (
        <ContextPokemon.Provider value={{
            pokeData,
            pokeData,
            loading,
            setPokedex,
            pokedex,
            limit,
            setPokeData
        }}>
            {children}
        </ContextPokemon.Provider>
    )
}
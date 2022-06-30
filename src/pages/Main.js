import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "../components/Card"
import Pokeinfo from "../components/Pokeinfo"
// import Pokedex from 'Pokedex.js'
// import * as API from "../services/Pokemon"
// import PokemonCard from "../components/PokemonCard"

// limit 898
const limit = 151
const offset = 0

const filterPokemons = (data, search) =>{
    return data.filter(el =>{
        return el.name.toLowerCase().indexOf(search.toLowerCase())>-1
    })
}

const Main = () => {
    const [pokedex, setPokedex] = useState();
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    // const [nextUrl, setNextUrl] = useState();
    // const [prevUrl, setPrevUrl] = useState();
    const getPokemon = (res) => {
        res.map(async item => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
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
        const res = await axios.get(url);
        // setNextUrl(res.data.next)
        // setPrevUrl(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    }
    useEffect(() => {
        pokeFun()
    }, [url])
    return (
        <>
            <div className="form">
                <input type="text" />
                <button type="button">BUSCAR</button>
            </div>
            {pokeData && <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokedex(poke)} />
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokedex} />
                </div>
            </div>}
        </>
    )
}




export default Main
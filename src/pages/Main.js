import { useContext, useEffect, useState } from "react"
import Cards from "../components/Cards"
import Loader from "../components/Loader"
import Pokeinfo from "../components/Pokeinfo"
import Search from "../components/Search"
import { ContextPokemon } from "../context/ContextPokemon"
// import Pokedex from 'Pokedex.js'
// import * as API from "../services/Pokemon"
// import PokemonCard from "../components/PokemonCard"

const Main = () => {
    const { pokeData, loading, setPokedex, pokedex } = useContext(ContextPokemon)

    const [data, setData] = useState([])
    useEffect(()=>{
        setData(pokeData)
    },[pokeData])
    const filterPokemons = (search) => {
        setData(pokeData.filter(el => {
            return el.name.toLowerCase().indexOf(search.toLowerCase()) > -1
        }))
    }

    return (
        <div className="container">
            <Search filterPokemons={poke => filterPokemons(poke)} />
            {data && <div className="pokedex-container">
                <Cards pokemon={data} loading={loading} infoPokemon={poke => setPokedex(poke)} />
                <Pokeinfo data={pokedex} />
            </div>}
            {/* <Loader /> */}
        </div>
    )
}




export default Main
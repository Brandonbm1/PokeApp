
import { useEffect, useState } from 'react'
import axios from 'axios'

const limit = 10
const offset = 0

const PokeData = () => {
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
            const data = new Set(PokeData)
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

    return { loading, pokeData, setPokeData, url }
}
export default PokeData;
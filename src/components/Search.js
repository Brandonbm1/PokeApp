import React, { useEffect, useState } from 'react'

const Search = ({ filterPokemons }) => {
    const [pokeName, setPokeName] = useState("")
    const handleChange = (event) => {
        setPokeName(event.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    useEffect(() => {
        filterPokemons(pokeName)


    }, [pokeName])
    // console.log(pokeName)

    return (
        <div className="form">
            <input
                type="text"
                value={pokeName}
                className="form__text"
                onChange={handleChange}
                placeholder="Write a pokemon name"
                id = ""
            />
            <button
                type="submit"
                className="form__button"
                onClick={handleSubmit}>
                SEARCH
            </button>
        </div>
    )
}

export default Search
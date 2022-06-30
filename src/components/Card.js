
const Card = ({ pokemon, loading, infoPokemon }) => {
    // Eliminar los objetos repetidos
    let hash = {}
    let pokemons = pokemon.filter(p => hash[p.id]? false: hash[p.id] = true)

    // Renderiza los componentes
    return (
        <>
            {
                loading ? <h1>Loading</h1> : pokemons.map((item, index) => {
                    return (
                        <div key={index} className={"card " + item.types[0].type.name} onClick={()=>infoPokemon(item)}>
                            <img src={item.sprites.front_default} alt="" />
                            <h2>{item.species.name}</h2>
                            <p>#{item.id}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card
import Loader from "./Loader"

const Card = ({ pokemon, loading, infoPokemon }) => {
    // Eliminar los objetos repetidos
    let hash = {}
        let pokemons = pokemon.filter(p => hash[p.id] ? false : hash[p.id] = true)
        


    // Renderiza los componentes
    return (
        <section className="leftContent">
            {
                loading ? <h1 className="leftContent__loading">Loading</h1> : pokemons.map((item, index) => {
                    return (
                        <div key={index} className={"leftContent__card " + item.types[0].type.name} onClick={() => infoPokemon(item)}>
                            <img src={item.sprites.front_default} className="leftContent__img" alt="" />
                            <h2 className="leftContent__name">{item.species.name}</h2>
                            <p className={item.types[0].type.name === "steel" ? "leftContent__id leftContent__id-" + item.types[0].type.name:"leftContent__id"}>
                                #{item.id}
                            </p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Card
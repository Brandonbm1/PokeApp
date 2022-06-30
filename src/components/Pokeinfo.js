
const sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other"

const Pokeinfo = ({ data }) => {
    let renderedSprite
    {
        data && (data.sprites.other.dream_world.front_default ?
            renderedSprite = `${sprite}/dream-world/${data.id}.svg`
            : renderedSprite = `${sprite}/home/${data.id}.png`)
    }
    return (
        <>
            {
                !data ? (<h1>Pokedex</h1>) : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={renderedSprite} alt={data.name} />
                        <p className="abilitie_text">ABILITIES</p>
                        <div className="abilities">

                            {
                                data.abilities.map((item, index) => {
                                    return (
                                        <div key={index} className="group">
                                            <h3 className="">{item.ability.name}</h3>
                                        </div>
                                    )

                                })
                            }

                        </div>
                        <div className="types">
                            {data.types.map((item, index) => {
                                return (
                                    <h2 key={index} className={"type " + item.type.name} >
                                        {item.type.name}
                                    </h2>
                                )
                            })}
                        </div>
                        <div className="stats">
                            {data.stats.map((item, index) => {
                                return <div key={index}><h3>{item.stat.name}:</h3> <p className="base_stat">{item.base_stat}</p></div>
                            })}
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Pokeinfo
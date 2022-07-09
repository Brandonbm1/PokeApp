
const sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other"

const Pokeinfo = ({ data }) => {
    let renderedSprite
    {
        data && (data.sprites.other.dream_world.front_default ?
            renderedSprite = `${sprite}/dream-world/${data.id}.svg`
            : renderedSprite = `${sprite}/home/${data.id}.png`)
    }
    return (
        <aside className="pokeInfo">
            {
                !data ?
                    (
                        <>
                            <h1 className="alt-pokeInfo__name">Choose a pokemon</h1>
                            <img src="" alt="Pokemon" className="alt-pokeInfo__img" />
                            <div className="alt-pokeInfo__types">
                                <h2 className="alt-pokeInfo__types-type dark"> ? </h2>
                                <h2 className="alt-pokeInfo__types-type dark"> ? </h2>
                            </div>
                            <p className="pokeInfo__abilities-text">ABILITIES</p>

                        </>
                        // <h1>Holas</h1>
                    )
                    : (
                        <>
                            <h1 className="pokeInfo__name">{data.name}</h1>
                            <img src={renderedSprite} alt={data.name} className="pokeInfo__img" />
                            <div className="pokeInfo__types">
                                {data.types.map((item, index) => {
                                    return (
                                        <h2 key={index} className={"pokeInfo__types-type " + item.type.name} >
                                            {item.type.name}
                                        </h2>
                                    )
                                })}
                            </div>
                            <p className="pokeInfo__abilities-text">ABILITIES</p>
                            <div className="pokeInfo__abilities">
                                {
                                    data.abilities.map((item, index) => {
                                        return (
                                            <h3 key={index} className="pokeInfo__abilities-abilitie">{item.ability.name}</h3>
                                        )

                                    })
                                }

                            </div>
                            <div className="stats">
                                {data.stats.map((item, index) => {
                                    return <div key={index}>
                                        <h3 className="stat_name">{item.stat.name}:</h3>
                                        <p className="base_stat">{item.base_stat}</p>
                                    </div>
                                })}
                            </div>
                        </>
                    )
            }


        </aside>
    )
}

export default Pokeinfo
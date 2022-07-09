import React, { useContext } from 'react'
import { ContextPokemon } from '../context/ContextPokemon'

const Loader = () => {
  const { loading, pokeData, limit } = useContext(ContextPokemon)
  let className = "lds-hourglass loader"
  // pokeData && !pokeData.lenght > 30 ? className += "lds-hourglass loader ": className += "loader2"
  if(loading){
    if(pokeData){
      if(pokeData.length >= limit*2){
        className += "2"
      }
    }
  }
  return (
    <>
      {/* {console.log(className)} */}
      <div className={className}></div>
    </>
  )
}

export default Loader
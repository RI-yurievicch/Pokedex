import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDataPokemon, getGenderPokemon } from '../../modules/session/session-actions'
import { InformationPokemon } from '../../components/index'
import './index.scss'

const SpecificationsPokemons = () => {
  const [pokemon, setPokemon] = useState({})
  const [genderPokemonFemale, setGenderPokemonFemale] = useState({})
  const [genderPokemonMale, setGenderPokemonMale] = useState({})
  const [genderPokemonGenderless, setGenderPokemonGenderless] = useState({})
  const { id } = useParams()
  const dispatch = useDispatch()

  const pokemonIMG = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id < 10 ? '00' + id : id < 100 ? '0' + id : id}.png`
  const typePokemon = Object.values(pokemon.types || {})

  const nameGenderSearchFemale = genderPokemonFemale.name ? genderPokemonFemale.pokemon_species_details.map(i => i.pokemon_species.name) : {}
  const nameGenderSearchMale = genderPokemonMale.name ? genderPokemonMale.pokemon_species_details.map(i => i.pokemon_species.name) : {}
  const nameGenderSearchGenderless = genderPokemonGenderless.name ? genderPokemonGenderless.pokemon_species_details.map(i => i.pokemon_species.name) : {}

  useEffect(() => {
    dispatch(getDataPokemon(id)).then(res => setPokemon(res.data))
    dispatch(getGenderPokemon(1)).then(res => setGenderPokemonFemale(res.data))
    dispatch(getGenderPokemon(2)).then(res => setGenderPokemonMale(res.data))
    dispatch(getGenderPokemon(3)).then(res => setGenderPokemonGenderless(res.data))
  }, [dispatch, id])

  const nameFemale = () => {
    for (let i = 0; i < nameGenderSearchFemale.length; i++) {
      if (pokemon.name === nameGenderSearchFemale[i]) {
        return 'Female'
      }
    }
  }

  const nameMale = () => {
    for (let i = 0; i < nameGenderSearchMale.length; i++) {
      if (pokemon.name === nameGenderSearchMale[i]) {
        return 'Male'
      }
    }
  }

  const nameGenderless = () => {
    for (let i = 0; i < nameGenderSearchGenderless.length; i++) {
      if (pokemon.name === nameGenderSearchGenderless[i]) {
        return 'Genderless'
      }
    }
  }

  return (
    <div className='widthSpecificationsPokemons'>
      {pokemon.name ? (
        <InformationPokemon 
          nameGenderless={nameGenderless} 
          nameMale={nameMale} 
          nameFemale={nameFemale} 
          typePokemon={typePokemon} 
          pokemon={pokemon} 
          pokemonIMG={pokemonIMG} 
          id={id}
        />
      ) : <h1>Loading.....</h1>}
    </div>
  )
}

export default SpecificationsPokemons
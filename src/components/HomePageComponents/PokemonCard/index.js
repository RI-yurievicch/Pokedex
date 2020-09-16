import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getDataPokemon } from '../../../modules/session/session-actions'
import { Tag } from 'antd'
import logoErrorDefault from '../../../img/error.png'
import './index.scss'

const colorTypes = {
  normal: '#696969',
  fighting: '#FF7F50',
  flying: '#5F9EA0',
  poison: '#8A2BE2',
  ground: '#F4A460',
  rock: '#808000',
  bug: '#6B8E23',
  ghost: '#483D8B',
  steel: '#2F4F4F',
  fire: '#FF4500',
  water: '#00BFFF',
  grass: '#008000',
  electric: '#FFD700',
  psychic: '#BA55D3',
  ice: '#00FFFF',
  dragon: '#5F9EA0',
  dark: '#696969',
  fairy: '#FFC0CB'
}

const PokemonCard = ({ name, url }) => {
  const [dataTypesNamePokenons, setDataTypesNamePokemons] = useState({})
  const history = useHistory()
  const dispatch = useDispatch()

  const id = url.split('/')[6]
  const POKEMONS_IMG = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id < 10 ? '00' + id : id < 100 ? '0' + id : id}.png`
  const idPokemons = id < 10 ? '00' + id : id < 100 ? '0' + id : id
  const typeNamePokemons = Object.values(dataTypesNamePokenons.types || {})

  useEffect(() => {
    dispatch(getDataPokemon(id)).then((res) => setDataTypesNamePokemons(res.data))
  }, [dispatch, id])

  return (
    <div onClick={() => history.push(`/pokemon/${id}`)} className='cardWidthPokemons fade'>
      <div className='imgWidthPokemons'>
        <img src={POKEMONS_IMG} alt={name} onError={e => e.target.src = logoErrorDefault} />
      </div>
      <div className='pokemonsID'>#{idPokemons}</div>
      <div className='pokemonsName'>{name}</div>
      <div className='typeTest'>
        {typeNamePokemons.map((i, ind) => <Tag className='pokemonsType' color={colorTypes[i.type.name]} key={ind}>{i.type.name}</Tag>)} 
      </div>
    </div>
  )
}

export default PokemonCard

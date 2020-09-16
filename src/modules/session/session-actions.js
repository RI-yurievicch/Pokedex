import api from '../../api'
import { SESSION_GET_POKEMONS_NAME } from './session-constants'

export const getPokemonsName = () => (dispatch) => 
  api.getPokemonsName().then((response) => {
    dispatch({
      type: SESSION_GET_POKEMONS_NAME,
      payload: response.data.results,
    })
  })

export const getTypesPokemon = ind => (dispatch) => 
  api.getTypesPokemon(ind).then(response => {
    dispatch({
      type: SESSION_GET_POKEMONS_NAME,
      payload: response.data.pokemon.map(i => i.pokemon)
    })
  })

export const getDataPokemon = id => (dispatch) => 
  api.getDataPokemon(id)

export const getGenderPokemon = ind => (dispatch) =>
  api.getGenderPokemon(ind)
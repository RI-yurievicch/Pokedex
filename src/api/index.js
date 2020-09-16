import axios from 'axios'

const METHOD = 'https://pokeapi.co/api/v2'

const getPokemonsName = () => axios.get(`${METHOD}/pokemon?limit=1000&offset=0`)

const getDataPokemon = id => axios.get(`${METHOD}/pokemon/${id}`)

const getTypesPokemon = ind => axios.get(`${METHOD}/type/${ind}`)

const getGenderPokemon = ind => axios.get(`${METHOD}/gender/${ind}`)

export default {
  getPokemonsName,
  getDataPokemon,
  getTypesPokemon,
  getGenderPokemon,
}

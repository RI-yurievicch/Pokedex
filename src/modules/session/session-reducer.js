import { SESSION_GET_POKEMONS_NAME } from './session-constants'

export const sessionInitialState = {
  pokemons: [],
}

export const sessionReducer = (state = sessionInitialState, action) => {
  const { type, payload } = action

  switch (type) {
  case SESSION_GET_POKEMONS_NAME:
    return { ...state, pokemons: payload }
  default:
    return state
  }
}
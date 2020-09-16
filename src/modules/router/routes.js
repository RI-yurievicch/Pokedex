import { HomePage, SpecificationsPokemons } from '../../pages/index'

export const unauthorized = [
  {
    path: '/Pokedex/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/Pokedex/pokemon/:id',
    component: SpecificationsPokemons,
    exact: true,
  },
]

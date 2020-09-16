import { HomePage, SpecificationsPokemons } from '../../pages/index'

export const unauthorized = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/pokemon/:id',
    component: SpecificationsPokemons,
    exact: true,
  },
]

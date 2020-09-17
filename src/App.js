import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { unauthorized } from './modules/router/routes'
import { Layout } from './components/index'

const App = () => {
  return (
    <BrowserRouter basename='Pokedex'>
      <Layout className='wrapper'>
        <Switch>
          {unauthorized.map(route => <Route key={route.path} { ...route } />)}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App

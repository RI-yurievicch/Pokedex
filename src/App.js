import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { unauthorized } from './modules/router/routes'
import { Layout } from './components/index'

const App = () => {
  return (
    <HashRouter basename='/'>
      <Layout className='wrapper'>
        {unauthorized.map(route => <Route key={route.path} { ...route } />)}
      </Layout>
    </HashRouter>
  )
}

export default App

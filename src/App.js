import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { unauthorized } from './modules/router/routes'
import { Layout } from './components/index'

const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => <route.component { ... props } routes={route.routes} />} />
)

const App = () => {
  const renderContent = routes => (
    <Switch>
      {routes.map(route => <RouteWithSubRoutes key={route.path} { ...route } />)}
      <Route component={() => <div>404</div>} />
    </Switch>
  )

  return (
    <Layout className='wrapper'>
      {renderContent(unauthorized)}
    </Layout>
  )
}

export default App;

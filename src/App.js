import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { unauthorized } from './modules/router/routes'
import { Layout } from './components/index'

const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => <route.component { ... props } routes={route.routes} />} />
)

const App = () => {
  const renderContent = routes => (
    <HashRouter basename=''>
      <Switch>
        {routes.map(route => <RouteWithSubRoutes key={route.path} { ...route } />)}
        <Route component={() => <div>404</div>} />
      </Switch>
    </HashRouter>
  )

  return (
    <Layout className='wrapper'>
      {renderContent(unauthorized)}
    </Layout>
  )
}

export default App;

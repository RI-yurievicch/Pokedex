import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router'
import { createStore } from './modules/store'
import { history } from './modules/router'
import './styles/index.scss'
import 'antd/dist/antd.css'

const { store } = createStore()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path='/' component={App} />
          </Switch>
        </Router>
    </Provider>, document.getElementById('root')
)

import { combineReducers } from 'redux'

import { SESSION_STATE } from '../../modules/session/session-constants'
import { sessionReducer } from '../../modules/session/session-reducer'

const createReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers,
    [SESSION_STATE]: sessionReducer,
  })

export default createReducer

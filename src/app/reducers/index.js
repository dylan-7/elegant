/*
💚 description: 管理所有 reducers
*/


import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos
})

export default rootReducer

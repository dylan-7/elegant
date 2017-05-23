/*
💚 description: increamt todo
*/

import {
  ADD_TODO
} from './actionTypes'

// 绑定 action 创建函数，自动 dispatch
export const addTodo = text => ({
  type: ADD_TODO,
  text
})

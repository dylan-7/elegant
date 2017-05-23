/*
💚 description: todo 分支
*/


import {
  ADD_TODO
} from 'app/actions/actionTypes'

const initialState = [{
  text: '123',
  completed: false,
  id: 0
}]

export default function todos(state=initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        {
          id: 11,
          completed: false,
          text: action.text
        },
        ...state
      ]
    default:
      return state
  }
}

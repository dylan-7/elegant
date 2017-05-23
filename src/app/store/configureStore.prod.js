// 产品模式，store 采用此配置
/*
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  // 创建 saga 中间件
  const sagaMiddleware = createSagaMiddleware()
  // 挂载在 store
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}
*/

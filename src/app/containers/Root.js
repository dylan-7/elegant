/*
💚 description: 全网公共插件/文件引入、路由组件
*/

import React, { Component } from 'react'
// import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'app/routes.js'
import 'moment/locale/zh-cn'
// import 'normalize.css'
// import 'animate.css'
import 'styles/app.scss'
import 'styles/iconfont.scss'
import 'styles/antdStyleReset.scss'
// import 'styles/animations.scss'
import {
  Home,
  TakeOut,
  NotFoundPage
} from '../containers'


// const Root = ({ store, history }) => (
//   <Provider store={store}>
//     <Router history={history} routes={routes} />
//   </Provider>
// )

export default class Root extends Component {
  render () {
    const { history } = this.props

    return (
      <Router history={history}>
       {routes}
      </Router>
    )
  }
}

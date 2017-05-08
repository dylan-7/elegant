/*
💚 description: 路由配置
*/

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  App,
  Home,
  TakeOut,
  Brand,
  SignUp,
  NoMatch
} from './containers'

// export default class RouterConfig extends Component {
//   render () {
//     return (
//       <Route exact path="/" component={Home} />
//     )
//   }
// }

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/take-out" component={TakeOut} />
      <Route path="/brand" component={Brand} />
      <Route paht="/sign-up" component={SignUp} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

import React, { Component } from 'react'
import {
  Todos
} from 'app/components'

export default class TakeOut extends Component {
  render () {
    document.title = '外卖'

    return (
      <div>
        <SiteTopBar />
        <Header>
          <Logo />
        </Header>
        <Nav />
        <Content>
          <Todos />
        </Content>
        <Footer />
      </div>
    )
  }
}

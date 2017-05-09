import React, { Component } from 'react'
import {
  SiteTopBar,
  Nav,
  Header,
  Logo,
  Footer,
  Layout,
  Content
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
        外卖
        </Content>
        <Footer />
      </div>
    )
  }
}

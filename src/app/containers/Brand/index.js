import React, { Component } from 'react'
import {
  SiteTopBar,
  Nav,
  Layout,
  Header,
  Content,
  Footer,
  Logo,
  Search
} from 'app/components'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'


export default class Brand extends Component {
  render() {
    document.title = '【精选品牌】团购网站'

    return (
      <Layout>
        <SiteTopBar />
        <Header>
          <Logo />
        </Header>
        <Nav />
        <Content>
          <Row>
          hello
          </Row>
        </Content>
        <Footer />
      </Layout>
    )
  }
}

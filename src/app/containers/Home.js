import React, { Component } from 'react'
import {
  SiteTopBar,
  Nav,
  Header,
  Helper,
  Footer,
  Layout,
  Content,
  Carousel,
  Logo,
  Search
} from 'app/components'
import { Link } from 'react-router-dom'
import img1 from 'images/banner/img_1.jpg'
import img2 from 'images/banner/img_2.jpg'
import img3 from 'images/banner/img_3.jpg'


export default class Home extends Component {
  render() {
    document.title = '乐享生活-高品质团购，省钱不剁手！'

    return (
      <Layout>
        <SiteTopBar />
        <Header>
          <Logo />
          <Search />
        </Header>
        <Nav />
        <Content>
          <Carousel
          autoplay
          >
            <Link to="/deal/p00ti0jl8"><img src={img1} alt /></Link>
            <Link to="/deal/p00ti0jl8"><img src={img2} alt /></Link>
            <Link to="/deal/p00ti0jl8"><img src={img3} alt /></Link>
          </Carousel>
        </Content>
        <Helper />
        <Footer />
      </Layout>
    )
  }
}

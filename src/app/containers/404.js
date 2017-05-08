import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Tour extends Component {
  render() {
    return (
      <main className="center-center-column" style={{height: '100vh'}}>
        <span className="f26">404!页面没有找到，请</span>
        <Link to="/" className="f36 primary-color">返回首页</Link>
      </main>
    )
  }
}

import React, { Component } from 'react'
import { Layout } from 'antd'
import styles from './index.scss'

const Content = Layout.Content

class _Content extends Component {
  render() {
    return (
      <Content>
        {this.props.children}
      </Content>
    )
  }
}

export default _Content

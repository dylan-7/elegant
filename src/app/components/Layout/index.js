import React, { Component } from 'react'
import {Layout} from 'antd'
import styles from './index.scss'

class _Layout extends Component {
  render() {
    return (
      <Layout className={styles.container}>
        {this.props.children}
      </Layout>
    )
  }
}

export default _Layout

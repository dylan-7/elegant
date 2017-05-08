import React, { Component } from 'react'
import { Layout } from 'antd'
import styles from './index.scss'

const { Header } = Layout

export default class _Header extends Component {
  render() {
    return (
      <header>
        <Header className={styles.header}>
          <main className={styles['header-main']}>
            {this.props.children}
          </main>
        </Header>
      </header>
    )
  }
}

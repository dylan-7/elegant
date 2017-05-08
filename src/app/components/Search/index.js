import React, { Component } from 'react'
import { Input, Button } from 'antd'
import styles from './index.scss'

class Searcher extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={styles.searcher}>
        <Input
          placeholder='搜索商家或地点'
          className={styles.searchInput}
        />
        <Button icon="search" className={styles.searchBtn}></Button>
      </div>
    )
  }
}

export default Searcher

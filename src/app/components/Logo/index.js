import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.scss'

class Logo extends Component {
  render () {
    return (
      <div className={styles.logo}>
        <h1>
          <Link to='/' className={styles['logo-link']}>logo</Link>
        </h1>
      </div>
    )
  }
}

export default Logo

import React, { Component } from 'react'
import { Carousel } from 'antd'
import styles from './index.scss'

class _Carousel extends Component {
  render () {
    const { ...rest } = this.props

    return (
      <Carousel
        {...rest}
        className={styles.carousel}
      >
        {this.props.children}
      </Carousel>
    )
  }
}

export default _Carousel

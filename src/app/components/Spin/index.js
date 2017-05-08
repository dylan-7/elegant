import React, { Component } from 'react'
import { Spin } from 'antd'

class _Spin extends Component {
  render() {
    const { ...rest } = this.props

    return (
      <Spin
        {...rest}
      >
        {this.props.children}
      </Spin>
    )
  }
}

export default Spin

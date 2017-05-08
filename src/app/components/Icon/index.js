/*
💚 description: 字体图标组件，实例时传入图标名称即可 iconName='name'
*/

import React, { Component } from 'react'
import './index.scss'

export default class Icon extends Component {
  render() {
    const { iconName } = this.props
    const iName = `icon-${ iconName }`

    return (
      <i className={iName}></i>
    )
  }
}

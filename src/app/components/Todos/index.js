/*
💚 description: todo list
*/

import React, { Component } from 'react'
import {
  Button,
  Input
} from 'antd'


export default class extends Component {
  render() {
    return (
      <div>
        <Button>-</Button>
        <Input type="text" />
        <Button>+</Button>
      </div>
    )
  }
}

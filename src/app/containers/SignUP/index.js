import React, { Component } from 'react'
import {
  Nav,
  Header,
  Logo,
  SiteTopBar,
  Footer
} from 'app/components'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'hello',
      cName: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick(e) {
    this.setState({
      cName: true
    })
  }

  render() {
    const value = this.state.value
    const cName = this.state.cName ? 'animated bounce' : null

    return (
      <div>
        <SiteTopBar />
        <Header>
          <Logo />
        </Header>
        <Nav />
        {
          // <input type="text" value={value} placeholder="name" ref="name" className={cName} onChange={this.handleChange} />
          // <button onClick={this.handleClick}>sign up</button>
          // <p>{value}</p>
        }
      </div>
    )
  }
}

export default SignUp

/*
💚 description: 入口文件
*/

'use strict'

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router-dom'
import Root from './containers/Root'

const RedBox = require('redbox-react').default
const rootElement = document.getElementById('wrapper')

try {
  ReactDOM.render(
    <AppContainer>
      <Root history={browserHistory} />
    </AppContainer>,
    rootElement
  )
} catch(e) {
  ReactDOM.render(
    <RedBox error={e}>
      <AppContainer>
        <Root history={browserHistory} />
      </AppContainer>
    </RedBox>,
    rootElement
  )
}

if(module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewApp = require('./containers/Root').default

    try {
      ReactDOM.render(
        <AppContainer>
          <NewApp history={browserHistory} />
        </AppContainer>,
        rootElement
      )
    } catch(e) {
      ReactDOM.render(
        <RedBox error={e}>
          <AppContainer>
            <NewApp history={browserHistory} />
          </AppContainer>
        </RedBox>,
        rootElement
      )
    }
  })
}

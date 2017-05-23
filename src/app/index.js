/*
💚 description: 入口文件，顶级容器
*/

'use strict'

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import rootSage from './sagas'

const rootElement = document.getElementById('wrapper')
const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSage)

if(__DEV__) {
  const RedBox = require('redbox-react').default

  try {
    ReactDOM.render(
      <AppContainer>
        <Root store={store} history={browserHistory} />
      </AppContainer>,
      rootElement
    )
  } catch(e) {
    ReactDOM.render(
      <RedBox error={e}>
        <AppContainer>
          <Root store={store} history={browserHistory} />
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
            <NewApp store={store} history={browserHistory} />
          </AppContainer>,
          rootElement
        )
      } catch(e) {
        ReactDOM.render(
          <RedBox error={e}>
            <AppContainer>
              <NewApp store={store} history={browserHistory} />
            </AppContainer>
          </RedBox>,
          rootElement
        )
      }
    })
  }

} else {
  ReactDOM.render(
    <AppContainer>
      <Root history={browserHistory} />
    </AppContainer>,
    rootElement
  )
}

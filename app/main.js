import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import ContactList from './components/ContactList'
import Home from './components/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import * as Colors from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
  let overwrites = {
    "palette": {
      "primary1Color": "rgba(1, 87, 155, 0.79)",
      "primary2Color": "#29b6f6",
      "accent1Color": "#c62828",
      "accent3Color": "#29b6f6"
    }
  }
  return getMuiTheme(baseTheme, overwrites)
}

render(
  <MuiThemeProvider muiTheme={getTheme()}>
    <Provider store={store}>
      <Home />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)

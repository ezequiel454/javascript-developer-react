import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from './screens/Home'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </Provider>
    )
  }
}

export default App

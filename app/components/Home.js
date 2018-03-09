import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ContactList from './ContactList'
import StatefulContactList from './StatefulContactList'
import SingleContact from './SingleContact'
import HomePage from './HomePage'
import Navbar from './Navbar'

const style = {
  backgroundColor: "#7be1e5"
}

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div id="home-main" style={style}>
          <Navbar />
          <Switch>
            <Route exact path='/contacts' component={StatefulContactList} />
            <Route path='/contacts/:contactId' component={SingleContact} />
            <Route component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

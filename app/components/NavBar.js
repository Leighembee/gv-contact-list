import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Gavel from 'material-ui/svg-icons/action/gavel'
import { NavLink } from 'react-router-dom'

const style = {
  margin: 9,
}

const rightButtons = (
  <div>
    <NavLink to="/"><RaisedButton label="Home" style={style} /></NavLink>
    <NavLink to="/contacts"><RaisedButton label="ContactList" style={style} /></NavLink>
  </div>
)

const Navbar = () => {
  return (
    <AppBar
      iconElementLeft={<Gavel style={{ color: 'black', margin: 9 }} />}
      style={{ margin: 'auto', color: 'white' }}
      title="Contact List"
      iconElementRight={rightButtons} />
  )
}

export default Navbar

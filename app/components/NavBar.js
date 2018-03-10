import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import { blue500, red500, greenA200 } from 'material-ui/styles/colors'
import SvgIcon from 'material-ui/SvgIcon'
import { NavLink } from 'react-router-dom'

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
)

const style = {
  margin: 9
}

const rightButtons = (
  <div>
    <NavLink to="/contacts"><RaisedButton label="Contacts" style={style} /></NavLink>
  </div>
)

const leftButtons = (
  <div>
    <NavLink to="/"><HomeIcon style={style} color={red500} hoverColor={greenA200} /></NavLink>
  </div>
)

const Navbar = () => {
  return (
    <AppBar
      iconElementLeft={leftButtons}
      style={{ margin: 'auto', color: 'white' }}
      iconElementRight={rightButtons} />
  )
}

export default Navbar

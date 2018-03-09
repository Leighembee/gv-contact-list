import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { postContact } from '../reducers/contacts'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const styles = {
  customWidth: {
    width: 200,
  },
}

const Form = (props) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={false}
      onClick={props.handleClose} key='1' />,
    <FlatButton
      label="Submit"
      primary={false}
      keyboardFocused={false}
      type='submit'
      key='2'
      onClick={props.handleClose} />,
  ]
  return (
    <form method='POST' onSubmit={props.handleSubmit} >
      <TextField name="firstName" floatingLabelText="First Name" style={{ margin: 5 }} />
      <TextField name="lastName" floatingLabelText="Last Name" style={{ margin: 5 }} /><br />
      <TextField name="email" floatingLabelText="Email" style={{ margin: 5 }} /><br />
      <TextField name="phoneNumber" floatingLabelText="Phone #" style={{ margin: 5 }} /><br />
      <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
        {actions}
      </div>
    </form>
  )
}


function mapDispactToProps(dispatch, ownProps) {
  return {
    handleSubmit(event) {
      event.preventDefault()
      dispatch(postContact({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        phoneNumber: event.target.phoneNumber.value
      }, ownProps.history))
    }
  }
}

const FormContainer = connect(null, mapDispactToProps)(Form)

export default FormContainer

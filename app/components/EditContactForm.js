import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { withRouter } from 'react-router-dom'
import { editContact } from '../reducers/contacts'

const styles = {
  customWidth: {
    width: 200,
  },
}

const EditContactForm = (props) => {
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
      <TextField value={props.formProps.firstName} onChange={props.handleFirstNameChange} name="firstName" floatingLabelText="First Name" style={{ margin: 5 }} />
      <TextField value={props.formProps.lastName} onChange={props.handleLastNameChange} name="lastName" floatingLabelText="Last Name" style={{ margin: 5 }} /><br />
      <TextField value={props.formProps.phoneNumber} onChange={props.handlePhoneChange} name="phoneNumber" floatingLabelText="Phone Number" style={{ margin: 5 }} /><br />
      <TextField value={props.formProps.email} onChange={props.handleEmailChange} name="email" floatingLabelText="email" style={{ margin: 5 }} /><br />
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
      dispatch(editContact({
        id: ownProps.formProps.id,
        firstName: ownProps.formProps.firstName,
        lastName: ownProps.formProps.lastName,
        email: ownProps.formProps.email,
        phoneNumber: ownProps.formProps.phoneNumber
      }, ownProps.history))
    }
  }
}

const EditContactFormContainer = connect(null, mapDispactToProps)(EditContactForm)

export default EditContactFormContainer

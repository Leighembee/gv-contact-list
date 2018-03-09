import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import EditSingleContactForm from './EditSingleContactForm'
import { fetchOneContact } from '../reducers/singleContact'
import { withRouter } from 'react-router-dom'


class EditSingleContactContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.contact.id,
      open: false,
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      email: this.props.contact.email,
      phoneNumber: this.props.contact.phoneNumber
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
  }

  componentDidMount() {
    this.props.loadContact(this.props.match.params.contactId)
  }

  componentWillReceiveProps() {
    this.setState({
      id: this.props.contact.id,
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      email: this.props.contact.email,
      phoneNumber: this.props.contact.phoneNumber
    })
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value })
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value })
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handlePhoneChange(event) {
    this.setState({ phoneNumber: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.handleOpen} tooltip='Edit Contact'>
          <Edit />
          <Dialog
            title="Edit Contact"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            titleStyle={{ textAlign: "center" }}
          >

            <EditSingleContactForm
              formProps={this.state}
              handleClose={this.handleClose}
              handleFirstNameChange={this.handleFirstNameChange}
              handleLastNameChange={this.handleLastNameChange}
              handleEmailChange={this.handleEmailChange}
              handlePhoneChange={this.handlePhoneChange} />
          </Dialog>
        </IconButton>
      </div>
    )
  }
}

function mapStateToProps(storeState) {
  return {
    contact: storeState.currentContact,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadContact: (id) => {
      dispatch(fetchOneContact(id))
    }
  }
}

const ContactFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSingleContactContainer))

export default ContactFormContainer

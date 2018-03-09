import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchContacts } from '../reducers/contacts'
import ContactList from './ContactList'
import { deleteContact } from '../reducers/contacts'


class StatefulContactList extends Component {
  componentDidMount() {
    this.props.loadContacts()
  }

  render() {
    return (
      <ContactList contacts={this.props.contacts} deleteAContact={this.props.deleteAContact} />
    )
  }
}


function mapStateToProps(storeState) {
  return {
    contacts: storeState.contacts
  }
}

function mapDispactToProps(dispatch) {
  return {
    deleteAContact: (contact) => {
      dispatch(deleteContact(contact))
    },
    loadContacts: () => {
      dispatch(fetchContacts())
    }
  }
}

const StatefulContactListContainer = connect(mapStateToProps, mapDispactToProps)(StatefulContactList)

export default StatefulContactListContainer

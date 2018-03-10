import React, { Component } from 'react'
import FilterInput from './FilterInput'
import ContactList from './ContactList'

export default class FilterableArtists extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value
    this.setState({
      inputValue: value
    })
  }

  render() {

    const inputValue = this.state.inputValue.toLowerCase()
    const filteredContacts = this.props.contacts.filter(contact =>
      contact.fullName.toLowerCase().match(inputValue))

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <ContactList contacts={filteredContacts} />
      </div>
    )
  }
}

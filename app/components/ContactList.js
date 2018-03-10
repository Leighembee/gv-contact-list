import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ContactFormContainer from './ContactFormContainer'
import EditContactFormContainer from './EditContactFormContainer'
import AutoComplete from 'material-ui/AutoComplete'
import DeleteButton from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const ContactList = (props) => {
  // let searchContacts = props.contacts
  // searchContacts = searchContacts.map((contact) => contact.fullName )
  return (
    <div className="contactListMain">
      <div id='contactList'>
        {/* <AutoComplete
          floatingLabelText="search contacts by name"
          filter={AutoComplete.fuzzyFilter}
          dataSource={searchContacts}
          maxSearchResults={5}
        /> */}
        <div className='contactListHeader'>
          <h1>Contacts:</h1>
          <div className="newContactButtonContainer">
            <ContactFormContainer />
          </div>
        </div>
        <div className="singleContactContainer">
          <div>
            <Table style={{ opacity: 0.5 }}>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn style={{ width: 140 }}>Name</TableHeaderColumn>
                  <TableHeaderColumn style={{ width: 140 }} >Phone #</TableHeaderColumn>
                  <TableHeaderColumn style={{ width: 150 }}>Email</TableHeaderColumn>
                  <TableHeaderColumn style={{ width: 5 }}>Edit</TableHeaderColumn>
                  <TableHeaderColumn style={{ width: 5 }}>Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {props.contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableRowColumn style={{ width: 140 }}>{contact.fullName}</TableRowColumn>
                    <TableRowColumn style={{ width: 140 }}>{contact.phoneNumber}</TableRowColumn>
                    <TableRowColumn style={{ width: 150 }}>{contact.email}</TableRowColumn>
                    <TableRowColumn style={{ width: 5 }}>
                      <EditContactFormContainer contact={contact} />
                    </TableRowColumn>
                    <TableRowColumn style={{ width: 5 }}>
                      <IconButton onClick={() => props.deleteContact(contact)} tooltip='Delete Contact'>
                      {console.log('props!!!', contact)}
                        <DeleteButton />
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>

        </div>
      </div>
    </div>
  )
}


export default ContactList

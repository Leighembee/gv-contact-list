import axios from 'axios'
import { createContact } from './contacts'

const GOT_CURRENT_CONTACTS = 'GOT_CURRENT_CONTACTS'
const ADD_CURRENT_CONTACT = 'ADD_CURRENT_CONTACT'


export const gotCurrentContacts = (contacts) => {
  return {
    type: GOT_CURRENT_CONTACTS,
    contacts
  }
}

export const addCurrentCONTACT = (addedContact) => {
  return {
    type: ADD_CURRENT_CONTACT,
    addedContact
  }
}

export const addCurrentContactTHUNK = (contactObj, history) => {
  return function thunk(dispatch) {
    axios.post('/api/contacts/', contactObj)
      .then(res => {
        dispatch(addCurrentContact(res.data))
        dispatch(createContact(res.data))
      })
      .catch(console.error)
  }
}

export const fetchCurrentContacts = (id) => {
  return function thunk(dispatch) {
    axios.get('/api/campus/' + id + '/contacts')
      .then(res => {
        dispatch(gotCurrentContacts(res.data))
      })
      .catch(console.error)
  }
}

const currentContactsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CURRENT_CONTACTS:
      return action.contacts
    case ADD_CURRENT_CONTACT:
      return [...state, action.addedContact]
    default:
      return state
  }
}

export default currentContactsReducer

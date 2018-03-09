import axios from 'axios'

//action types
const GOT_CONTACTS = 'GOT_CONTACTS'
const NEW_CONTACT = 'NEW_CONTACT'
const EDIT_CONTACT = 'EDIT_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'

//action creators
const gotContacts = (contacts) => {
  return {
    type: GOT_CONTACTS,
    contacts
  }
}

export const createContact = (newContact) => {
  return {
    type: NEW_CONTACT,
    newContact
  }
}


export const editContacts = (edittedContact) => {
  return {
    type: EDIT_CONTACT,
    edittedContact
  }
}

export const deleteContacts = (deletedContact) => {
  return {
    type: DELETE_CONTACT,
    deletedContact
  }
}

//thunk
export const fetchContacts = () => {
  return function thunk(dispatch) {
    return axios.get('/api/contacts')
      .then(res => {
        dispatch(gotContacts(res.data))
      })
      .catch(console.error);
  }
}

export const postContact = (contactObj, history) => {
  return function thunk(dispatch) {
    axios.post('/api/contacts/', contactObj)
      .then(res => {
        dispatch(createContact(res.data))
      })
      .catch(console.error)
  }
}

export const editContact = (contactObj, history) => {
  return function thunk(dispatch) {
    axios.put('/api/contacts/' + contactObj.id, contactObj)
      .then(res => {
        dispatch(editContacts(res.data))
      })
      .catch(console.error)
  }
}

export const deleteContact = (Contact) => {
  return function thunk(dispatch) {
    axios.delete('/api/contacts/' + contact.id)
      .then((res) => {
        dispatch(deleteContacts(contact))
      })
      .catch(console.error);
  }
}

//sub-reducer
export const contactReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CONTACTS:
      return action.contacts
    case NEW_CONTACT:
      return [...state, action.newContact]
    case EDIT_CONTACT:
      const updatedContacts = state.map((contact) => {
        if (contact.id === action.edittedContact.id) {
          return action.edittedContact
        }
        return contact
      })
      return updatedContacts
    case DELETE_CONTACT:
      const deletedThenUpdatedContacts = state.filter(contact => {
        if (contact.id !== action.deletedContact.id) {
          return contact
        }
      })
      return deletedThenUpdatedContacts
    default:
      return state
  }
}

export default contactReducer

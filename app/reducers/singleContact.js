import axios from 'axios'

const GET_ONE_CONTACT = 'GET_ONE_CONTACT'
const EDIT_ONE_CONTACT = 'EDIT_ONE_CONTACT'


export const getOneContact = (currentContact) => {
  return {
    type: GET_ONE_CONTACT,
    currentContact
  }
}

export const editOneActionCreator = (edittedContact) => {
  return {
    type: EDIT_ONE_CONTACT,
    edittedContact
  }
}

export const fetchOneContact = (id) => {
  return function thunk(dispatch) {
    axios.get('/api/contacts/' + id)
      .then(res => {
        console.log(res.data)
        dispatch(getOneContact(res.data))
      })
      .catch(console.error)
  }
}

export const editOneContact = (contactObj, history) => {
  console.log(contactObj)
  return function thunk(dispatch) {
    axios.put('/api/contacts/' + contactObj.id, contactObj)
      .then(res => {
        dispatch(editOneActionCreator(res.data))
      })
      .catch(console.error)
  }
}

const singleContactReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_CONTACT:
      return action.currentContact
    case EDIT_ONE_CONTACT:
      return action.edittedContact
    default:
      return state
  }
}

export default singleContactReducer

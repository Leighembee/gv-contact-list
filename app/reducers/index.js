import { combineReducers } from 'redux'
import contacts from './contacts'
import currentContacts from './currentContacts'
import singleContact from './singleContact'

const rootReducer = combineReducers({
  contacts,
  currentContacts,
  singleContact,
})

export default rootReducer

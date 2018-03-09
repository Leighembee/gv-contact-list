import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchOneContact } from '../reducers/singleContact'
import EditSingleContactFormContainer from './EditSingleContactFormContainer'

class SingleContact extends Component {
  componentDidMount() {
    this.props.loadContact(this.props.match.params.contactId)
  }

  render() {
    return (
      <div className='singleContactContainer'>
        <div className='singleContactName'>
          <h1>Name:  {this.props.currentContact.fullName}</h1>
          <h1>Phone #:{this.props.currentContact.phoneNumber}</h1>
          <h1>Email: {this.props.currentContact.email}</h1>
        </div>
        <div className='singleContactEditButton'>
          <EditSingleContactFormContainer Contact={this.props.currentContact} />
        </div>
      </div>
    )
  }
}


function mapStateToProps(storeState) {
  return {
    currentContact: storeState.currentContact
  }
}


function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadContact: (id) => {
      dispatch(fetchOneContact(id))
    }
  }
}


const SingleContactContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleContact))

export default SingleContactContainer

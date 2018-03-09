const Sequelize = require('sequelize')
const db = require('../index')

const Contact = db.define('contacts', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`
    }
  }
})

module.exports = Contact

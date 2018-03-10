const db = require('./db/models')
const { Contact } = require('./db/models')
const Chance = require('chance')
const chance = new Chance()


const contactFirstName = [], contactLastName = [], contactEmail = [], contactPhoneNumber = []

for (var i = 0; i < 50; i++) {
  contactFirstName.push(chance.first())
  contactLastName.push(chance.last())
  contactEmail.push(chance.email())
  contactPhoneNumber.push(chance.phone())
}

const createdContacts = []
contactFirstName.map((val, ind) => {
  createdContacts.push(Contact.create({
    firstName: val,
    lastName: contactLastName[ind],
    email: contactEmail[ind],
    phoneNumber: contactPhoneNumber[ind],
  }))
})

Promise.all(createdContacts)
  .then(() => {
    console.log('database seeded')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

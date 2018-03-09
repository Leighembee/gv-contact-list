const router = require('express').Router()
const { Contact } = require('../db/models/')


router.get('/', (req, res, next) => {
  Contact.findAll({
    include: [{
      all: true, nested: true
    }]
  })
    .then(contacts => {
      res.json(contacts)
    })
    .catch(next);
})

router.get('/:contactId', (req, res, next) => {
  Contact.findById(req.params.contactId, {
    include: {
      all: true
    }
  })
    .then(foundContact => {
      res.json(foundContact)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {

 Contact.findById(req.body.contact)
    .then(contact => {
      return Contact.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      })
    })
    .then(createdContact => {
      return Contact.findById(createdContact.id, {
        include: {
          all: true, nested: true
        }
      })
    })
    .then(foundContact => {
      res.json(foundContact)
    })
    .catch(next)
})

router.put('/:contactId', (req, res, next) => {
  Contact.update(req.body,
    {
      where: {
        id: req.params.contactId
      },
      returning: true
    })
    .spread((numUpdates, updatedContact) => {
      const theContact = updatedContact[0]
      return Contact.findById(theContact.id, {
        include: {
          all: true, nested: true
        }
      })
    })
    .then(foundContact => {
      res.json(foundContact)
    })
    .catch(next);
})

router.delete('/:contactId', (req, res, next) => {
  Contact.destroy({
    where: {
      id: req.params.contactId
    }
  })
    .then(() => {
      console.log('contact deleted');
      res.send()
    })
    .catch(next)
})




module.exports = router;

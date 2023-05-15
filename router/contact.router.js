const express = require('express');
const contactRouter = express.Router();
const controller = require('../controller/contact.controller.js')

// Get all Contacts
contactRouter.get('/', controller.getAllContact )
// search contact with query 
contactRouter.get('/search', controller.searchContact )
// Add contact
contactRouter.post('/add', controller.addContact )
// update contact
contactRouter.put('/:id', controller.updateContact )
// delete contact by Id
contactRouter.delete('/:id', controller.deleteContact )

module.exports = contactRouter;
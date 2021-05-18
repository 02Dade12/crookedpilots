const router = require('express').Router();
const ContactController = require('../../controllers/ContactController');

router.route('/')
    .post(ContactController.NewContact)
    .get(ContactController.GetContacts);

router.route('/:id')
    .get(ContactController.GetContacter)
    .delete(ContactController.DeleteContact);

module.exports = router;
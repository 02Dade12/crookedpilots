const router = require('express').Router();
const contactRoutes = require('./contact');
const userRoutes = require('./user');

router.use('/contacts', contactRoutes);
router.use('/users', userRoutes);

module.exports = router;
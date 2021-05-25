const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.route('/')
    .post(UserController.SignUp);

router.route('/login')
    .post(UserController.Login);

router.route('/logout')
    .post(UserController.Logout);

router.route('/auth')
    .get(UserController.hasSignedIn);

module.exports = router;
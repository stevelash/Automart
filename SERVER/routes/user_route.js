
import express from 'express';
import User from '../usingDB/controller/userController';

const router = express.Router();

// sign in user
router.post('/api/v1/auth/signin', User.signIn);

// sign up a user
router.post('/api/v1/auth/signup', User.signUp);


// get all users including admin
router.get('/api/v1/user', User.getUsers);

// delete user (admin only)
router.delete('/api/v1/users/:userId', User.deleteUsers);

// route to reset password
router.post('/api/v1/users/:useremail/reset_password', User.updatePassword);


module.exports = router;

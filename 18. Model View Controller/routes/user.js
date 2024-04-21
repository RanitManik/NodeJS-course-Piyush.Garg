const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/user');

// Routes =>
router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .patch(updateUser);

module.exports = router;
const express = require('express');
const { deleteUser } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.delete('/delete_user', isAuthenticated, isAdmin, deleteUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getCurrentUser);
module.exports = router;

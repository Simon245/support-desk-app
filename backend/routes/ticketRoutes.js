const express = require('express');
const router = express.Router();
const {} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');
const { createTicket, getTickets } = require('../controllers/ticketController');

router.route('/').get(protect, getTickets).post(protect, createTicket);

module.exports = router;

const express = require('express');
const router = express.Router();
const vitalsController = require('../controllers/vitals');

router.post('/', vitalsController.submitVitals);
router.post('/submit', vitalsController.submit);

module.exports = router;

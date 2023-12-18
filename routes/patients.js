const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patients');

router.post('/register', patientsController.register);
router.get('/list', patientsController.list);
router.get('/:patientId', patientsController.getDetails);

module.exports = router;

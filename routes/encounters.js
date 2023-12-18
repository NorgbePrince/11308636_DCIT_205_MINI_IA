const express = require('express');
const router = express.Router();
const encountersController = require('../controllers/encounters');

router.post('/', encountersController.startEncounter);
router.post('/start', encountersController.start);

module.exports = router;

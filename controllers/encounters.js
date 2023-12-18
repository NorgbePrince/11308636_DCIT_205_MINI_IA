const Encounter = require('../models/Encounter');

module.exports = {
  start: async (req, res) => {
    try {
      const encounterData = req.body;
      const encounter = new Encounter(encounterData);
      await encounter.save();

      res.json({
        encounterId: encounter._id,
        message: 'Encounter started successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

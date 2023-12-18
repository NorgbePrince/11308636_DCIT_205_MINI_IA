
const Encounter = require('../models/Encounter');

const startEncounter = async (req, res) => {
  try {
    const { patientId, dateTime, type } = req.body;

    const newEncounter = new Encounter({
      patientId,
      dateTime,
      type
    });

    const savedEncounter = await newEncounter.save();

    res.status(201).json(savedEncounter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to start the encounter.' });
  }
};

module.exports = {
  startEncounter
};

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

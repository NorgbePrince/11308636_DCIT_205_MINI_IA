const Encounter = require('../models/Encounter');


const submitVitals = async (req, res) => {
  try {
    const { patientId, temperature, bloodPressure, heartRate } = req.body;

    const newVitals = new Vitals({
      patientId,
      temperature,
      bloodPressure,
      heartRate
    });

    const savedVitals = await newVitals.save();

    res.status(201).json(savedVitals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit patient vitals.' });
  }
};

module.exports = {
  submitVitals
};


module.exports = {
  submit: async (req, res) => {
    try {
      const { encounterId, bloodPressure, temperature, pulse, spO2 } = req.body;

      const encounter = await Encounter.findById(encounterId);
      if (!encounter) {
        return res.status(404).json({ error: 'Encounter not found' });
      }

      encounter.vitals = { bloodPressure, temperature, pulse, spO2 };
      await encounter.save();

      res.json({ message: 'Vitals submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

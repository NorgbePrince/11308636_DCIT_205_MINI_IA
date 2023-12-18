const Patient = require('../models/Patient');

module.exports = {
  register: async (req, res) => {
    try {
      const patientData = req.body;
      const patient = new Patient(patientData);
      await patient.save();

      res.json({
        patientId: patient._id,
        message: 'Patient registered successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  list: async (req, res) => {
    try {
      const patients = await Patient.find({}, { _id: 0, __v: 0 });

      res.json({ patients });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getDetails: async (req, res) => {
    try {
      const patientId = req.params.patientId;
      const patient = await Patient.findById(patientId, { __v: 0 });

      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }

      res.json(patient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

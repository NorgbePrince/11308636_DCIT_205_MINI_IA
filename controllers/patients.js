const Patient = require('../models/Patient');

const registerPatient = async (req, res) => {
  try {
    const {
      surname,
      othernames,
      gender,
      phone,
      residentialAddress,
      emergencyName,
      emergencyContact,
      relationshipWithPatient
    } = req.body;

    const newPatient = new Patient({
      surname,
      othernames,
      gender,
      phone,
      residentialAddress,
      emergencyName,
      emergencyContact,
      relationshipWithPatient
    });

    const savedPatient = await newPatient.save();

    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register the patient.' });
  }
};

module.exports = {
  registerPatient
};

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

  update: async (req, res) => {
    try {
      const { patientId, updatedData } = req.body;

      const existingPatient = await Patient.findById(patientId);
      if (!existingPatient) {
        return res.status(404).json({ error: 'Patient not found' });
      }

      Object.assign(existingPatient, updatedData);
      await existingPatient.save();

      res.json({ message: 'Patient information updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

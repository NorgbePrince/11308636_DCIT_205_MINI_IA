const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  othernames: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  residentialAddress: {
    type: String,
    required: true
  },
  emergencyName: {
    type: String,
    required: true
  },
  emergencyContact: {
    type: String,
    required: true
  },
  relationshipWithPatient: {
    type: String,
    required: true
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
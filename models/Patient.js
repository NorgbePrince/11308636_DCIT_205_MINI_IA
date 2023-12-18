const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  surname: String,
  othernames: String,
  gender: String,
  phone: String,
  residentialAddress: String,
  emergencyName: String,
  emergencyContact: String,
  relationshipWithPatient: String,
});

module.exports = mongoose.model('Patient', patientSchema);

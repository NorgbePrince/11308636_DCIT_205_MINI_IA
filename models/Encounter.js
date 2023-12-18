const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientId: String,
  dateTime: Date,
  encounterType: String,
  vitals: {
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spO2: String,
  },
});

module.exports = mongoose.model('Encounter', encounterSchema);

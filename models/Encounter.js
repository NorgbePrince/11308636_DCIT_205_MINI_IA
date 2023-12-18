const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
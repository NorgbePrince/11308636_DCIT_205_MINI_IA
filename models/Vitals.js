const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  bloodPressure: {
    type: String,
    required: true
  },
  heartRate: {
    type: Number,
    required: true
  }
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
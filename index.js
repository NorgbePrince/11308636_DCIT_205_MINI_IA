
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


mongoose.connect('mongodb+srv://princewaddle120:Prince99@#@cluster0.eese1ub.mongodb.net/Praticals-API?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(bodyParser.json());


const patientsRouter = require('./routes/patients');
const encountersRouter = require('./routes/encounters');
const vitalsRouter = require('./routes/vitals');


app.use('/patients', patientsRouter);
app.use('/encounters', encountersRouter);
app.use('/vitals', vitalsRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

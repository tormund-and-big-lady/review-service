const mongoose = require('mongoose');
const model = require('./model.js');
const seeder = require('./seed.js');
mongoose.connect('mongodb://localhost/FEC_Nordstrom', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('db connected!') });

module.exports = {
  mongoose,
  model,
  seeder
}
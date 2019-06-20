const mongoose = require('mongoose');
const model = require('./model.js');
const seeder = require('./seed.js');


require('dotenv').config();

let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/FEC_Nordstrom' : `mongodb+srv://dbUser:${process.env.DB_PW}@cluster0-awanb.mongodb.net/test?retryWrites=true&w=majority`


mongoose.connect(DB_URL, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('db connected!') });

module.exports = {
  mongoose,
  model,
  seeder
}
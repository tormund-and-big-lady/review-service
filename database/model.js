const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  nickName: { type: String, required: true },
  rating: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  fit: { type: Number, required: true }  
}, {timestamps: true});

const review = mongoose.model('Reviews', reviewSchema);

module.exports = review;
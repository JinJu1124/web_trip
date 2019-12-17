const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var schema = new Schema({
  //author: {type:Schema.Types.ObjectId, ref: 'User'},
  tour_name: {type: String, required: true, trim: true},
  people: {type: Number, default: 0},
  price : {type: Number, default: 0},
  bookAt: {type: String, required: true, trim: true}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Book = mongoose.model('Book', schema);

module.exports = Book;

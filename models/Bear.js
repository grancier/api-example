// app/models/bear.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const BearSchema = new Schema({
  name: String
});

const Bear = mongoose.model('Bear', BearSchema);

module.exports = Bear;

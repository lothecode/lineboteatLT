const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  }
})

module.exports = mongoose.model('Diner', todoSchema)
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  first_name:{
    type: String,
    minlength: [1, "First name is require"],
    trim: true,
    required: [true, "First name is required"],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]+$/.test(v);
      },
      message: "First name cannot contain numbers or special characters"
    }
  },
  last_name: { type: String, required: false},
  roll_number: {
    type: Number,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[0-9]+$/.test(v.toString());
      },
      message: "Roll number can only contain numbers"
    },
    required: [true, "Roll number is required"]
  },
  phone_number:{
    type: String,
    validate: {
      validator: function(v) {
        return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(v);
      },
      message: 'Please enter a valid phone number .A phone number with 10 digits'
    },
    required: [true, 'Phone number required']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/.test(v)
      },
      message: 'Email is required'
    }
  },
  city: { type: String, required: false },
  country: { type: String, required: false },
  pincode:  {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d{6}$/.test(v);
      },
      message: 'Invalid pincode',
    },
    required: [true, 'Pincode is required']
  },
}); 
module.exports.Student = mongoose.model('Student', studentSchema);
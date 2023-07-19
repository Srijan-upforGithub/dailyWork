const mongoose = require('mongoose');
 const customerSchema = new mongoose.Schema({
    value:{
      type:String,
      required:true
    },
 });
  
 module.exports = mongoose.model('todos',customerSchema)
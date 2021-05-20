//create module schema
const mongoose = require('mongoose')
const { Schema } = mongoose

//Defining your schema 
const userSchema = new Schema({
    name:{ type: String,  required:true},
    email: String,
    password: String,
    phone:String
})

//After defining your schema => Creating a model
module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fName : {type: String, required : true},
    lName : {type: String},
    email:{type:String, required:true, unique:true}

})

module.exports= mongoose.model('User',userSchema)
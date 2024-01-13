const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        id : Number,
        name : String, 
        email : String,
        phoneNumber : Number,
        password : String,
        designation : String
    
    }
);

const EmpData = mongoose.model('EmpData',schema);
module.exports=EmpData;
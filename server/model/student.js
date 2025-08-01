const mongoose=require('mongoose');

const studentschema= new mongoose.Schema({
    name:String,
    id:String,
    email:String,
    phone_no:String,
    password:String,
    attandance:{
        type:Map,
        of:String
    }
})

const student=mongoose.model('Students',studentschema);

module.exports=student;
const mongoose=require('mongoose');

const studentschema= new mongoose.Schema({
    name:String,
    id:String,
    email:String,
    phone:String,
    attandance:{
        type:Map,
        of:String
    }
})

const student=mongoose.model('Student',studentschema);

module.exports=student;
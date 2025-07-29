const mongoose=require('mongoose');
const student = require('./student');
const adminshcema=new mongoose.Schema({
        teacher_id:String ,
        student_id:String,
        teacher_password:String,
        student_password:String
})

const admin =mongoose.model('admin',adminshcema);

module.exports=admin;

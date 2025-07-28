const express=require('express');
const router=express.Router();
const student = {
    start:'20/1/2025',
    end:'30/1/2025',
    name: "pradeep",
    email: "example@email.com",
    phone: "9090980980",
    student_id: "001",
    attandance: { "20/1": "P", "23/1": "P", "30/1": "P" },
  };

router.get('/',(req,res)=>{
    res.json(student)
})

module.exports=router
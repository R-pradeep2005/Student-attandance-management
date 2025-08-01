const express = require("express");
const router = express.Router();
const admin = require("../model/admin");
const student=require('../model/student');

const data = admin.find().then(() => {
  console.log("found sucessfully");
});
console.log();

router.get("/", (req, res) => {
  res.json({ message: student.id });
});
router.post("/", async (req, res) => {
  let teacher;
  const student_data = await admin.findOne({});
  student_data.teacher_id==req.body.id&&student_data.teacher_password==req.body.password?teacher= true: teacher=false;
   console.log(student_data.teacher_id);

 if(req.body.user == "Student"){
     const student_pass=await student.findOne({id:req.body.id})
     student_pass.password==req.body.password ? res.json({ permission: true })
    : res.json({ permission: false });
    }
  else{
        teacher
    ? res.json({ permission: true })
    : res.json({ permission: false });
  } 
});

module.exports = router;

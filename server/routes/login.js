const express = require("express");
const router = express.Router();
const admin = require("../model/admin");

const data = admin.find().then(() => {
  console.log("found sucessfully");
});
console.log();

router.get("/", (req, res) => {
  res.json({ message: student.id });
});
router.post("/", async (req, res) => {
  let teacher;
  let student;
  const student_data = await admin.findOne({});
  student_data.teacher_id==req.body.id&&student_data.teacher_password==req.body.password?teacher= true: teacher=false;
  student_data.student_id==req.body.id&&student_data.student_password==req.body.password?student=true:student=false;
  console.log(student_data.teacher_id);

  req.body.user == "Student"
    ? student
      ? res.json({ permission: true })
      : res.json({ permission: false })
    : teacher
    ? res.json({ permission: true })
    : res.json({ permission: false });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const student=require('../model/student')


router.post("/", (req, res) => {
  const data=new student(req.body)
  data.save().then(()=>{console.log('sucessfully inserted');
  }).catch((err)=>{console.error('error occured in add student data handling',err);
  })
   
});

module.exports = router;

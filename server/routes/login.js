const express=require('express')
const router =express.Router();

const student={
    id:'s002',
    password:'1234'
}
const teacher={
    id:'t002',
    password:'1234'
}

router.get('/',(req,res)=>{
    res.json({message:student.id});
})
router.post('/',(req,res)=>{
     req.body.user=='Student'?req.body.id==student.id&&req.body.password==student.password?res.json({permission:true}):res.json({permission:false}):req.body.id==teacher.id&&req.body.password==teacher.password?res.json({permission:true}):res.json({permission:false})
     
})

module.exports= router
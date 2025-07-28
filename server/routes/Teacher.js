const express=require('express');
const router=express();
 let data=[
    {
      name: "jhon",
      student_id: "001",
      attandance: { "20/1": "P", "23/1": "A", "30/1": "P" },
    },
    {
      name: "kumar",
      student_id: "002",
      attandance: { "23/1": "A", "30/1": "P" },
    },
  ]
router.get('/',(req,res)=>{
        res.json(data)
})
router.post('/',(req,res)=>{
    update=req.body;
    Object.keys(update).forEach(keys=>{
        data[keys]={...data[keys],...update[keys]}
    })
    
})

module.exports=router
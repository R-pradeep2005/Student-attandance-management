const express=require('express');
const router=express();
const student=require('../model/student')
  
router.get('/',async(req,res)=>{
        const data = await student.find({}).then((data)=>(res.json(data)))

         
})
router.put('/',async(req,res)=>{
   const update=req.body;
   update.map(async(item)=>{   await student.findOneAndUpdate({id:item.id},{attandance:item.attandance},{upsert:true})
})
    console.log(update);
    
    // Object.keys(update).forEach(keys=>{
    //     data[keys]={...data[keys],...update[keys]}
    // })
    
})

module.exports=router
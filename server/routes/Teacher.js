const express=require('express');
const router=express();
const student=require('../model/student')
  
router.get('/',(req,res)=>{
         student.find({}).then((data)=>(res.json(data)))

         
})
router.put('/',async(req,res)=>{
   const update=req.body;
   console.log(update);
   
   await Promise.all(update.map((item)=>(  student.findOneAndUpdate({id:item.id},{attandance:item.attandance},{upsert:true}))))
    res.send(true)
    
    // Object.keys(update).forEach(keys=>{
    //     data[keys]={...data[keys],...update[keys]}
    // })
    
})

router.delete('/',async(req,res)=>{
        const id_array=req.body;
        
        
        await Promise.all(
            id_array.map((id)=>(  student.deleteOne({id:id})
))
        );
        res.send(true);
})

module.exports=router
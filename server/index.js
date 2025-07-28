const express =require('express');
const app =express();
const router=require('./routes/login')
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use('/',router);
app.listen(5000,()=>{console.log('Lisenting...');
})
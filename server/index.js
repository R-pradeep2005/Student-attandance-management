const express =require('express');
const app =express();
const LoginRouter=require('./routes/login')
const StudentRouter=require('./routes/student')
const TeacherRouter=require('./routes/Teacher')
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use('/',LoginRouter);
app.use('/Student',StudentRouter);
app.use('/Teacher',TeacherRouter)
app.listen(5000,()=>{console.log('Lisenting...');
})
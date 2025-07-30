const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const LoginRouter = require("./routes/login");
const StudentRouter = require("./routes/student");
const TeacherRouter = require("./routes/Teacher");
const AddStudentRouter = require("./routes/AddStudent");
const cors = require("cors");
const admin = require("./model/admin");
const student = require("./model/student");
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to monogo");
  })
  .catch((err) => {
    console.error("error occured in monogo connection", err);
  });
app.use(cors());
app.use(express.json());
app.use("/", LoginRouter);
app.use("/Student", StudentRouter);
app.use("/Teacher", TeacherRouter);
app.use("/AddStudent", AddStudentRouter);

app.listen(5000, () => { 
  console.log("Lisenting...");
});
 
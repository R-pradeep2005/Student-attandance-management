import React from "react";
const handleSubmit = (e) => {
  e.preventDefault();
  const data =new FormData(e.target);
  const student=Object.fromEntries(data.entries());
  


      fetch('http://localhost:5000/AddStudent',{
        method:'POST',
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(student)

      })
}

const AddStudent = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[24px]">Add new Student</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-2 mt-6">
        <label htmlFor="">Name</label>
        <input name="name"
          className="border-1 border-black rounded-xl w-fit p-2"
          placeholder="enter name of the student"
        />
        <label htmlFor="">Email</label>
        <input name="email"
          className="border-1 border-black rounded-xl w-fit p-2"
          placeholder="example@email.com"
        />

        <label htmlFor="">Phone No</label>
        <input name="phone_no"
          className="border-1 border-black rounded-xl w-fit p-2"
          placeholder="+91 ..."
        />
        
        <label htmlFor="">Password</label>
        <input name="password"
          className="border-1 border-black rounded-xl w-fit p-2"
          placeholder="enter a password"
        />
         <button className="bg-blue-600 text-white rounded-xl p-2 font-bold w-full mt-4" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;

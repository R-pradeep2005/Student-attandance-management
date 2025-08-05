import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate = useNavigate();
  const [date_arr, setDate_arr] = useState([]);
  const checkboxRef=useRef([]);  
  const [student_count,set_count]=useState(0);
  const [student_detail, setStudent_detail] = useState([
    {
      name: "",
      id: "",
      attandance: {},
    },
  ]);
  console.log(student_detail);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch("http://localhost:5000/Teacher", {
      method: "GET",
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
      .then((response) =>{if(!response.ok){window.alert('error in authentication not a valid jwt token');navigate('/');  throw new Error('authenticaion error')} else{return response.json()}})
      .then((data) => {
        if(data.message){
          window.alert(data.message)
        }
        setStudent_detail(data.map((item)=>(item)));
        set_count(data.length);
       
      });
  }, []);

  const start_date = "20/01/2025";
  const current_date = "30/01/2025";

  const handledelete = () => {
      const deleted_item=[];
      checkboxRef.current.forEach(element => {
        element.checked?deleted_item.push(element.name):null;
                  
      });
      const token= localStorage.getItem('token')
      fetch('http://localhost:5000/Teacher',{
        method:"DELETE",
        headers:{
          'Authorization':`Bearer ${token}`,
          "content-type":"application/json"
        },
        body:JSON.stringify(deleted_item)
      }).then((response)=>{
        if(response){window.alert('selected items deleted sucessfully'); window.location.reload()}})
       
      
      console.log(deleted_item);
      

    return  null

  }
  const parse_date = (date_str) => {
    const [day, month, year] = date_str.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const genarate_date_array = (start_date, end_date) => {
    const start = parse_date(start_date);
    const end = parse_date(end_date);
    const arr = [];
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      const date = dt.getDate();
      const month = dt.getMonth();
      arr.push(`${date}/${month + 1}`);
    }

    return setDate_arr(arr);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const date = e.target.name;
    const status = e.target.value;
    setStudent_detail((perv) =>
      perv.map((item) =>
        item.id == id
          ? { ...item, attandance: { ...item.attandance, [date]: status } }
          : item
      )
    );
  };
  const handleUpdate = () => {
    const token=localStorage.getItem('token');
    fetch("http://localhost:5000/Teacher", {
      method: "PUT",
      headers: { 
        'Authorization':`Bearer ${token}`,
        "content-type": "application/json" },
      body: JSON.stringify(student_detail.map((item)=>({id:item.id,attandance:item.attandance}))),
    }).then((response)=>{
      response?window.alert('updated to DB sucessfully'):null;
    }).catch((err)=>{window.alert(`an error occured in server side ${err}`)});
  };
  useEffect(() => {
    genarate_date_array(start_date, current_date);
  }, [start_date]);

  return (
    <div className="flex flex-col p-4 items-center">
      <h1 className="text-[24px] font-semibold ">Teacher's Panel</h1>
      <div className="flex flex-row justify-between w-full">
        <Link
          to={"/AddStudent"}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl p-2 font-bold"
        >
          Add Student
        </Link>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl p-2 font-bold"
        >
          Update Attandance
        </button>
      </div>
      <h1 className="text-l font-semibold mt-2 self-start">
        Total Students {student_count}
      </h1>
      <h1 className="text-l font-semibold mt-2 self-start">
        List of all students
      </h1>
      <button
          onClick={handledelete}
           className="bg-red-600 hover:bg-red-700 self-start m-4 ml-0 cursor-pointer text-white rounded-xl p-2 font-bold"
        >
          Delete selected Students
        </button>
       <div className="flex flex-row  items-center max-w-[90vw]"> 
        {student_detail.length==0?
        "NO student added yet"
        :
        <div className="flex flex-row w-full justify-start">
        
           <table className=" border-collapse boder-2 border-black p-2 w-fit self-start ">
          <thead>
            <tr>
              <th className=" border boder-2 border-black p-2 w-fit">Select</th>
              <th className=" border boder-2 border-black p-2 w-fit">S.no</th>
              <th className=" border boder-2 border-black p-2 w-fit">
                Student_id
              </th>
              <th className=" border boder-2 border-black p-2 w-fit">Name</th>
            </tr>
          </thead>
          <tbody>
            {student_detail.map((item, index) => (
              <tr key={index}>
                <td className=" border boder-2 border-black p-2 w-fit"><input ref={(el)=>(checkboxRef.current[index]=el)} name={item.id} type="checkbox"/></td>
                <td className=" border boder-2 border-black p-2 w-fit">
                  {index + 1}
                </td>
                <td className=" border boder-2 border-black p-2 w-fit">
                  {item.id}
                </td>
                <td className=" border boder-2 border-black p-2 w-fit">
                  {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
      
       
        <div className="overflow-x-scroll">
          <table className=" boder-1  border-black ">
            <thead>
              <tr>
                {date_arr.map((item, index) => (
                  <th className="border-1 border-black p-2 w-fit" key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {student_detail.map((item, index) => (
                <tr key={index}>
                  {" "}
                  {date_arr.map((date, ind) => (
                    <td className="border-1 border-black p-2 w-fit" key={ind}>
                      <input
                        id={item.id}
                        name={date}
                        value={
                          item.attandance[date] === undefined
                            ? "NE"
                            : item.attandance[date]
                        }
                        onChange={handleChange}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        }
         </div> 
      
      <Link
        to={"/"}
        className="bg-blue-600 hover:bg-red-700 cursor-pointer text-white rounded-xl p-2 font-bold"
      >
        Log out
      </Link>
    </div>
  );
};

export default Teacher;

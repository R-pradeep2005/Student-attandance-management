import React, { useEffect, useState } from "react";

const Teacher = () => {
  const [date_arr, setDate_arr] = useState([]);
  const student_detail = [
    {
      name: "jhon",
      student_id: "001",
      attandance: { '20/1':"P", "23/1":"A", "30/1": "P" },
    },
    {
      name: "kumar",
      student_id: "001",
      attandance: { "23/1":"A", "30/1": "P" },
    },
  ];

  const start_date = "20/01/2025";
  const current_date = "30/01/2025";
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

  useEffect(() => {
    genarate_date_array(start_date, current_date);
  }, [start_date]);

  return (
    <div className="flex flex-col p-4 items-center">
      <h1 className="text-[24px] font-semibold ">Teacher's Panel</h1>
      <div className="flex flex-row justify-between w-full">
        <button className="bg-blue-600 text-white rounded-xl p-2 font-bold">
          Add Student
        </button>
        <button className="bg-blue-600 text-white rounded-xl p-2 font-bold">
          Track Attandance
        </button>
      </div>
      <h1 className="text-l font-semibold mt-2 self-start">
        Total Students {45}
      </h1>
      <h1 className="text-l font-semibold mt-2 self-start">
        List of all students
      </h1>
      <div className="flex flex-row w-full justify-start">
        <table className=" border-collapse boder-2 border-black p-2 w-fit self-start ">
          <thead>
            <tr>
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
                <td className=" border boder-2 border-black p-2 w-fit">
                  {index + 1}
                </td>
                <td className=" border boder-2 border-black p-2 w-fit">
                  {item.student_id}
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
            <thead >
              <tr >
                {date_arr.map((item, index) => (
                  <th className="border-1 border-black p-2 w-fit" key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                student_detail.map((item,index)=>(<tr key={index}> {
                  date_arr.map((date,ind)=>(
                    
                    <td className="border-1 border-black p-2 w-fit" key={ind}>{ item.attandance[date]==undefined?'NE':item.attandance[date]}</td>
                  ))
                }</tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teacher;

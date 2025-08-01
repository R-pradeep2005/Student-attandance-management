import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
  const [date_arr, setDate_arr] = useState([]);
  const [student_count,set_count]=useState(0);
  const [student_detail, setStudent_detail] = useState([
    {
      name: "",
      id: "",
      attandance: {},
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/Teacher", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
        setStudent_detail(data.map((item)=>(item)));
        set_count(data.length);
       
      });
  }, []);

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
    fetch("http://localhost:5000/Teacher", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(student_detail.map((item)=>({id:item.id,attandance:item.attandance}))),
    });
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
          className="bg-blue-600 text-white rounded-xl p-2 font-bold"
        >
          Add Student
        </Link>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white rounded-xl p-2 font-bold"
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
      <Link
        to={"/"}
        className="bg-blue-600 text-white rounded-xl p-2 font-bold"
      >
        Log out
      </Link>
    </div>
  );
};

export default Teacher;

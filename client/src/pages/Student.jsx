import React from "react";

const Student = () => {
  const student = {
    name: "jhon",
    email: "example@email.com",
    phone: "9090980980",
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[32px]">Welcome {student.name}!</h1>
      <h3 className="font-semibold">Student info</h3>
      <table>
        <tr>
          <td className="vertical-header border boder-2 border-black p-2 w-fit">
            name
          </td>
          <td className="vertical-header border boder-2 border-black p-2  font-normal w-fit">
            {student.name}
          </td>
        </tr>
         <tr>
          <td className="vertical-header border boder-2 border-black p-2 w-fit">
            email
          </td>
          <td className="vertical-header border boder-2 border-black p-2  font-normal w-fit">
            {student.email}
          </td>
        </tr>
         <tr>
          <td className="vertical-header border boder-2 border-black p-2 w-fit">
            phone
          </td>
          <td className="vertical-header border boder-2 border-black p-2  font-normal w-fit">
            {student.phone}
          </td>
        </tr>
      </table>
      
    </div>
  );
};

export default Student;

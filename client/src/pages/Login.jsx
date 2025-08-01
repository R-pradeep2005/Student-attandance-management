import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("Student");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const id = data.get("userid");
    const password = data.get("password");
    console.log("executed");
    console.log(JSON.stringify({ hello: "hello" }));

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, password: password, user: user }),
    })
      .then((response) => response.json())
      .then((permision) => {
        permision.permission
          ? navigate(`/${user}`, { state: { id } })
          : window.alert("please enter correct id or password !");
      })
      .catch((err) => {
        window.alert(
          `error from server :${err} restart the or start the server`
        );
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-[24px] text-blue-500 mb-12">
        Welcome to Student attandance<br></br> management login to proceed !
      </h1>
      <div className="flex flex-row gap-5  w-fit justify-stretch ">
        <button
          className={`${
            user == "Student"
              ? "bg-blue-600 border-0 hover:bg-blue-700 cursor-pointer text-white"
              : "hover:bg-gray-300"
          }  border-[1.5px] border-black p-3 rounded-xl  cursor-pointer text-black font-bold`}
          onClick={() => setUser("Student")}
        >
          Student
        </button>
        <button
          className={`${
            user == "Teacher"
              ? "bg-blue-600 hover:bg-blue-700 cursor-pointer border-0 text-white"
              : "hover:bg-gray-300"
          } border-[1.5px] border-black p-3   cursor-pointer rounded-xl text-black font-bold`}
          onClick={() => setUser("Teacher")}
        >
          Teacher
        </button>
      </div>
      <h1 className="font-bold text-xl mt-2">Login as {user}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-start mt-4">
        <label htmlFor="">{user} Id</label>
        <input
          name="userid"
          type="text"
          className="rounded-xl border-1 border-black p-2"
          placeholder="enter the id"
          required
        />
        <label htmlFor="" className="mt-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="rounded-xl border-1 border-black p-2"
          placeholder="password"
          required
        />
        <button
          className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 cursor-pointer text-white font-bold w-full mt-4"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react'

const Login = () => {
  const [user,setUser]=useState('Student')
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-[24px] text-blue-500 mb-12' >Welcome to Student attandance<br></br> management login to proceed !</h1>
       <div className='flex flex-row gap-5  w-fit justify-stretch '>
        <button className={`${user=='Student'?'bg-blue-600 border-0 text-white':null}  border-[1.5px] border-black p-3 rounded-xl text-black font-bold`} onClick={()=>(setUser('Student'))}>Student</button>
        <button className={`${user=='Teacher'?'bg-blue-600 border-0 text-white':null} border-[1.5px] border-black p-3 rounded-xl text-black font-bold`} onClick={()=>(setUser('Teacher'))} >Teacher</button>
       </div>
       <h1 className='font-bold text-xl mt-2'>Login as {user}</h1>
       <form className='flex flex-col items-start mt-4'>
        <label htmlFor="">{user} Id</label>
        <input type='text' className='rounded-xl border-1 border-black p-2' placeholder='enter the id' required/> 
        <label htmlFor="" className='mt-2'>Password</label>
        <input type='password'  className='rounded-xl border-1 border-black p-2' placeholder='password' required/> 
        <button className='bg-blue-600 p-3 rounded-xl text-white font-bold w-full mt-4' type='submit'>Submit</button>

       </form>

    </div>
  )
}

export default Login

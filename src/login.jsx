// import React from 'react'
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

function Login() {
  const [name,setName]=useState();
  const [password,setPassword]=useState();
  const navigate =useNavigate();
  // const [expiresInMins,set]
  // const [email,setEmail]=useState();


  async function userLogin(){
    let item = {'username': name, 'password': password};
    // console.warn(JSON.stringify(item));
    let result = await fetch("https://dummyjson.com/auth/login",{
      method: 'POST',
      headers:{
        "content-Type":"application/json", 
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    
    });
    // console.log(result);
    result = await result.json();
    // console.warn("result",result);
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate("/AddProduct");
  }


  return (
    <div className="flex justify-center items-center p-1">
    <div className="flex justify-center items-center bg-slate-400 rounded-lg w-96">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 py-2 md:grid-cols-12 text-left">
             <div className="sm:col-span-12 flex justify-center items-center">
                <h2>Login</h2>
             </div>
            <div className="sm:col-span-12">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                User name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="username"
                  type="text"
                  placeholder="ENter Name"
                  value={name} onChange={(e)=>setName(e.target.value)}
                  autoComplete="name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-12">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="ENter password"
                  value={password} onChange={(e)=>setPassword(e.target.value)} 
                  autoComplete="password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <input type="hidden" name="expiresInMins" value={30} id="" />
            
            <div className="sm:col-span-12 flex justify-center items-center">
              <button onClick={userLogin} className="btn-primary text-black">Login</button>
            </div>
            
      </div>
    </div>
    </div>  )
}

export default Login
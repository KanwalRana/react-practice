// import React from 'react'
import { useState } from "react";
// import { useHistory } from 'react-router-dom';

function Register() {
  const [name,setName]=useState();
  const [password,setPassword]=useState();
  const [email,setEmail]=useState();
  // const history=useHistory();

  async function signUp(){
    let item = {'name': name, 'password': password, 'password_confirmation': password, 'email': email};
    // console.warn(JSON.stringify(item));
    let result = await fetch("http://127.0.0.1:8000/api/authregister",{
      method: 'POST',
      headers:{
        "content-Type":"application/json", 
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    
    });
    // console.log(result);
    result = await result.json();
    console.warn("result",result);  
    // localStorage.setItem("user-info",JSON.stringify(result));
    // history.push("/addProduct")
  }
  return (
    <div className="flex justify-center items-center p-1">
    <div className="flex justify-center items-center bg-slate-400 rounded-lg w-96">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 py-2 md:grid-cols-12 text-left">
             <div className="sm:col-span-12 flex justify-center items-center">
                <h2>SIGN UP</h2>
             </div>
            <div className="sm:col-span-12">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
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

            <div className="sm:col-span-12">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-12 flex justify-center items-center">
              <button onClick={signUp} className="btn-primary text-black">Sign Up</button>
            </div>
            
      </div>
    </div>
    </div>
  )
}

export default Register
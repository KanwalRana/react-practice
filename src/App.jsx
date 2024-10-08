// import React from 'react'
import Header from "./header"
// import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './addProduct'
import Login from './login'
import Register from './register'
import Update from './update'
// import Product from "./product"

function App() {
  // var [a,b] = useState(20);
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="bg-slate-950 w-screen h-screen text-white text-center">
        <div><h1>Welcome to React</h1></div>
        {/* <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veniam.</h3>
        <h2>{a}</h2>
        <button onClick={()=>b(a+1)} className="bg-orange-700 rounded-2xl px-3">Click</button> */}

        <BrowserRouter>
        <Routes>
          {/* <Route></Route> */}
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    
    </div>
    
  )
}

export default App
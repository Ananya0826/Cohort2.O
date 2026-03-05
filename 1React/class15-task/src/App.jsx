import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route ,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Products/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}
export default App

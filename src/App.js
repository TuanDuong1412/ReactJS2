import logo from './logo.svg';
import './App.css';
import React from "react";
// import photo1 from './photo1.jpg';
// import { base64Photo } from './Contant';
import Deleteicon from './Deleteicon';
import ImgList from './imglist';
import ThucHanh from './components/ThucHanh/thuchanh';
import { useRef } from 'react';
import Mycomponent from './Mycomponent';
import { RouterProvider } from 'react-router-dom';
import router from './router'
import Sum from './components/BaiTap/Sum';
import Clock from './components/BaiTap/Clock';
function App() {
  
  
  return (
    <div className="App">
      {/* <Sum></Sum> */}
      <Clock/>
    <RouterProvider router={router}></RouterProvider>
    
    </div>

   
  );
}

export default App;

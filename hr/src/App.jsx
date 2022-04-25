// import { useState } from 'react'
// import logo from './logo.svg'
import {Routes,Route} from "react-router-dom"
import './App.css'
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";

function App() {

  return (
  <div className="App">
  <Navbar/>
  <Routes>

  {/* <Route>
    
  </Route> */}
    <Route path= "/" element={<Home/>}></Route>
    <Route path="/employees" element={<EmployeeList/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>

    </div>
  );
  
}

export default App

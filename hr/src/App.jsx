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
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/employees" element={<EmployeeList />} />
      <Route exact path="/employees/:id" element={<EmployeeDetails />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/logout" element={<Logout />} />
    </Routes>
  </div>
);
  
}

export default App

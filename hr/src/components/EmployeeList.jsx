import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";


export const EmployeeList = () => {

  const[employees,setEmployees] = useState([]);

// fetch('http://localhost:8080/posts/')
//  .then(response => response.json())
//  .catch(error => console.error('Error:', error))
//  .then(response => console.log('Success:', JSON.stringify(response)));

    useEffect(()=>{

      axios.get("http://localhost:8080/posts/").then(({data})=>{
          setEmployees(data.posts)
      })

    },[]);


  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
        
      


      <div className="employee_card">
        <img className="employee_image" />
        <span className="employee_name"></span>
        <span className="employee_title"></span>
      </div>
    </div>
  );
};

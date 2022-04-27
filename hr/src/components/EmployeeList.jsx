import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const EmployeeList = () => {

  const[user,setUsers] = useState([]);

// fetch('http://localhost:8080/posts/')
//  .then(response => response.json())
//  .catch(error => console.error('Error:', error))
//  .then(response => console.log('Success:', JSON.stringify(response)));

useEffect(() => {
  axios.get("http://localhost:8080/employee").then(({ data }) => {
    setUsers(data);
  });
}, []);


  return (
    <div
    className="list_container"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "15px",
      padding: "18px",
    }}
  >
    {/* On clicking this card anywhere, user goes to user details */}
    {users.map((el, index) => {
      return (
        <div className="employee_card">
          <Link to={`/employees/${el.id}`}>
            <img className="employee_image" src={el.image} alt="" />
            <span className="employee_name">{el.employee_name}</span>
            <span className="employee_title">{el.title}</span>
          </Link>
        </div>
      );
    })}
  </div>
);
};

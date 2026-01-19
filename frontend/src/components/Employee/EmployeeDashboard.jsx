import React, { useEffect, useState } from "react";
import "./EmployeeDashboard.css";
import axios from "axios";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import AddEmployee from "./AddEmployee";

const EmployeeDashboard = () => {

  const[employeeData,setEmployeeData]=useState([]);
  const[isPopUpOpen,setIsPopUpOpen]=useState(false);

  useEffect(()=>{
    fetchEmployeeData();
  },[])

  const fetchEmployeeData=async()=>{
    try{
      const response=await axios.get("http://my-backend:8080/api/employee",{
        headers:{
          "Content-Type":"application/json"
        }
      });
      console.log("Employee Data", response.data);
      setEmployeeData(response.data);
    }catch(error){
      console.error("Error fetching employee data",error);
      
    }
  }
  return (
    <div className="employee-dashboard-main">
      <div className="employee-dashboard-inner">
        <div className="employee-dashboard-add-btn">
          <button onClick={()=>setIsPopUpOpen(true)} className="bg-orange-200">Add Employee</button>
        </div>
        <div className="employee-dashboard-table">
          <table className="table-data">
            <thead>
              <tr>
                <th>EMPLOYEE NAME</th>
                <th>EMPLOYEE ID</th>
                <th>EMPLOYEE EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.length>0 ? employeeData.map((each)=>(
                <tr key={each}>
                  <td>{each.name}</td>
                  <td>{each.employeeID}</td>
                  <td>{each.email}</td>
                </tr>
              )): (<tr>
                <td colSpan="4" style={{textAlign:"center"}}>No employee data found</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>

      {isPopUpOpen && 
      <ModalWrapper>
        <AddEmployee  setIsPopUpOpen={setIsPopUpOpen} fetchEmployeeData={fetchEmployeeData} />
        </ModalWrapper>}
    </div>
  );
};

export default EmployeeDashboard;

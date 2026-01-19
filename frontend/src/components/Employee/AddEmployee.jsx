import { cache, useState } from "react";
import "./AddEmployee.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = ({ setIsPopUpOpen,fetchEmployeeData }) => {

  const[formData,setFormData]=useState({
    name:'',
    email:'',
    employeeID:''
  })

  const[loading,setLoading]=useState(false);
  const handleChange=(e, name)=>{
    setFormData(prev=>({
      ...prev,
      [name]:e.target.value
    }))
  }

  const navigate=useNavigate();

  const handleSubmit= async()=>{
    if(loading) return;
    setLoading(true);
    try{
      await axios.post("http://my-backend:8080/api/employee",formData,{
        headers:{
          "Content-Type":"application/json"
        }
      });
      setIsPopUpOpen(false);
      fetchEmployeeData();
    }catch(error){
      console.error("Error submitting employee data",error);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="add-employee-dashboard">
      <div className="add-employee-headings">
        <h2>Add Employee</h2>
        <button onClick={() => setIsPopUpOpen(false)}>Close</button>
      </div>
      <div className="add-employee-main">
        <div className="add-employee-inner">
          <label htmlFor="">NAME</label>
          <input type="text" name="name" value={formData.name} onChange={(e)=> handleChange(e,"name")} />
        </div>
        <div className="add-employee-inner">
          <label htmlFor="">EMPLOYEE ID</label>
          <input type="text" name="employeeID" value={formData.employeeID} onChange={(e)=>handleChange(e,"employeeID")} />
        </div>
        <div className="add-employee-inner">
          <label htmlFor="">EMAIL</label>
          <input type="email" name="email" value={formData.email} onChange={(e)=>handleChange(e,"email")} />
        </div>
      </div>
      <button 
      onClick={handleSubmit}
      disabled={loading}
      className="add-btn">{loading?"Submitting...":"Submit"}</button>
    </div>
  );
};

export default AddEmployee;

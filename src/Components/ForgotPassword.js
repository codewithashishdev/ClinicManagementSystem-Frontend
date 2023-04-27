import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import axios  from 'axios';
import '../StyleSheets/Login.css'
import Logo from '../Images/Logo.png'
import Footer from "./Footer";
import DashboardFooter from "./DashboardFooter";


export default function ForgotPassword() {

  const [Email,setEmail] = useState("")
  const [UseType,setUseType] = useState("")
  const navigate = useNavigate()

  const  onChangeEmailAddress =(event)=>{
    setEmail(event.target.value)
  }
  const onChangeUserType = (event) => {
    setUseType(event.target.value)
  }
const onForgotPassword =() =>{
  
const email ={
  "user_type":UseType,
  "email":Email 
}

let data = JSON.stringify(email);
console.log(data)
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3001/auth/user/forgot-password',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  if(!(response.status === 200)){
    console.log(response.data.response)
  }else {
    navigate(-1)
    toast.success("Password Send Your Email",
      {position: toast.POSITION.TOP_RIGHT,
 })
}
})
.catch((error) => {
  console.log(error.response.data.error);
  toast.error(error.response.data.error,
    {position: toast.POSITION.TOP_RIGHT,
    })
});
}
  return (
<>
<nav className="navbar navbar-expand-lg navbar-custom fixed-top" id='nav' style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand bg-light text-primary">
          <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
 
        </a>
        <Link className="navbar-brand text-primary " to="/">ForgotPassword</Link>
      </div>
    </nav>
<div className="container"  style={{ marginTop: "6%" }}>

<div className="container text-center text-primary"><h3>ForgotPassword</h3></div>
        <form class=" container border border-secondary col-7 mx-my-3"id="Table">

     {/* userType */}
     <div className="mb-3 mx-5">
        Select Your Role*
          <select className="form-select" aria-label="Default select example"   value={UseType}  onChange={onChangeUserType}>
            <option value="">-Select Role-</option>
            <option value="Doctor">Doctor</option>
            <option value="Staff">Staff</option>
            <option value="Patient">Patient</option>
          </select>
        </div>

       {/* forgotpassword */}
        <div className="mb-3 mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
        Email Address
        </label>
        <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Email}onChange={onChangeEmailAddress}/>
        <div id="emailHelp" className="form-text"> Please Enter valid Email Address </div>
      </div>
      <div className="my-2">
        <button className="btn btn-primary mx-1 mx-5" onClick={onForgotPassword}><Link className="nav-link"> Send Otp</Link></button>
      </div>
      </form>
    </div>
    <div className="fixed-bottom">  <DashboardFooter/>
    </div> 
    </>
  );
}


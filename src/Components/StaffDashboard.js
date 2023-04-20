import React from 'react'
import {Link} from 'react-router-dom'
import axios from'axios'
import Logo from '../Images/Logo.png'
import '../StyleSheets/Dashboard.css'

export default function StaffDashboard() {



const onClickAppointmentList =() =>{
  let data = JSON.stringify({
    "patientId": 1
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/staff/appoitment/list',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}
  return (
    <>
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary"style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">

  <a className="navbar-brand navbar-light bg-light text-primary" to="/">
    <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo"/>
  </a>
    <Link className="navbar-brand text-primary " to="/staffdashboard">Dashboard  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item mx-2 " >
          <Link className="nav-link active text-primary" aria-current="page"  to="/staffdashboard/bookappointment">Book Appointment</Link>
        </li>
        <li className="nav-item mx-2 ">
          <Link className="nav-link text-primary"  to="/staffdashboard/appointmentlist"> Appointment List</Link>
        </li>
        {/* <li className="nav-item mx-2">
          <Link className="nav-link text-primary"to="/staffdashboard/createbill">Create Bill</Link>
        </li> */}
        <li className="nav-item mx-2">
          <Link className="nav-link text-primary"to="/staffdashboard/viewbill">View Bill</Link>
        </li>
        {/* <li className="nav-item mx-2">
          <Link className="nav-link text-primary"to="/staffdashboard/example">Example</Link>
        </li> */}
      </ul>
      <ul className="navbar-nav topnav-right">
      <li className="nav-item">
              <Link className="nav-link text-primary" to="/staffdashboard/changepassword">ChangePassword</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/"> LogOut</Link>
            </li>
          </ul>
    </div>
  </div>
</nav>


<div className ="bg-white">
      <div className="container-fluid bg-primary py-5 mb-5 hero-header" id='DashBoard'>
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5 className="d-inline-block text-uppercase "> This is Staff's Dashboard</h5>
              <h1 className="display-1  mb-md-4">Welcome To Clinic Management !</h1>
              <p className="display-6 mb-md-4">To smart and easy way to feedback, appointment and bill selection</p>
            </div>
          </div>
        </div>
   
    
</div>
</div>
    </div>
    </>
  )
}

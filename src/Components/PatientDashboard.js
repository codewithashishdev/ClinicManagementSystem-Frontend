import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppointmentLogo from '../Images/Appointment.jpg'
import Logo from '../Images/Logo.png'
import '../StyleSheets/Dashboard.css'




export default function PatientDashboard() {

  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand navbar-light bg-light text-primary">
          <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
        </a>
        <Link className="navbar-brand text-primary " to="/patientdashboard">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item mx-2" >
              <Link className="nav-link active text-primary" aria-current="page" to='/patientdashboard/bookappointment'>Book Appointment</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-primary " to="/patientdashboard/appointmentlist" > Appointment List</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-primary" to="/patientdashboard/viewbill">ViewBill</Link>
            </li>
          </ul>
          <ul className="navbar-nav topnav-right">
          <li className="nav-item mx-2">
              <Link className="nav-link text-primary " to="/patientdashboard/changepassword"> ChangePassword</Link>
            </li>
            <li className="nav-item  mx-2">
              <Link className="nav-link text-danger " to="/"> LogOut</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
      <div className="bg-white">
        <div className="container-fluid bg-primary py-5 hero-header" id="DashBoard">
     
          <div className="container py-5">
            <div className="row justify-content-start">
              <div className="col-lg-8 text-center text-lg-start">
                <h5 className="d-inline-block  text-uppercase "><ins>Patient's Dashboard</ins> </h5>
                <h1 className="display-1  mb-md-4">Welcome To Clinic Management !</h1>
                <p className="mb-md-4 display-6">To smart and easy way to feedback, appointment and bill selection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    <div className="container-fluid my-5 py-5 ">
        <div className="container py-5  ">
            <div className="row gx-5">
            <div class="col-12 col-sm-5 h-100">
               <img className="img-fluid h-100 object-fit-contain border rounded" src={AppointmentLogo}/>
           </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="d-inline-block  text-uppercase border-bottom border-5">Appointment</h5>
                        <h1 className="display-4">Make An Appointment For Your Family</h1>
                    </div>
                    <p className="mb-5">This App Make your Appointment Easy And Simple To Save Your Time </p>
                    <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/patientdashboard/bookappointment">Make Appointments</Link>
                    <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/patientdashboard/viewbill">View Bills </Link>
                </div>
            </div>
        </div>
    </div>

  </>
  )
}

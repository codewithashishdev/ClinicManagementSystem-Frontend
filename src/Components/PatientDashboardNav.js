import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppointmentLogo from '../Images/Appointment.jpg'
import Logo from '../Images/Logo.png'
import '../StyleSheets/Dashboard.css'
import DashboardFooter from "./DashboardFooter";

export default function PatientDashboardNav() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg  fixed-top" id='nav' style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand bg-light text-primary">
          <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
        </a>
        <Link className="navbar-brand text-primary " to="/patientdashboard">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item mx-2" >
              <Link className="nav-link active text-primary"  aria-current="page" to='/patientdashboard/bookappointment'>Book Appointment</Link>
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
    </div>
  )
}

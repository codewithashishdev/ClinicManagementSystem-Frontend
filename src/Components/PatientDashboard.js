import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookAppointment from "./BookAppointment";
export default function PatientDashboard(props) {
  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/patientdashboard">Dashboard  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item mx-2" >
          <Link className="nav-link active" aria-current="page"  to="/patientdashboard/bookappointment">Book Appointment</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/patientdashboard/appointmentlist" > Appointment List</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link "to="/patientdashboard/viewbill">View Bill</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/">LogOut</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
<div className="container my-3">
  <h2>This is a patient's Dashboard</h2>
</div>

</>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

export default function StaffDashboard() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary"  style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/staffdashboard">Dashboard  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item mx-2" >
          <Link className="nav-link active" aria-current="page"  to="/staffdashboard/bookappointment">Book Appointment</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/staffdashboard/appointmentlist"> Appointment List</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link "to="/staffdashboard/createbill">Create Bill</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/">LogOut</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
<div className="container my-3">
  <h2>This is a staff's Dashboard</h2>
</div>
    </div>
  )
}

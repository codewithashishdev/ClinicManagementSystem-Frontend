import React,{useEffect, useState} from 'react'
import axios from 'axios';
import{Link} from 'react-router-dom'
import Logo from '../Images/Logo.png'
import '../StyleSheets/AppointmentList.css'

export default function StaffAppointmentList() {
    const [AppointmentList,setAppointmentList] = useState([])

    useEffect(()=>{
      let data = '';
  
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3001/patient/appoitment/list',
        headers: { },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log('response.data.data',response.data.data)
        setAppointmentList(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
   console.log('Appointment:',AppointmentList)


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light main-navigation" id='nav' style={{ backgroundColor: "#e3f2fd" }}>
    <div className="container-fluid">
      <a className="navbar-brand navbar-light bg-light text-primary">
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
      </a>
      <Link className="navbar-brand text-primary " to="/staffdashboard">Dashboard</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item mx-2" >
            <Link className="nav-link active text-primary"  aria-current="page" to='/staffdashboard/bookappointment'>Book Appointment</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-primary " to="/staffdashboard/appointmentlist" > Appointment List</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-primary" to="/staffdashboard/viewbill">ViewBill</Link>
          </li>
        </ul>
        <ul className="navbar-nav topnav-right">
          <li className="nav-item  mx-2">
            <Link className="nav-link text-danger " to="/"> LogOut</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <div className ="th" style={{marginTop:"50px"}}>
    <table className='table'>
      <thead>
        <tr className='tr'>
          <th className ="th" style={{textAlign:'center'}}>PatientID</th>
          <th className ="th" style={{textAlign:'center'}}>Time</th>
          <th className ="th" style={{textAlign:'center'}}>Date</th>
          <th className ="th" style={{textAlign:'center'}}>DoctorID</th>
          <th className ="th" style={{textAlign:'center'}}>Dieases</th>
          <th className ="th" style={{textAlign:'center'}}>createdAt</th>
          <th className ="th" style={{textAlign:'center'}}>updatedAt</th>
          <th className ="th" style={{textAlign:'center'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {AppointmentList.map((item,index)=>{
          return(
            <tr key={item.patientID}>
              <th scope='row'>{index+1}</th>
              <td className ="td">{item.time}</td>
              <td className ="td">{item.date}</td>
              <td className ="td">{item.doctorID}</td>
              <td className ="td">{item.disease}</td>
              <td className ="td" >{item.createdAt}</td>
              <td className ="td">{item.updatedAt}</td>
              <td>
                <Link to={`/staffdashboard/createbill`}>
                  <button className='btn btn-edit'>Createbill</button>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>

  
    </>
  )
}

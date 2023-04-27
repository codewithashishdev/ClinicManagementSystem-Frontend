import React,{useEffect, useState} from 'react'
import axios from 'axios';
import{Link, useParams} from 'react-router-dom'
import '../StyleSheets/AppointmentList.css'
import BillDetail from './BillDetail';
import Logo from '../Images/Logo.png'
import DashboardFooter from './DashboardFooter';

export default function ViewAppointmentStaff() {

  const [Bill,setBill] =useState([])

  useEffect(()=>{
    let data = '';  
    

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/staff/bill/list',
      headers: { },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log('response.data.data',response.data.data)
      setBill(response.data.data)
      localStorage.setItem('Bill',JSON.stringify(response.data.data))
    })
    .catch((error) => {
      console.log(error);
    });
},[])
 console.log('Bill:',Bill)
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


   {/* <h3  className=' text-primary mx-5'>
  <ins>BillList</ins>
  </h3>   */}
  <div className ="th" style={{marginTop:"50px"}}>
    <table className='table'>
      <thead>
        <tr className='tr'>
          <th className ="th" style={{textAlign:'center'}}>Patient ID</th>
          <th className ="th" style={{textAlign:'center'}}>Appointment ID</th>
          <th className ="th" style={{textAlign:'center'}}> Appointment Date</th>
          <th className ="th" style={{textAlign:'center'}}>Medicine</th>
          <th className ="th" style={{textAlign:'center'}}>Unit Price</th>
          <th className ="th" style={{textAlign:'center'}}>Number of Unit</th>
          <th className ="th" style={{textAlign:'center'}}> Total Amount</th>
          <th className ="th" style={{textAlign:'center'}}>Payment Type </th>
          <th className ="th" style={{textAlign:'center'}}>Payment Status </th>
          <th className ="th" style={{textAlign:'center'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Bill.map((item,index)=>{

          return(
            <tr key={item.patientID}>
               
              <th scope='row'>{index+1}</th>
              <td className ="td">{item.appointmentID}</td>
              <td className ="td">{item.date}</td>
              <td className ="td">{item.Medicine}</td>
              <td className ="td">{item.unitPrice}</td>
              <td className ="td">{item.Numberofunit}</td>
              <td className ="td">{item.TotalAmount}</td>
              <td className ="td">{item.Payment_type}</td>
              <td className ="td">{item.payment_status}</td>
              <td>
                <Link to={`/staffdashboard/viewbill/${item.patientID}`}>
                  <button className='btn btn-edit'>Details</button>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>

  </div>
  <div className=' fixed-bottom'>
<DashboardFooter/>
</div>
  </>

  )
}

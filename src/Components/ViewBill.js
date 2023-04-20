import React,{useEffect, useState} from 'react'
import axios from 'axios';
import{Link} from 'react-router-dom'
import '../StyleSheets/AppointmentList.css'


export default function ViewBill() {

  const[Bill,setBill] =useState([])
  
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
    })
    .catch((error) => {
      console.log(error);
    });
},[])
 console.log('Bill:',Bill)
  return (
  <>
   <h3  className=' text-primary mx-5'>
  <ins>BillList</ins>
  </h3>  
  <div className ="th" style={{marginTop:"150px"}}>
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
          <th className ="th" style={{textAlign:'center'}}>createdAt</th>
          <th className ="th" style={{textAlign:'center'}}>updatedAt</th>
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
              <td className ="td" >{item.createdAt}</td>
              <td className ="td">{item.updatedAt}</td>
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
  </>

  )
}

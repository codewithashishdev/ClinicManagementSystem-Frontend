import React,{useEffect, useState} from 'react'
import axios from 'axios';
import{Link} from 'react-router-dom'
import '../StyleSheets/AppointmentList.css'

export default function DoctorAppointmentList() {
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
    <div>
      <div>
  <h3  className=' text-primary mx-5'>
  <ins>AppointmentList</ins>
  </h3>  
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
                <Link to={`/doctordashboard/addfeedback`}>
                  <button className='btn btn-edit'>Prescription</button>
                </Link>

              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

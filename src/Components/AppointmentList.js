import React,{useEffect, useState} from 'react'
import axios from 'axios';
import{Link} from 'react-router-dom'
export default function AppointmentList() {
    const [PatientID,setPatientID] =useState("");
    const [data ,setdata] = useState([]);
    const onChangePatientID =(event) =>{
        setPatientID(event.target.value)
    }
    const onClickViewAppointment =(event) =>{
        console.log({"patientID":PatientID})
        const data = JSON.stringify({
            "patientId": 1
          })
console.log('data:',data)
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:3001/patient/appoitment/list',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
}
  return (
<div>
  <h3  className=' text-primary mx-5'>
  <ins>AppointmentList</ins>

</h3>  
<nav className="navbar navbar-light bg-primary">
  <form className="form bg-primary form-inline">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">PatientID :</span>
      </div>
      <input type="number" className="form-control mx-2" placeholder="PatientID" aria-label="PatientID" aria-describedby="basic-addon1"/>
      <button class="btn btn-outline-primary bg-white" type="button">
      <Link className="nav-link"> View </Link> </button>
    </div>
  </form>
</nav>
</div>
  )
}

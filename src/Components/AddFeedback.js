import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Logo from '../Images/Logo.png'
import '../StyleSheets/Login.css'

export default function AddFeedback() {
  
   
  const [FeedbackID, setFeedbackID] = useState("");
  const [PatientID, setPatientID] = useState("");
  const [AppointmentID, setAppointmentID] = useState("");
  const [Medicine, setMedicine] = useState("");  
  const [date, setDate] = useState("");
  const [Discription, setDiscription] = useState("");
  const [DoctorID, setDoctorID] = useState("");
  const dateInputRef = useRef(null);



  const onChangeFeedbackID = (event)=>{
    setFeedbackID(event.target.value)
  }
  const onChangePatientID = (event)=>{
    setPatientID(event.target.value)
  }
  const onChangeAppointmentID = (event)=>{
    setAppointmentID(event.target.value)
  }
  const onChangeMedicine = (event)=>{
    setMedicine(event.target.value)
  }
  const handleChange = (event) => {
    setDate(event.target.value);
  };
  const onChangeDiscription = (event)=>{
    setDiscription(event.target.value)
  }
  const onChangeDoctorID = (event)=>{
    setDoctorID(event.target.value)
  }
//onclickfeedback
  const CreateFeedback =(event)=>{
    let data = {
      "feedbackID": FeedbackID,
      "patientID": PatientID,
      "appointmentID": AppointmentID,
      "medicine": Medicine,
      "date": date,
      "diecription": Discription,
      "doctorID":DoctorID
    };
console.log(data)

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3001/doctor/doctor/checkup-feedback',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  if(!(response.status === 201)){
    console.log('any field is not fill')
  }else {
    window.location.href ='http://localhost:3000/doctordashboard'
}
})
.catch((error) => {
  console.log(error);
});
  }
  return (
    <div>
                  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <Link className="navbar-brand navbar-light bg-light text-primary" to="/doctordashboard">
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          </Link>
          <Link className="navbar-brand text-primary" to="/doctordashboard">Dashboard  </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* <li className="nav-item mx-2" >
                <Link className="nav-link active text-primary" aria-current="page" to="/doctordashboard/addfeedback">Add FeedBack</Link>
              </li> */}
              <li className="nav-item mx-2">
                <Link className="nav-link text-primary" to="/doctordashboard/appointmentlist"> Appointment List/ Feedback</Link>
              </li>
            </ul>
            <ul className="navbar-nav topnav-right">
            <li className="nav-item">
                <Link className="nav-link text-primary" to="/doctordashboard/changepassword">ChangePassword</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/"> LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div className="container my-10 mx-10">

        <form class=" container border border-secondary col-6 mx-my-3 mt-4" id="Table">
      
        {/* appoitment  */}
        <div className="mb-3 mx-5">
          <label htmlFor="FeedbackID" className="form-label" >  FeedbackID* </label>
          <input type="number" className="form-control" id="FeedbackID" value={FeedbackID} onChange={onChangeFeedbackID}/>
        </div>
       {/* PatientID  */}
        <div className="mb-3 mx-5">
          <label htmlFor="PatientID" className="form-label">   PatientID*  </label>
          <input type="number" className="form-control" id="PatientID"  value ={PatientID} onChange={onChangePatientID}/>
        </div>
        {/* DoctorId  */}
        <div className="mb-3 mx-5">
          <label htmlFor="AppointmentID" className="form-label" >  DoctorID* </label>
          <input type="number" className="form-control" id="AppointmentID" value ={DoctorID} onChange={onChangeDoctorID}/>
        </div>
        {/* Appointment */}
        <div className="mb-3 mx-5">
          <label htmlFor="AppointmentID" className="form-label" >   AppointmentID*  </label>
          <input type="number" className="form-control" id="AppointmentID" value ={AppointmentID} onChange={onChangeAppointmentID}/>
        </div>
        {/* medicine */}
        <div className="mb-3 mx-5">
          <label htmlFor="address" className="form-label" >  Medicine* </label>
          <textarea className="form-control" id="address" rows="3" value ={Medicine} onChange={onChangeMedicine}></textarea>
        </div>
        {/* date picker */}
        <div className="my-2 mb-3 mx-5">
          <p>Date* {date}</p>
          <input type="date" onChange={handleChange} ref={dateInputRef} value ={date} />
        </div>
        {/* dicription */}
        <div className="mb-3 mx-5">
          <label htmlFor="address" className="form-label" > Discription*  </label>
          <textarea className="form-control" id="address" rows="3" value ={Discription} onChange={onChangeDiscription}></textarea>
        </div>
        {/* add feedback */}
        <div className="mb-3 mx-5">
          <button type="submit" className="btn btn-primary mx-1 my-2">
            <Link  className="nav-link"  id="addfeedback" onClick={CreateFeedback}>Submit  </Link>
          </button>
        </div>
       </form>
      </div>
    </div>
  );
}

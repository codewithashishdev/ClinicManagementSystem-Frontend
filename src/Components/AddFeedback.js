import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
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
      <div className="container my-5 mx-5">
        <form class=" container border border-secondary col-6 mx-my-3" id="Table">
        <h3 className="text-primary"><ins>Prescription</ins> </h3>
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

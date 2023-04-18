import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios  from 'axios';
export default function BookAppointment() {


  const [PatientID,setPatientID] =useState("")
  const [date, setDate] = useState("");
  const [time, settime] = useState("");
  const [DoctorID, setDoctorID] = useState("");
  const [IsActive, setIsActive] = useState("");
  const [IsDeleted, setIsDeleted] = useState("");
  const [CreateBy, setCreateBy] = useState("");
  const [Dieases, setDieases] = useState("");
  
  const onChangePatientID =(event) =>{
    setPatientID(event.target.value)
  }
  const onChangedate =(event) =>{
    setDate(event.target.value)
  }
const onChangetime =(event) =>{
  settime(event.target.value)
}
const onChangeDoctorID =(event) =>{
  setDoctorID(event.target.value)
}
const onChangeIsActive =(event) =>{
  setIsActive(event.target.value)
}
const onChangeIsDeleted =(event) =>{
  setIsDeleted(event.target.value)
}
const onChangeCreateBy =(event) =>{
  setCreateBy(event.target.value)
}
const onChangeDieases =(event) =>{
  setDieases(event.target.value)
}

const dateInputRef = useRef(null);
const handleChange = (event) => {
  setDate(event.target.value);
};
const handleChangetime =(event)=>{
  settime(event.target.value);
}

const bookAppointment = async(event) => {
  console.log("patientId",PatientID)
  console.log('date',date,typeof date)
  console.log('time',time,typeof time)
  console.log('Create by',CreateBy)
  console.log('doctorId',DoctorID)
  console.log('cratedby',IsActive)
  console.log('deletedby',IsDeleted)
  console.log('Dieases',Dieases)

let Appointment ={
  "patientID" :PatientID,
  "time": time,
  "date": date,
  "doctorID": DoctorID,
  "create_by":CreateBy,
  "disease":Dieases,
  "is_active":IsActive,
  "is_deleted":IsDeleted
}

let data = JSON.stringify(Appointment);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3001/patient/patient/appoitnment',
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
    window.location.href ='http://localhost:3000/staffdashboard'
}
})
.catch((error) => {
  console.log(error);
});
}
 
  return (
    <div className="container my-5 mx-5">
      <form class=" container border border-secondary col-6 mx-my-3" >
      <h3 className="text-primary"><ins> Book Appointment</ins></h3>
        
    {/* PatientID  */}
    <div className="mb-3 mx-5">
        <label htmlFor="PatientID" className="form-label"> PatientID* </label>
        <input type="number" className="form-control" id="PatientID" value={PatientID} onChange={onChangePatientID}/>
      </div>
      {/* appoitment date  */}
      <div className="my-2 mb-3 mx-5">
        <p>Appointment Date* {date}</p>
        <input type="date"className="form-control" onChange={handleChange} onSelect={onChangedate} />
      </div>
      {/* Appointment time */}
      <div className="my-2 mb-3 mx-5">
        <p>Appointment Time* {time}</p>
        <input type="time"className="form-control"onChange={handleChangetime} onSelect={onChangetime} />
      </div>
        {/* userType */}
        <div className="my-2 mx-5">
         <label htmlFor="select"> Create By*</label>
          <select className="form-select " aria-label="Default select example" value={CreateBy}  onChange={onChangeCreateBy}>
            <option defaultValue>--select Role--</option>
            <option value="doctor">Doctor</option>
            <option value="staff">staff</option>
            <option value="patient">patient</option>
          </select>
        </div>
      {/* PatientID  */}
    <div className="mb-3 mx-5">
        <label htmlFor="PatientID" className="form-label">  DoctorID*</label>
        <input type="number" className="form-control" id="PatientID" value={DoctorID} onChange={onChangeDoctorID}/>
      </div>
          {/* Dieases */}
      <div className="mb-3 mx-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">  Dieases*</label>
        <textarea  className="form-control" id="exampleFormControlTextarea1"  rows="3"  value={Dieases}  onChange={onChangeDieases}></textarea>
      </div>
    {/* is active */}
    <div className="mb-3 mx-5">
      <label htmlFor="Active Appointment" > Active Appointment* </label>
      <select id="Status"  name="Status"  className="form-select "  value={IsActive}  onChange={onChangeIsActive}>
        <option value="">--Select Status--</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>
       {/* is Deleted */}
       <div className="mb-3 mx-5">
      <label htmlFor="Active Appointment" > Deleted*</label>
      <select  id="Status"  name="Status" className="form-select " value={IsDeleted}   onChange={onChangeIsDeleted} >
        <option value="">--Select Status--</option>
        <option value={false}>No</option>
        <option value={true}>Yes</option>
         </select>
        </div>
       {/* book Appointment buttons */}
          <div className="my-2 mb-3 mx-5">
          <button className="btn btn-primary mx-1">
            <Link className="nav-link" onClick={bookAppointment}> Create  </Link>
          </button>
        </div>
        </form>
    </div>
    
  );
}

import React, { useState, useRef } from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'
import "../StyleSheets/Login.css";



export default function CreateBill() {


  const [PatientID,setPatientID] =useState("")
  const [AppointmentID,setAppointmentID] =useState("")
  const [Medicine, setMedicine] = useState("");
  const [Dicription, setDicription] = useState("");
  const [UnitPrice, setUnitPrice] = useState("");
  const [NumberOfUnit, setNumberOfUnit] = useState("");
  const [Amount, setAmount] = useState("");
  const [TotalAmount, setTotalAmount] = useState("");
  const [PaymentMethod, setPaymentMethod] = useState("");
  const [PaymentStatus , setPayemntStatus] = useState("");
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

const onChangePatientID =(event)=>{
  setPatientID(event.target.value)
}
const onChangeAppointmentID =(event)=>{
  setAppointmentID(event.target.value)
}
const onChangeMedicine=(event)=>{
  setMedicine(event.target.value)
}
const onChangeDicription =(event)=>{
  setDicription(event.target.value)
}
const onChangeUnitPrice =(event)=>{
  setUnitPrice(event.target.value)
}
const onChangeNumberOfUnit =(event)=>{
  setNumberOfUnit(event.target.value)
}
const onChangeAmount =(event)=>{
  setAmount(event.target.value)
}
const onChangeTotalAmount =(event)=>{
  setTotalAmount(event.target.value)
}
const onChangePaymentMethod =(event)=>{
  setPaymentMethod(event.target.value)
}
const onChangePaymentStatus =(event)=>{
  setPayemntStatus(event.target.value)
}
const handleChange = (event) => {
  setDate(event.target.value);
};

const onClickCreateBill =(event)=>{
  let Bill = {
    "patientID": PatientID,
    "appointmentID": AppointmentID,
    "Medicine": Medicine,
    "date": date,
    "discription": Dicription,
    "unitPrice": UnitPrice,
    "Numberofunit": NumberOfUnit,
    "Amount": Amount,
    "TotalAmount": TotalAmount,
    "Payment_type": PaymentMethod,
    "payment_status": PaymentStatus
  }
  console.log("data",Bill)
  let data = JSON.stringify(Bill);
  console.log(data)
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3001/staff/patient/bill',
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
    <>
    <div className="container my-5 mx-5">
    <form class=" container border border-secondary col-6 mx-my-3" id='Table' >
      <h3 className="text-primary"><ins> Create Bill</ins></h3> 
      {/* PatientID  */}
      <div className="mb-3 mx-5">
        <label htmlFor="PatientID" className="form-label">  PatientID* </label>
        <input type="number" className="form-control" id="PatientID" value={PatientID} onChange={onChangePatientID}/>
      </div>
      {/* AppointmentID */}
      <div className="mb-3 mx-5">
        <label htmlFor="AppointmentID" className="form-label">  AppointmentID* </label>
        <input type="number" className="form-control" id="AppointmentID"value={AppointmentID}onChange={onChangeAppointmentID} />
      </div>
      {/* medicine */}
      <div className="mb-3 mx-5">
        <label htmlFor="address" className="form-label">  Medicine* </label>
        <textarea className="form-control" id="address" rows="3"value={Medicine} onChange={onChangeMedicine}/>
      </div>
      {/* date picker */}
      <div className="my-2 mb-3 mx-5"> <p>Date* {date}</p>
        <input type="date" onChange={handleChange} ref={dateInputRef} />
      </div>
      {/* dicription */}
      <div className="mb-3 mx-5">
        <label htmlFor="address" className="form-label">  Discription* </label>
        <textarea className="form-control" id="address" rows="3" value={Dicription} onChange={onChangeDicription}/>
      </div>
       {/* unit price */}
       <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label">  Unit Price* </label>
        <input type="number" className="form-control" id="UnitPrice"value={UnitPrice} onChange={onChangeUnitPrice}/>
      </div>
       {/* number of unit*/}
       <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label"> number of unit* </label>
        <input type="number" className="form-control" id="NumberOfUnit"value={NumberOfUnit} onChange={onChangeNumberOfUnit}/>
      </div>
         {/* Amount*/}
         <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label"> Amount*</label>
        <input type="number" className="form-control" id="Amount"value={Amount} onChange={onChangeAmount}/>
      </div>
       {/* Total Amount*/}
       <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label"> Total Amount* </label>
        <input type="number" className="form-control" id="TotalAmount"value={TotalAmount} onChange={onChangeTotalAmount}/>
      </div>
         {/* Payment Method */}
         <div className="mb-3 mx-5">
            <div className="mb-2">Select Your Payment Method*</div>
            <select className="form-select mb-3"aria-label="Default select example" value={PaymentMethod} onChange={onChangePaymentMethod}>
              <option defaultValue>--Payment Method--</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
          </div>
      {/* status Bil */}
      <div className="mb-3 mx-5"> Payment Status*
          <div className="form-check ">
            <input  type="radio"  name="paymentStatus" value="No"id="No" checked={PaymentStatus === "No"} onChange={onChangePaymentStatus}/>
            <label  htmlFor="No"> No </label>
          </div>
          <div className="form-check">
            <input  type="radio"name="paymentStatus"value="Yes" id="Yes" checked={PaymentStatus === "Yes"} onChange={onChangePaymentStatus}/>
            <label htmlFor="Yes">Yes </label>
          </div>
        </div>
      {/* add feedback */}
      <div className="mb-3 mx-5">
        <button type="submit" className="btn btn-primary mx-1 my-2">
          <Link className="nav-link"  id="addfeedback" onClick={onClickCreateBill}> Submit</Link>
        </button>
        <button type="submit" className="btn btn-primary mx-1 my-2">
          <Link className="nav-link"  id="addfeedback" to ="/staffdashboard"> Back</Link>
        </button>
      </div>
  </form>
    </div>
  </>
  )
}

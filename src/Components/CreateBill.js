import React, { useState, useRef } from 'react'
import{Link} from 'react-router-dom'

export default function CreateBill() {

    const [date, setDate] = useState("");
    const dateInputRef = useRef(null);
  
    const handleChange = (e) => {
      setDate(e.target.value);
    };
  
  return (
    <div>
    <div className="container my-5 mx-5">
      <h3 className="text-primary"> Create Bill</h3>
      <hr />

      {/* PatientID  */}
      <div className="mb-3 mx-5">
        <label htmlFor="PatientID" className="form-label">
          PatientID*
        </label>
        <input type="number" className="form-control" id="PatientID" />
      </div>
      {/* Appointment */}
      <div className="mb-3 mx-5">
        <label htmlFor="AppointmentID" className="form-label">
          AppointmentID*
        </label>
        <input type="number" className="form-control" id="AppointmentID" />
      </div>
      {/* medicine */}
      <div className="mb-3 mx-5">
        <label htmlFor="address" className="form-label">
          Medicine*
        </label>
        <textarea className="form-control" id="address" rows="3"></textarea>
      </div>
      {/* date picker */}
      <div className="my-2 mb-3 mx-5">
        <p>Date* {date}</p>
        <input type="date" onChange={handleChange} ref={dateInputRef} />
      </div>
      {/* dicription */}
      <div className="mb-3 mx-5">
        <label htmlFor="address" className="form-label">
          Discription*
        </label>
        <textarea className="form-control" id="address" rows="3"></textarea>
      </div>
       {/* unit of number */}
       <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label">
          Unit Price*
        </label>
        <input type="number" className="form-control" id="AppoinUnittmentID" />
      </div>
       {/* number of unit*/}
       <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label">
        number of unit*
        </label>
        <input type="number" className="form-control" id="AppoinUnittmentID" />
      </div>
         {/* number of unit*/}
         <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label">
        Amount*
        </label>
        <input type="number" className="form-control" id="AppoinUnittmentID" />
      </div>
       {/* number of unit*/}
       <div className="mb-3 mx-5">
        <label htmlFor="Unit" className="form-label">
        Total Amount*
        </label>
        <input type="number" className="form-control" id="AppoinUnittmentID" />
      </div>
         {/* Payment type */}
         {/* userType */}
         <div className="col px-md-5">
            <div className="mb-2">Select Your Payment Method*</div>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option defaultValue>--Payment Method--</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
          </div>
   
      {/* status Bil */}
      {/* gender */}
      <div className="mb-3 mx-5">
         Payment Status*
          <div className="form-check ">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="gender"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
           No
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="male"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Yes
            </label>
          </div>
      
        </div>
      {/* add feedback */}
      <div className="mb-3 mx-5">
        <button type="submit" className="btn btn-primary mx-1 my-2">
          <Link
            className="nav-link"
            id="addfeedback"
            to="/staffdashboard"
          
          >
              Create Bill
          </Link>
        </button>
      </div>
      {/*  */}
    </div>
  </div>
  )
}

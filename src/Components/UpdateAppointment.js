import React,{ useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function UpdateAppointment() {
    const [date, setDate] = useState("");
    const dateInputRef = useRef(null);
  
    const handleChange = (e) => {
      setDate(e.target.value);
    };
  return (
    <div className="container my-5">
      <h3 className="text-primary"> Book Appointment</h3>
      {/* appoitment  */}
      <div class="mb-3 ">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      {/* appoitment date  */}
      <div className="my-2">
        <p>Appointment Date {date}</p>
        <input type="date" onChange={handleChange} ref={dateInputRef} />
      </div>
      {/* Appointment time */}
      <div className="my-2">
        <label for="appt" class="form-label">Choose A Time For Your Check Up</label>

        <div>
          <input
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
          />
        </div>

        <small>Docotor available time is hours are 9am to 6pm</small>
      </div>
        {/* userType */}
        <div className="my-2">
          Create By
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>--select Role--</option>
            <option value="doctor">Doctor</option>
            <option value="staff">staff</option>
            <option value="patient">patient</option>
          </select>
        </div>
      {/*  */}
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Dieases
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
          {/* sigup buttons */}
          <div className="my-2">
          <button className="btn btn-primary mx-1">
            <Link className="nav-link" to="/dashboard">
             Update
            </Link>
          </button>
        </div>
    </div>
  );
}

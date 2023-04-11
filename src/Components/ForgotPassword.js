import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios  from 'axios';

export default function ForgotPassword() {

  const [Email,setEmail] = useState("")

  const  onChangeEmailAddress =(event)=>{
    setEmail(event.target.value)
  }
const onForgotPassword =() =>{
console.log(Email)
const email ={"email":Email}


let data = JSON.stringify(email);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3001/auth/user/forgot-password',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  if(!(response.status === 200)){
    console.log('any field is not fill')
  }else {
    window.location.href ='http://localhost:3000'
}
})
.catch((error) => {
  console.log(error);
});
}

  return (
    <div className="container my-5 mx-5">
      <div className="text-primary text-uppercase">
        <h3>Forgot Password</h3>
      </div>
      <div className="mb-3 mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
        Email Address
        </label>
        <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Email}onChange={onChangeEmailAddress}/>
        <div id="emailHelp" className="form-text"> Please Enter valid Email Address </div>
      </div>
      <div className="my-2">
        <button className="btn btn-primary mx-1 mx-5" onClick={onForgotPassword}><Link className="nav-link"> Send Otp</Link></button>
      </div>
    </div>
  );
}


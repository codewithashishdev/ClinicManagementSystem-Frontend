import React, { state, useState,useEffect ,useRef} from "react";
import "../StyleSheets/Login.css";
import axios from'axios'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";

export default function Login(props) {

  const [UserType, setuserType] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
 
  const onChangeUserType =(event)=>{
    setuserType(event.target.value)
  }

  const onChangeEmailAddress =(event)=>{
    setEmail(event.target.value)
  }

  const onChangePassword =(event)=>{
    setPassword(event.target.value)
  }

 const saveUser = async(event) => {
  const User ={user_type: UserType ,email:Email,password:Password}
 
  let data = JSON.stringify(User);
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3001/auth/user/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    if(!(response.status === 200)){
        const errorData =response.json();
        setErrors(errorData.errors)
      }else {
        if ( User.user_type === 'Patient') {
          console.log(User.user_type)
          window.location.href ='http://localhost:3000/patientdashboard'
        } else if (User.user_type === 'Doctor') {
          window.location.href ='http://localhost:3000/doctordashboard'
        } else if(User.user_type==='Staff') {
          window.location.href ='http://localhost:3000/staffdashboard'
        }
      }
  })
  .catch((error) => {
    console.log(error);
  });
 }
  return (
    <>
      <div className="container me-5 " style={{ marginTop: "2%" }}>
        <h3 className="text-primary text-uppercase mb-3">Login</h3>
        <form >
          <div>
            <hr />
                 {/* userType */}
            <div className="col px-md-5">
              <div className="mb-2">Select Your Role*</div>
            <select className="form-select mb-3"aria-label="Default select example"value={UserType} onChange={onChangeUserType}>
                <option defaultValue value="">-Select Role-</option>
                <option value='Doctor'> Doctor </option>
                <option value='Staff'>Staff</option>
                <option value='Patient'>Patient</option>
              </select>
             </div>
                {/* Email Address */}
            <div className="mb-3 col px-md-5">
              <label htmlFor="exampleInputEmail1" className="form-label"> Email Address*</label>
              <input type="text" className="form-control"id="exampleInputEmail1"aria-describedby="emailHelp"placeholder="name@example.com"value={Email} onChange={onChangeEmailAddress}/>
               </div>
                {/* Password */}
            <div className="mb-3 col px-md-5">
              <label htmlFor="exampleInputPassword1" className="form-label"> Password*</label>
              <input type="password"className="form-control"id="exampleInputPassword1" value={Password}placeholder="password" onChange={onChangePassword}/>
            </div>
                 {/*forgot Password */}
            <p className="mb-3 col px-md-5">
              <Link className="link-opacity-75-hover mb-3" to="/forgotpassword">ForgotPassword?</Link>
            </p>
                  {/* Login */}
            <div className="col px-md-5">
              <button type="submit" className="btn btn-primary mx-1 my-2">
                <Link className="nav-link" id="login"onClick={saveUser}>Login</Link>
              </button>
              {/* signUp */}
              <div> If you Have not a Account</div>  
              <Link className="link-opacity-75-hover mb-3" id="signup" to="/signup"> SignUp</Link>
            </div>
            <hr />
          </div>
        </form>
      </div>
    </>
  );
}







// {errors && (
//   <ul>
//  {errors.map((error, index) => (
//   <li key={index}>{error.msg}</li>
//   ))}
// </ul>
//     )}

// event.preventDefault()

// const User ={user_type: UserType ,email:Email,password:Password}
// const response = await fetch('http://localhost:3001/auth/user/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(User),
// })
// console.log(response.json())
// if(!(response.status === 200)){
//   const errorData =response.json();
//   setErrors(errorData.errors)
// }else {
//   setErrors([]);
//   const userData = await response.json();
//   if ( User.user_type=== 'Patient') {
//     history.push('http://localhost:3000/patientdashboard');
//   } else if (User.user_type === 'Doctor') {
//     history.push('http://localhost:3000/doctordashboard');
//   }
// }

// const regExp = RegExp(
//   /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// )






  // .then(data => this.setState({ }));

    //   const updateItem = await fetch(`http://localhost:3001/auth/user/login`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Content-Length":User.length
    //     },
    //     body: JSON.stringify({ User })
    // }).then((result)=>{
    //      console.log('result',result)
    //     }).then(res => res.json())
    // console.log(updateItem, '<---- login')

    //   fetch( "http://localhost:3001/auth/user/login",{
    //      method:'POST',
    //     headers:{
    //       'Accept':'application/json',
    //       'Content-Type':'application/json'
    //     },

    // body:JSON.stringify(User)
    //  }).then((result)=>{
    //   console.warn('result',result)
    //  })



        // state = {
    //   UserType: '',
    //   Email: '',
    //   Password:'',
    //   formErrors: {UserType: '',Email: '' ,password: ''},
    //   UserTypeValid:false,
    // emailValid: false,
    // passwordValid: false,
    // formValid: false
    // }


       // console.log("lerlsjfo", User);
    // console.log('userlenth',User.size)


    //   const validaition =(values)=>{
// const error ={};
// if(!values.user_type){
//   error.usertype ='username is required!'
// }
// if(!values.email){
//   error.email ='email is required!'
// }
// if(!values.password){
//   error.password ='password is required!'
// }
// return error
//   }

//  useEffect(()=>{
//   console.log(fromErrors)
// if(Object.keys(fromErrors).length === 0 && isSumbmit){
//   console.log({user_type: UserType, email: Email, password: Password })
// }

//  })

// useEffect(() => {
//   const form = formRef.current;
//   if (typeof Parsley === 'undefined') {
//     return;
//   }
//   form.ParsleyInstance.formValidationSetup(window.ParsleyConfig);
//   form.ParsleyInstance.on('form:submit', (event) => {
//     event.preventDefault();
//     console.log('Form submitted');
//   });
//   return () => {
//     form.ParsleyInstance.off('form:submit');
//   };
// }, []);
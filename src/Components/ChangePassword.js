import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../StyleSheets/Login.css'
import axios from 'axios'
import Logo from '../Images/Logo.png'
import {useNavigate} from "react-router-dom";
import DashboardFooter from './DashboardFooter'

export default function ChangePassword() {
   const [OldPassword,setOldPassword]= useState("")
   const [NewPassword,setNewPassword]= useState("")
   const [ComfirmPassword,setComfirmPassword]= useState("")
   const [Items,setItems]= useState("")
   const navigate =useNavigate()

   const onChangeOldPassword =(event)=>{
    setOldPassword(event.target.value)
   }
   const onChangeNewPassword =(event)=>{
    setNewPassword(event.target.value)
   }
   const onChangeComfirmPassword =(event)=>{
    setComfirmPassword(event.target.value)
   }


   const onClickChangePassword = () => {

    const items = (localStorage.getItem("login"))
    const token = JSON.parse(items).token
    console.log('token',JSON.parse(items).token)
    setItems(token);
    console.log(Items)
     let chagepasswordSchema ={
      "old_password":OldPassword,
      "new_password": NewPassword,
      "comfirm_password":ComfirmPassword
     }
     console.log('chagepasswordSchema',chagepasswordSchema)
   
let data = JSON.stringify(chagepasswordSchema);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3001/auth/user/change-password',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization':`${Items}`
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  navigate(-1)
})
.catch((error) => {
  console.log(error);
});
   }

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light main-navigation" id='nav' style={{ backgroundColor: "#e3f2fd" }}>
    <div className="container-fluid">
      <a className="navbar-brand navbar-light bg-light text-primary">
        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
      </a>
      <Link className="navbar-brand text-primary " to="/patientdashboard">Dashboard</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item mx-2" >
            <Link className="nav-link active text-primary"  aria-current="page" to='/patientdashboard/bookappointment'>Book Appointment</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-primary " to="/patientdashboard/appointmentlist" > Appointment List</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-primary" to="/patientdashboard/viewbill">ViewBill</Link>
          </li>
        </ul>
        <ul className="navbar-nav topnav-right">
        <li className="nav-item mx-2">
            <Link className="nav-link text-primary " to="/patientdashboard/changepassword"> ChangePassword</Link>
          </li>
          <li className="nav-item  mx-2">
            <Link className="nav-link text-danger " to="/"> LogOut</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div >
        <form className=" container border border-primary col-4 mx-my-3 mt-4" id ="Table">
    {/* <h3 className='container text-primary'> <ins>ChangePassword</ins></h3> */}
             {/* Password */}
        <div className="container mb-3 col px-md-5 mt-4">
              <label htmlFor="exampleInputPassword" className="form-label">Old Password*</label>
              <input type="password"className="form-control border border-primary " label="First Name"name="password"value={OldPassword} onChange={onChangeOldPassword}/>
            </div>  
              {/* new passowrd  */}
            <div className="container mb-3 col px-md-5">
              <label htmlFor="exampleInpuNewPassword1" className="form-label">New Password*</label>
              <input type="password"className="form-control border border-primary " label="First Name"name="password" value={NewPassword} onChange={onChangeNewPassword}/>
            </div>  
              {/* confirm passowrd */}
            <div className="container mb-3 col px-md-5">
              <label htmlFor="exampleInputconfirmPassword" className="form-label">Confirm Password*</label>
              <input type="password"className="form-control border border-primary" label="First Name"name="password"value={ComfirmPassword} onChange={onChangeComfirmPassword}/>
            </div>
                  {/* add feedback */}
           <div className="mb-3 mx-5">
             <button type="submit" className="btn btn-primary mx-1 my-2">
             <Link className="nav-link"  id="addfeedback" onClick={onClickChangePassword}>Change Password</Link>
             </button>
            </div>
        </form>
            
    </div>
    <div className=' fixed-bottom'>
<DashboardFooter/>
</div>
    </>
  )
}

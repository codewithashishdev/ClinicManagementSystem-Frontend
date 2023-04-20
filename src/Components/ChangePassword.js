import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../StyleSheets/Login.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom";

export default function ChangePassword() {
   const [OldPassword,setOldPassword]= useState("")
   const [NewPassword,setNewPassword]= useState("")
   const [ComfirmPassword,setComfirmPassword]= useState("")
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
     let chagepasswordSchema ={
      "old_password":OldPassword,
      "old_password":NewPassword,
      "comfirm_password":ComfirmPassword
     }
     console.log('chagepasswordSchema',chagepasswordSchema)
   
let data = JSON.stringify(chagepasswordSchema);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/auth/user/change-password',
  headers: { 
    'Content-Type': 'application/json'
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

  return (
    <div >
        <form className=" container border border-primary col-4 mx-my-3 mt-4" id ="Table">
    <h3 className='container text-primary'> <ins>ChangePassword</ins></h3>
             {/* Password */}
        <div className="container mb-3 col px-md-5">
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
  )
}

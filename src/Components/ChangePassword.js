import React from 'react'
import { Link } from 'react-router-dom'
import '../StyleSheets/Login.css'

export default function ChangePassword() {
  return (
    <div >
        <form class=" container border border-secondary col-4 mx-my-3 mt-4" id ="Table">
    <h3 className='container text-primary'> <ins>ChangePassword</ins></h3>
             {/* Password */}
        <div className="container mb-3 col px-md-5">
              <label htmlFor="exampleInputPassword" className="form-label">Old Password*</label>
              <input type="password"className="form-control border border-secondary " label="First Name"name="password"/>
            </div>  
              {/* new passowrd  */}
            <div className="container mb-3 col px-md-5">
              <label htmlFor="exampleInpuNewPassword1" className="form-label">New Password*</label>
              <input type="password"className="form-control border border-secondary " label="First Name"name="password" />
            </div>  
              {/* confirm passowrd */}
            <div className="container mb-3 col px-md-5">
              <label htmlFor="exampleInputconfirmPassword" className="form-label">Confirm Password*</label>
              <input type="password"className="form-control border border-secondary" label="First Name"name="password" />
            </div>
                  {/* add feedback */}
           <div className="mb-3 mx-5">
             <button type="submit" className="btn btn-primary mx-1 my-2">
             <Link className="nav-link"  id="addfeedback">Change Password</Link>
             </button>
            </div>
        </form>
            
    </div>
  )
}

import React,{useState} from 'react'
import { Formik, useFormik } from 'formik';
import {userSchema} from'../Validations/ExampleValidation'
import { Link } from 'react-router-dom';
const axios = require('axios');

export default function Example() {


var data ={}

const [errors, setErrors] = useState([])
    const  formik =  useFormik({
        initialValues:{
          UserType:'',
          email:'',
          password:''
        }, 
        validationSchema:userSchema,
        onSubmit:(values)=>{
          console.log("submited values",values);
          console.log(values.UserType)
       
        },

})

console.log('data',data)
// let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://localhost:3001/auth/user/login',
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   values : values
    // }; 
// axios.request(config)
// .then((response) => {
//     console.log(response)
//   console.log(JSON.stringify(response.data));
//   if(!(response.status === 200)){
//     const errorData =response.json();
//     setErrors(errorData.errors)
//   }else {
//     if ( values.UserType === 'Patient') {
//       window.location.href ='http://localhost:3000/patientdashboard'
//     } else if (values.UserType === 'Doctor') {
//       window.location.href ='http://localhost:3000/doctordashboard'
//     } else if(values.UserType==='Staff') {
//       window.location.href ='http://localhost:3000/staffdashboard'
//     }
//   }
// })
// .catch((error) => {
//   console.log(error);
// });

  return (
   <div className="container me-5 " style={{ marginTop: "2%" }}>
     <h3 className="text-primary text-uppercase mb-3">Login</h3>
      <form> 
      <div className="col px-md-5">
              <div className="mb-2">Select Your Role*</div>
            <select className="form-select mb-3" label="First Name" name='UserType'  aria-label="Default select example"value={formik.values.UserType} onBlur={formik.handleBlur} onChange={formik.handleChange}>
                <option>-Select Role-</option>
                <option value='Doctor'> Doctor </option>
                <option value='Staff'>Staff</option>
                <option value='Patient'>Patient</option>
              </select>
              {formik.touched.UserType && formik.errors.UserType && <p style={{color:"red"}}>{formik.errors.UserType}</p>}
             </div>
       
        {/* Email Address */}
        <div className="mb-3 col px-md-5">
              <label htmlFor="exampleInputEmail1" className="form-label"> Email Address*</label>
              <input type="text"  className='form-control' label="First Name" 
               name="email" aria-describedby="emailHelp"placeholder="name@example.com" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.email}/>
               {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
               </div>
            {/* Password */}
            <div className="mb-3 col px-md-5">
              <label htmlFor="exampleInputPassword1" className="form-label"> Password*</label>
              <input type="password"className="form-control" label="First Name"name="password" placeholder="password" onChange={formik.handleChange}onBlur={formik.handleBlur} value={formik.values.password}/>
              {formik.touched.password && formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}
            </div>  
            
            {/* Login */}
             <div className="col px-md-5">
              <button type="submit" className="btn btn-primary mx-1 my-2">
                <Link className="nav-link" id="login"onClick={formik.handleSubmit}>Login</Link>
              </button>
              {/* signUp */}
              <div> If you Have not an Account</div>  
              <Link className="link-opacity-75-hover mb-3" id="signup" to="/signup"> SignUp</Link>
            </div>

      </form>
    </div>
   
  )
}

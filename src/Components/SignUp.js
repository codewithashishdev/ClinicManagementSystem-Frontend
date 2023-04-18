import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function SignUp() {
  const [Fullname,setfullname] =useState("")
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Gender, setGender] = useState("");
  const [UseType, setUseType] = useState("");
  const [date, setDate] = useState("");
  const [Address, setAddress] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pin, setPin] = useState("");

const onChangeFullName =(event)=>{
setfullname(event.target.value)
}
const onChangeEmail =(event)=>{
  setEmail(event.target.value)
}
const onChangePassword =(event)=>{
  setPassword(event.target.value)
}
const onChangePhoneNo =(event)=>{
  setPhoneNo(event.target.value)
}
const onChangeGender =(event)=>{
  setGender(event.target.value)
}
const onChangeUserType =(event)=>{
  setUseType(event.target.value)
}
const onChangeDate =(event)=>{
  setDate(event.target.value)
}
const onChangeAddress =(event)=>{
  setAddress(event.target.value)
}
const onChangeLandMark =(event)=>{
  setLandmark(event.target.value)
}
const onChangeCity =(event)=>{
  setCity(event.target.value)
}
const onChangeState =(event)=>{
  setState(event.target.value)
}
const onChangePin =(event)=>{
  setPin(event.target.value)
}
//date
const dateInputRef = useRef(null);
const handleChange = (e) => {
  setDate(e.target.value);
};


 const CreateUser =async()=>{


  // console.log( Fullname,Email,Password,PhoneNo,UseType,Address,Landmark,City,State,Pin,date)
  // console.log("usertype",UseType)
  // console.log("date",date)
  // console.log('gender',Gender)
  // console.log('usertype',UseType)
 let User = {
   "full_name": Fullname,
   "gender":Gender,
   "email": Email,
   "phone":PhoneNo,
   "password":Password,
   "user_type":UseType,
   "date_of_birth":date,
   "address_line_1":Address,
   "landmark":Landmark,
   "city":City,
   "state":State,
   "pin":Pin  
 };

let data = JSON.stringify(User);


let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3001/auth/user/sign-up',
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
    window.location.href ='http://localhost:3000'
}})
.catch((error) => {
  console.log(error);
});

}
  return (
    <>
      <div className="container " style={{ marginTop: "2%" }}>
        <form className=" container border border-secondary col-7 " >
        <h3 className="mb-3 text-primary text-uppercase ">Sign Up</h3> 
        {/* fullname */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">  Full Name* </label>
          <input type="text"className="form-control"  id="fullName" value={Fullname} onChange={onChangeFullName}/>
        </div>
        {/* email */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput2" className="form-label">  Email Address* </label>
          <input  type="email" className="form-control"id="email" placeholder="name@example.com" value={Email} onChange={onChangeEmail} />
        </div>
        {/* phone No. */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput3" className="form-label"> Phone No. </label>
          <input  type="email"  className="form-control" id="phone" value={PhoneNo} onChange={onChangePhoneNo} />
        </div>
        {/* password */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label"> Password*  </label>
          <input  type="password"  className="form-control"  id="password"  value={Password}  onChange={onChangePassword} />
        </div>
        {/* gender */}
       <div  className="mb-3  mx-5">
        <label htmlFor="Gnder"> Gender* </label>
       <div>
        <input type="radio"  id="Male"  name="options"value="Male"checked={Gender === "Male"} onChange={onChangeGender}/>
       <label htmlFor="Male"> Male</label>
       </div>
       <div>
       <input type="radio"id="Female"name="options" value="Female" checked={Gender === "Female"} onChange={onChangeGender} />
       <label htmlFor="Female"> Female</label>
       </div>  
        <div>
       <input type="radio"  id="Other"  name="options"value="Other" checked={Gender === "Other"} onChange={onChangeGender}/>
       <label htmlFor="Other"> Other</label>
       </div>
       </div>
        {/* userType */}
        <div className="mb-3 mx-5">
        Select Your Role*
          <select className="form-select" aria-label="Default select example"   value={UseType}  onChange={onChangeUserType}>
            <option value="">-Select Role-</option>
            <option value="Doctor">Doctor</option>
            <option value="Staff">Staff</option>
            <option value="Patient">Patient</option>
          </select>
        </div>
        {/* date picker */}
        <div className="my-2 mb-3 mx-5" >
          <p> BirthDate* {date} </p>
          <input type="date" onChange={handleChange} ref={dateInputRef}   value={date}  onSelect={onChangeDate}/>
        </div>
        {/* address */}
        <div className="mb-3 mx-5">
          <label htmlFor="address" className="form-label"> Address </label>
          <textarea className="form-control" id="address" rows="3" value={Address} onChange={onChangeAddress}></textarea>
        </div>
        {/* landmark */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput3" className="form-label"> LandMark </label>
          <input  type="text"  className="form-control"   id="landmark"   value={Landmark} onChange={onChangeLandMark}/>
        </div>
        {/* city */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput4" className="form-label"> City   </label>
          <input type="text"  className="form-control" id="city"  value={City}  onChange={onChangeCity} />
        </div>
        {/* state */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput5" className="form-label"> State </label>
          <input type="text" className="form-control" id="state" value={State} onChange={onChangeState} />
        </div>
        {/* pincode */}
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput6" className="form-label">  PinCode*</label>
          <input type="number"  className="form-control" id="pin" placeholder="ex -364505"  value={Pin}  onChange={onChangePin}/>
        </div>
        {/* photo */}
      <div className="mb-3 mx-5">
      <label htmlFor="exampleFormControlFile1">Photo</label><br />
      <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
     </div>
        {/* sigup buttons */}
        <div className="my-2 mx-5">
          <button className="btn btn-primary mx-1">
            <Link className="nav-link" onClick={CreateUser}> Sign Up </Link>
          </button>
             {/* back buttons */}
          <button className="btn btn-primary mx-1">
            <Link className="nav-link" to = '/'>Back </Link>
          </button>
        </div>
        
       
        </form>
      </div>
    </>
  );
}

export default SignUp;




// gender:PropTypes.isRequired,
// select:PropTypes.isRequired,

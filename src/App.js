import "./App.css";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import PatientDashboard from "./Components/PatientDashboard";
import BookAppointment from "./Components/BookAppointment";
import UpdateAppointment from './Components/UpdateAppointment'
import DocotorDashboard from "./Components/DocotorDashboard";
import AddFeedback from "./Components/AddFeedback";
import StaffDashboard from "./Components/StaffDashboard";
import CreateBill from "./Components/CreateBill";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <Routes>
        <Route path ='/doctordashboard'element ={<DocotorDashboard/>}></Route>
        <Route path="/patientdashboard" element={<PatientDashboard />}> </Route>
        <Route path="/staffdashboard" element={<StaffDashboard/>} ></Route>
      </Routes>
      <Routes>

            <Route path="/patientdashboard/bookappointment" element={<BookAppointment />}/>
            <Route path="/patientdashboard/updateappointment" element={<UpdateAppointment/>}/>
            <Route path="/patientdashboard/appointmentlist"element ={<h3>this is Appointment List</h3>}/>
            <Route path="/patientdashboard/viewbill"element ={<h3>this is bill </h3>}/>
      </Routes>
      <Routes>
        <Route path="/doctordashboard/addfeedback" element={<AddFeedback/>} ></Route>
      </Routes>
      <Routes>
      <Route path="/staffdashboard/createbill" element={<CreateBill />}/>
      <Route path="/staffdashboard/bookappointment" element={<BookAppointment />}/>
      </Routes>
    </Router>
  );
}

export default App;

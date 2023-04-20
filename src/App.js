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
import Example from "./Components/Example";
import AppointmentList from "./Components/AppointmentList";
import ViewBill from "./Components/ViewBill";
import ChangePassword from "./Components/ChangePassword";
import DcotorAppointmentList from "./Components/DoctorAppointmentList"
import StaffAppointmentList from "./Components/StaffAppointmentList";
import BillDetail from "./Components/BillDetail";
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
            <Route path="/patientdashboard/appoitnment/:PateintID" element={<UpdateAppointment/>}/>
            <Route path="/patientdashboard/appointmentlist"element ={<AppointmentList/>}/>
            <Route path="/patientdashboard/viewbill"element ={<ViewBill/>}/>
            <Route path="/patientdashboard/changepassword"element ={<ChangePassword/>}/>
      </Routes>
      <Routes>
        <Route path="/doctordashboard/addfeedback" element={<AddFeedback/>} ></Route>
        <Route path="/doctordashboard/appointmentlist"element={<DcotorAppointmentList/>}/>
        <Route path="/doctordashboard/changepassword"element ={<ChangePassword/>}/>
      </Routes>
      <Routes>
      <Route path="/staffdashboard/createbill" element={<CreateBill />}/>
      <Route path="/staffdashboard/bookappointment" element={<BookAppointment />}/>
      <Route path="/staffdashboard/appointmentlist"element ={<StaffAppointmentList/>}/>
      <Route path="/staffdashboard/example" element ={<Example/>}/>
      <Route path="/staffdashboard/viewbill"element ={<ViewBill/>}/>
      <Route path="/staffdashboard/changepassword"element ={<ChangePassword/>}/>
      <Route path="/staffdashboard/viewbill/:patientID"element ={<BillDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;

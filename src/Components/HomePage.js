import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";
import Footer from "./Footer";
import Logo from '../Images/Logo.png'
import '../StyleSheets/Home.css'




export default function Hero() {
  return (<>
       <nav className="navbar navbar-expand-lg navbar-custom fixed-top" id='nav' style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand bg-light text-primary">
          <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
 
        </a>
        <Link className="navbar-brand text-primary " to="/">ClinicManagement</Link>
      </div>
    </nav>

    <div className =" bg-white  ">
          
      <div className="container display-6  ">
      <Link className="container" to="/">
            <img src={Logo} className="align-center mb-2" alt="Logo" />
          </Link><ins>Clinic Management</ins></div>
  {/* hero */}
      <div className="container-fluid mt-20 hero-header">
        <div className="container py-5"  id ="hero">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <p className="text-white display-7"><ins>Welcome To Clinic Management  </ins> </p>
              <h1 className="display-3 text-white mb-md-2">We Make A Best Healthcare Solution In Our City</h1>
              <p className=" text-white mb-md-4 display-6">For More Details Please Sign Up</p>
            </div>
          </div>
        </div>
      </div>
  
      {/* about content */}
      <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5" >
                <div className="col-lg-5 mb-5 mb-lg-0" >
                    <div id="second"></div>
                </div>
                <div className="col-lg-7">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Vision & Mission</h5>
                        <h1 className="display-4">We Provide You Best Medical Care For you & Your Family</h1>
                    </div>
                    <p>A clinic management system is a software solution that helps healthcare providers manage patient data, appointment scheduling, and billing processes. The goal of this project is to develop a robust and scalable clinic management system that can be used by small to medium-sized clinics to streamline their operations and provide better patient care.</p>
                    <div className="row g-3 pt-3">
                        <div className="col-sm-3 col-6">
                            <div className="bg-primary text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-user-md  mb-3"></i>
                                <h6 className="mb-0">Qualified<small className="d-block text-light">Doctors</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-primary text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-procedures  mb-3"></i>
                                <h6 className="mb-0">Accurate<small className="d-block text-light">Prescription</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-primary text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-microscope  mb-3"></i>
                                <h6 className="mb-0">Affordable<small className="d-block text-light">Billing</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-primary text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-ambulance  mb-3"></i>
                                <h6 className="mb-0 ">Service<small className="d-block text-light">Appointment</small></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* // end vision */}
      <blockquote class="blockquote text-center text-primary">
        <p>"The best way to find yourself is to lose yourself in the service of others." </p>
        <footer class="blockquote-footer ">Mahatma Gandhi in <cite title="Source Title">"Satyana Prayogo"</cite></footer>
      </blockquote>
      {/* <Login/> */}
   <div className="container">
    <Login/>
   </div>
    {/* start footer */}
    <div>
      <Footer/>
    </div>
    </div>
    </>
  );
}
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";
import Home1 from "../Images/HomeImage1.jpg"
import Footer from "./Footer";




export default function Hero() {
  return (
    <div className =" bg-white ">
  {/* heror */}
      <div className="container-fluid bg-primary  hero-header  ">
         
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <p className="text-white display-7"><ins>Welcome To Clinic Management  </ins> </p>
              <h1 className="display-3 text-white mb-md-2">We Make A Best Healthcare Solution In Our City</h1>
              <p className=" text-white mb-md-4 display-6">For More Details Please Sign Up</p>
            </div>
          </div>
        </div>

      </div>
    {/* <Login/> */}
   <div className="container">
    <Login/>
   </div>
      {/* about content */}
      <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{Height: "500px;"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src={Home1}/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Vision</h5>
                        <h1 className="display-4">We Provide You Best Medical Care For you & Your Family</h1>
                    </div>
                    <p>A clinic management system is a software solution that helps healthcare providers manage patient data, appointment scheduling, and billing processes. The goal of this project is to develop a robust and scalable clinic management system that can be used by small to medium-sized clinics to streamline their operations and provide better patient care.</p>
                    <div className="row g-3 pt-3">
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                                <h6 className="mb-0">Accurate<small className="d-block text-primary">Prescription</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                <h6 className="mb-0">Affordable<small className="d-block text-primary">Billing</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                <h6 className="mb-0">Service<small className="d-block text-primary">Appointment</small></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* // end vision */}
    {/* start footer */}
    <div>
      <Footer/>
    </div>
    </div>
  );
}
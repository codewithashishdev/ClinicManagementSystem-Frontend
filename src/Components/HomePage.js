import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";





export default function Hero() {
  return (
    <div className ="bg-white">
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5 className="d-inline-block text-white text-uppercase "> Welcome To Clinic Management</h5>
              <h1 className="display-1 text-white mb-md-4">Best Healthcare Solution In Our City</h1>
              <h4 className=" text-white mb-md-4">For More Details Please Sign Up</h4>
            </div>
          </div>
        </div>
      </div>
   <div className="container">
    {/* <Login/> */}
    <Login/>
   </div>
      {/* footer */}
      <div className="card text-center container-fluid bg-dark">
        <div className="card-header text-white"><h3>Clinic Management</h3></div>
        <div className="card-body">
          <h5 className="card-title text-white">Easy and smart way to make Appointment</h5>
          <p className="card-text text-white">this is change your life </p>
        </div>
        <div className="card-footer  text-white">© Copyright 2022 Codiot All Rights Reserved</div>
      </div>
    </div>
  );
}
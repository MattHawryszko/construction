import React, { Component } from 'react';

import Truck from "../img/truck.png"
import Crane from "../img/crane.png"
import Foundation from "../img/foundation.png"


export default class App extends Component {
render() {
    return (
            <div className="col-12 col-lg-3 bg-yellow pt-5 pl-5">
              <h3 className="pt-3 font-weight-bold">Contact Info</h3>
              <div className="row pt-2">
                <div className="col-3 my-auto">
                  <i className="fas fa-map-marker-alt fa-3x text-white"></i>
                </div>
                <div className="col-9">
                  <h5 className="font-weight-bold">Our Office</h5>
                  <p className="text-white pr-4 m-0">1234 Divi St. #1000, San Francisc, CA 93251</p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-3 my-auto">
                  <i className="far fa-clock fa-3x text-white"></i>
                </div>
                <div className="col-9">
                  <h5 className="font-weight-bold">Open Office Hours</h5>
                  <p className="text-white pr-4 m-0">M-F: 8am – 6pm </p>
                  <p className="text-white pr-4 m-0">S-S: 10am – 4pm </p>
                  
                </div>
              </div>
              <div className="row py-3">
                <div className="col-3 my-auto">
                  <i className="far fa-comment fa-3x text-white"></i>
                </div>
                <div className="col-9 pb-5 pb-lg-0">
                  <h5 className="font-weight-bold">Get in Touch</h5>
                  <p className="text-white pr-4 m-0 pb-5 pb-lg-0">(289) 993 - 9934</p>
                  <p className="text-white pr-4 m-0 pb-5 pb-lg-0">contact@aswconstruction.com</p>
                </div>
                
              </div>

            </div>
 
      );
  }
};


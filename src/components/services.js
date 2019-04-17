import React, { Component } from 'react';

import Truck from "../img/truck.png"
import Crane from "../img/crane.png"
import Foundation from "../img/foundation.png"


export default class App extends Component {
render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8 p-0">
              <div className="bg-services">
                <div className="container-fluid vh-100 vertical-center">
                  <div className="col-12 my-auto">
                    <div className="row justify-content-center wow zoomIn fast">
                      <h1 className="pt-5 text-center text-white font-bold">ASW Construction</h1>   
                    </div>
                    <div className="row justify-content-center wow fadeIn fast">
                      <h5 className="text-center text-grey font-light w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum iusto nobis quisquam exercitationem iste? Fuga, harum. Aliquid, iste.</h5>
                        
                    </div>
                    <div className="row justify-content-center pt-5">
                      <li className="projects active"><a className="mt-5 btn--default btn--yellow text-uppercase text-white">View our work</a></li>
                    </div>
                  </div>
                </div>   
              </div>
            </div>
            <div className="col-12 col-lg-4 bg-yellow pt-5 pl-5">
              <h3 className="pt-5 font-weight-bold">Our Services</h3>
              <div className="row pt-5">
                <div className="col-3">
                  <img src={Crane} alt="crane" className="img-fluid"/>
                </div>
                <div className="col-9">
                  <h5 className="font-weight-bold">Building Constuction</h5>
                  <p className="text-white pr-4 m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ipsam iste. Sint autem </p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-3">
                  <img src={Foundation} alt="crane" className="img-fluid"/>
                </div>
                <div className="col-9">
                  <h5 className="font-weight-bold">Foundation Work</h5>
                  <p className="text-white pr-4 m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ipsam iste. Sint autem </p>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-3">
                  <img src={Truck} alt="crane" className="img-fluid"/>
                </div>
                <div className="col-9 pb-5 pb-lg-0">
                  <h5 className="font-weight-bold">Tear-downs & Haul offs</h5>
                  <p className="text-white pr-4 m-0 pb-5 pb-lg-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ipsam iste. Sint autem </p>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </div>      
      );
  }
};


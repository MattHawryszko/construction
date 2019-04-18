import React, { Component } from 'react';

import Truck from "../img/truck.png"
import Crane from "../img/crane.png"
import Foundation from "../img/foundation.png"


export default class App extends Component {
render() {
    return (
            <div className="col-12 col-lg-4 pt-5 pl-5 d-none d-lg-block">
              <h3 className="pt-5 text-yellow font-weight-bold">What We Do</h3>
              <div className="row pt-5">
                <div className="col-3">
                  <i class="fas fa-building text-yellow fa-5x"></i>
                </div>
                <div className="col-9">
                  <h5 className="font-weight-bold text-white">Building Constuction</h5>
                  <p className="text-white pr-4 m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ipsam iste. Sint autem </p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-3">
                  <i class="fas fa-tools text-yellow fa-5x"></i>
                </div>
                <div className="col-9">
                  <h5 className="font-weight-bold text-white">Foundation Work</h5>
                  <p className="text-white pr-4 m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ipsam iste. Sint autem </p>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-3">
                  <i class="fas fa-paint-roller text-yellow fa-5x"></i>
                </div>
                <div className="col-9 pb-5 pb-lg-0">
                  <h5 className="font-weight-bold text-white">Tear-downs & Haul offs</h5>
                  <p className="text-white pr-4 m-0 pb-5 pb-lg-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ipsam iste. Sint autem </p>
                </div>
                
              </div>

            </div>
 
      );
  }
};


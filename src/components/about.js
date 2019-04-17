import React, { Component } from 'react';

import Tracks from "../img/tracks.jpg"

export default class App extends Component {
render() {
    return (
      <div className="w-100 bg-dark">
        <div className="row bg-dark">
          <div className="col-12 col-lg-5 pt-5">
            <div className="container mx-4">
              <h2 className="w-75 font-weight-bold text-capitalize title-font text-white pt-5">We've Been Building For Over 10 Years</h2>
              <div className="mt-4 title-underline"></div>
              <div className="row pt-5 mx-1">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cumque laborum blanditiis ullam fuga deleniti sit corrupti laboriosam libero explicabo, esse impedit repellat aut velit ipsa reiciendis doloribus voluptatum laudantium!</p>
              </div>
              <div className="row mx-1">
              <li className="pt-5 pb-5 no-bullets projects active"><span className="mt-5 btn--small btn--default btn--yellow-1 text-uppercase">About Us</span></li>
              </div>


            </div>
          </div>
          <div className="col-12 col-lg-7 p-0">
            <img src={Tracks} alt="tracksimg" className="img-fluid"/>
            <div className="row pt-5">
              <div className="col-6 bottom-align-text-left bg-yellow w-50">
                <h2 className="text-center title-font font-weight-bold pt-4 pb-1">Call For a Quote</h2>
                <h5 className="text-uppercase title-font font-weight-bold text-center pb-3">(289) 993 - 9934</h5>
              </div>
              <div className="col-6 bottom-align-text-right bg-white w-50  justify-content-center d-flex">
                <li className="pt-5 pb-5 no-bullets projects active"><span className="mt-5 btn--small btn--default btn--black text-uppercase">Online Quote</span></li>
              </div>
            </div>
          </div>
        </div>
      </div>        
      );
  }
};


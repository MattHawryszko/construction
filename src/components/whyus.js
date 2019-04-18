import React, { Component } from 'react';

import Acordian from "./acordian"

export default class App extends Component {
render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="w-75 font-weight-bold text-capitalize title-font pt-5">Lets Build Something Together</h2>
            <div className="mt-4 title-underline"></div>
            <p className="pt-4 text-dark-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cumque laborum blanditiis ullam fuga deleniti sit corrupti laboriosam libero explicabo, esse impedit repellat aut velit ipsa reiciendis doloribus voluptatum laudantium!</p>
            <li className="pt-5 pb-5 no-bullets projects active"><span className="mt-5 btn--small btn--default btn--yellow-1 text-uppercase">Get in touch</span></li>
          </div>
          <div className="col-lg-8 my-auto">
            <Acordian />
          </div>
        </div>
        
      </div>      
      );
  }
};


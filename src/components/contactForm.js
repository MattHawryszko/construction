import React, { Component } from 'react';

import Acordian from "./acordian"

export default class App extends Component {
render() {
    return (
      <div className="bg-grey">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="w-75 font-weight-bold text-capitalize title-font text-darker-grey pt-5">Get In Touch</h1>
              <div className="mt-4 title-underline"></div>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control rounded-0 my-3" id="exampleInputName" placeholder="Name" />
                  <input type="email" className="form-control rounded-0 my-3" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" />
                  <textarea type="text" className="form-control rounded-0 my-3" id="exampleInputText" placeholder="Message" rows="6" />
                </div>
                <li className="py-5 no-bullets projects active"><span className="mt-5 btn--default btn--black text-uppercase">Send Message</span></li>
              </form>
            </div>
            <div className="col-12 col-lg-6 my-auto">
              <Acordian />
            </div>
          </div>
        
        </div>   
      </div>
   
      );
  }
};


import React, { Component } from 'react';

export default class App extends Component {
render() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="row pb-4">
            <div className="col-12 justify-content-center d-flex">
              <h1 className="text-center font-weight-bold title-font text-darker-grey pt-5">
                Client Testimonials
                <div className="mx-auto mt-4 title-underline"></div>
              </h1>
            </div>
          </div>
          <div className="row justify-content-center d-flex">
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="card my-4 px-4">
                <h5 className="pt-4 font-weight-bold title-font text-center">John Smith</h5>
                <span className="text-center pb-3 text-yellow"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                <p className="text-dark-grey text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et vitae, nihil praesentium, earum repellendus est atque, eos officiis asperiores quis quos quasi.</p>
                <li className="pt-3 pb-5 no-bullets projects active mx-auto"><span className="mt-5 btn--default btn--grey btn--small text-uppercase">View Project</span></li>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="card my-4 px-4">
                <h5 className="pt-4 font-weight-bold title-font text-center">John Smith</h5>
                <span className="text-center pb-3 text-yellow"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                <p className="text-dark-grey text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et vitae, nihil praesentium, earum repellendus est atque, eos officiis asperiores quis quos quasi.</p>
                <li className="pt-3 pb-5 no-bullets projects active mx-auto"><span className="mt-5 btn--default btn--grey btn--small text-uppercase">View Project</span></li>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 ">
              <div className="card my-4 px-4">
                <h5 className="pt-4 font-weight-bold title-font text-center">John Smith</h5>
                <span className="text-center pb-3 text-yellow"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                <p className="text-dark-grey text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et vitae, nihil praesentium, earum repellendus est atque, eos officiis asperiores quis quos quasi.</p>
                <li className="pt-3 pb-5 no-bullets projects active mx-auto"><span className="mt-5 btn--default btn--grey btn--small text-uppercase">View Project</span></li>
              </div>
            </div>
          </div>
        </div>        
      </div>
      
      );
  }
};


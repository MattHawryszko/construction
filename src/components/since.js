import React, { Component } from 'react';

import Since from "../img/since.jpg"

export default class App extends Component {
render() {
    return (
      <div className="">
        <div className="row bg-light ml-0 w-100">

          <div className="col-12 col-lg-5 p-0">
            <img src={Since} alt="sinceimg" className="img-fluid img-since"/>
          </div>
          <div className="col-12 col-lg-7 pt-5">
          
            <div className="container">
              <div className="pt-5"></div>
              <h1 className="w-75 font-weight-bold text-capitalize title-font text-darker-grey pt-5">We value your trust & build your dream since 2012</h1>
              <div className="mt-4 title-underline"></div>
              <div className="row pt-5 pb-5">
                <div className="col-12 col-md-6">
                  <p class="text-dark-grey"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit in incidunt soluta, aspernatur quod labore distinctio saepe rem molestiae veniam iste suscipit nesciunt aperiam cumque, tempore omnis fugit tenetur consectetur maiores nobis nihil? Adipisci sapiente molestias omnis rerum tenetur. Voluptates deserunt expedita vitae ea beatae laudantium. Reprehenderit, ipsa?</p>
                  <p class="text-dark-grey"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit in incidunt soluta, aspernatur quod labore distinctio saepe rem molestiae veniam iste suscipit nesciunt aperiam cumque, tempore omnis fugit tenetur consectetur maiores nobis </p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="text-dark-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et iure quos vitae, sunt fuga dolores natus provident. Expedita, id.</p>
                  <p className="text-dark-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam magnam, sequi ducimus quidem odit unde blanditiis corporis exercitationem ab labore tempore. Accusamus, quas fugiat sit saepe nulla velit voluptatem quo atque quibusdam quis aliquid iure excepturi beatae. Ipsum, accusantium delectus?</p>
                  <li className="pt-3 pb-5 no-bullets projects active"><span className="mt-5 btn--default btn--black text-uppercase">Learn More</span></li>
                </div>
              </div>
              <div className="pt-5"></div>
              <div className="row pt-5">
              
                <div className="col-6 bottom-align-text-left bg-yellow w-50">
                  <h2 className="text-center font-weight-bold pt-4 pb-1">12</h2>
                  <p className="text-uppercase font-weight-bold text-center">years established</p>
                </div>
                <div className="col-6 bottom-align-text-right bg-black w-50">
                <h2 className="text-center text-white font-weight-bold pt-4 pb-1">200</h2>
                  <p className="text-uppercase text-dark-grey font-weight-bold text-center">projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      );
  }
};


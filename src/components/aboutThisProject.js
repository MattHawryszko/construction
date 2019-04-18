import React, { Component } from 'react';

import ProjectImg1 from "../img/projectimg1.jpg"
import ProjectImg2 from "../img/projectimg2.jpg"
import ProjectImg3 from "../img/projectimg3.jpg"


export default class App extends Component {
render() {
    return (
      <div className="bg-light">
      <div className="pt-5 container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1 className="w-75 font-weight-bold text-capitalize title-font text-darker-grey pt-5">About this Project</h1>
            <div className="mt-4 title-underline"></div>
            <p className="text-dark-grey pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam consectetur, quisquam ipsa saepe, at ipsum quod eveniet aspernatur repellat quos reiciendis adipisci ullam iste voluptas! Provident consequatur earum ab aspernatur!</p>
            <p className="text-dark-grey pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam consectetur, quisquam ipsa saepe, at ipsum quod eveniet aspernatur repellat quos reiciendis adipisci ullam iste voluptas! Provident consequatur earum ab aspernatur!</p>
          </div>
          <div className="col-12 col-lg-6 pt-5">
            <img src={ProjectImg1} alt="Project 1" className="img-fluid" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <img src={ProjectImg2} alt="Project 2" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 pt-5">
            <img src={ProjectImg3} alt="Project 3" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6 pb-5">
            <p className="text-dark-grey pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam consectetur, quisquam ipsa saepe, at ipsum quod eveniet aspernatur repellat quo!</p>
            <p className="text-dark-grey pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, esse. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p className="text-dark-grey pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam consectetur, quisquam ipsa saepe, at ipsum quod eveniet aspernatur repellat quos reiciendis adipisci ullam iste voluptas! Provident consequatur earum ab aspernatur!</p>
          </div>
          
        </div>
      </div>
      </div>
      
      );
  }
};


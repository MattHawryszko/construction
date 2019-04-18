import React, { Component } from 'react';

import Bridge from "../img/projectimg2.jpg"

export default class App extends Component {
render() {
    return (
      <div className="">
        <div className="row bg-light ml-0 w-100">

          <div className="col-12 col-xl-4 p-0 pt-4">
            <div className="container">
              <div className="row pl-5">
                <div className="col-12">
                  <h1 className="title-font pt-5 ">Only The Best</h1>
                </div>
              </div>
              <div className="row pl-5 pt-5">
                <span className="d-flex">
                  <i class="pl-5 fas fa-chevron-right text-yellow fa-2x"></i>
                  <i class="fas fa-chevron-right text-yellow fa-2x"></i>
                  <h4 className="pl-3 font-weight-bold title-font">Eco Friendly Construction</h4>
                </span>
                <p className="px-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ut iusto, totam dolorum porro magni expedita, ducimus qui sunt quo asperiores neque aut ipsam, tempore reprehenderit! Eius ipsum harum eveniet?</p>
              </div>
              <div className="row pl-5 pt-5">
                <span className="d-flex">
                  <i class="pl-5 fas fa-chevron-right text-yellow fa-2x"></i>
                  <i class="fas fa-chevron-right text-yellow fa-2x"></i>
                  <h4 className="pl-3 font-weight-bold title-font">The Newest Technology Repairs</h4>
                </span>
                <p className="px-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ut iusto, totam dolorum porro magni expedita, ducimus qui sunt quo asperiores neque aut ipsam, tempore reprehenderit! Eius ipsum harum eveniet?</p>
              </div>
              <div className="row pl-5 pt-5">
                <span className="d-flex">
                  <i class="pl-5 fas fa-chevron-right text-yellow fa-2x"></i>
                  <i class="fas fa-chevron-right text-yellow fa-2x"></i>
                  <h4 className="pl-3 font-weight-bold title-font">High Quality Construction Management</h4>
                </span>
                <p className="px-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ut iusto, totam dolorum porro magni expedita, ducimus qui sunt quo asperiores neque aut ipsam, tempore reprehenderit! Eius ipsum harum eveniet?</p>
              </div>
            </div>
           
          </div>
          <div className="col-12 col-xl-8 pt-5">
          <div className="row"></div>
            
            <div className="row">
            <img src={Bridge} alt="bride" className="img-fluid p-0 m-0"/>
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
      );
  }
};


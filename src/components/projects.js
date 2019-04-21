import React, { Component } from 'react';


import Project1 from "../img/project1.jpg"
import Project2 from "../img/project2.jpg"
import Project3 from "../img/project3.jpg"

export default class App extends Component {

  handleEvent = event => {
  const props = this.props;
  if(event.target.id != "home")
    props.history.push('/'+event.target.id)
  else
    props.history.push('/')
};

render() {
    return (
      <div className="container">
        <div className="row pb-4">
          <div className="col-12 justify-content-center d-flex">
            <h1 className="text-center font-weight-bold title-font text-darker-grey pt-5">
              {this.props.title}
              <div className="mx-auto mt-4 title-underline"></div>
            </h1>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="col-12 col-md-6 col-lg-4">
            <img src={Project1} alt="droneshot" className="img-fluid"/>
            <div className="card my-4 px-4">
              <h5 className="py-4 font-weight-bold title-font">Project title</h5>
              <p className="text-dark-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et vitae, nihil praesentium, earum repellendus est atque, eos officiis asperiores quis quos quasi.</p>
              <li className="pt-3 pb-5 no-bullets projects active"><span id="projects/22222" onClick={this.handleEvent} className="mt-5 btn--default btn--grey btn--small text-uppercase">View Project</span></li>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <img src={Project2} alt="droneshot" className="img-fluid"/>
            <div className="card my-4 px-4">
              <h5 className="py-4 font-weight-bold title-font">Project title</h5>
              <p className="text-dark-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et vitae, nihil praesentium, earum repellendus est atque, eos officiis asperiores quis quos quasi.</p>
              <li className="pt-3 pb-5 no-bullets projects active"><span id="projects/12344" onClick={this.handleEvent} className="mt-5 btn--default btn--grey btn--small text-uppercase">View Project</span></li>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ">
            <img src={Project3} alt="droneshot" className="img-fluid"/>
            <div className="card my-4 px-4">
              <h5 className="py-4 font-weight-bold title-font">Project title</h5>
              <p className="text-dark-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et vitae, nihil praesentium, earum repellendus est atque, eos officiis asperiores quis quos quasi.</p>
              <li className="pt-3 pb-5 no-bullets projects active"><span id="projects/1234" onClick={this.handleEvent} className="mt-5 btn--default btn--grey btn--small text-uppercase">View Project</span></li>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 justify-content-center d-flex">
            <li className="py-5 no-bullets projects active"><span id="projects" onClick={this.handleEvent} className="mt-5 btn--default btn--black text-uppercase">View All</span></li>
          </div>
        </div>
      </div>      
      );
  }
};


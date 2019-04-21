import React, { Component } from 'react';

import * as $ from "jquery";
import "bootstrap/js/dist/modal";

const delay = ms => new Promise(res => setTimeout(res, ms));



export default class App extends Component {
handleEvent = event => {
  const props = this.props;
  if(event.target.id != "home")
    props.history.push('/'+event.target.id)
  else
    props.history.push('/')
};
componentDidMount(){
  try{
    var item = window.location.pathname
    item = item.replace('/', '')
    if(item.includes('/'))
    {
      item = item.substr(0, item.lastIndexOf('/'))
    }
  
    var navUL = $('#navbar-list')
    var navLi= navUL.find('#'+item)
    item = item.charAt(0).toUpperCase()+ item.slice(1)
    document.title =  item + " - ASW Construction"
    navLi.addClass('active')
  }catch(error){
    var navUL = $('#navbar-list')
    var navLi= navUL.find('#home')
    navLi.addClass('active')
    document.title = "Home - ASW Construction"
  }
}
render() {
    return (
<div>
    <nav id="navbar" className="navbar navbar-expand-lg justify-content-between p-0">
      <h2 id="home" onClick={this.handleEvent} className="title-font pl-3"><span className="text-yellow">ASW</span> Construction</h2>
      <a href="#exampleModal" role="button" className="btn toggleNav pl-4 pt-1 pb-2 d-flex d-sm-none" data-toggle="modal" data-target="#exampleModal"><i className="p-0 m-0 fas fa-bars fa-2x text-black toggleNav"></i></a>
      <ul id="navbar-list" className="d-none d-md-flex p-0 m-0">
        <li id="home" onClick={this.handleEvent} className="home">HOME</li>
        <li id="about" onClick={this.handleEvent} className="about">ABOUT US</li>
        <li id="contact" onClick={this.handleEvent} className="contact">CONTACT</li>
        <li id="projects" onClick={this.handleEvent} className="projects">PROJECTS</li>
      </ul>
      
    </nav>    
    <div className="my-5"></div>
    
    <div className="modal fade p-0 m-0 w-100" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-bg" role="document">
        <div className="modal-content modal-bg p-0 m-0 ">
        <button type="button" className="close justify-content-end d-flex text-white " data-dismiss="modal" aria-label="Close"><span className="h1" aria-hidden="true">&times;</span></button>
          <div className="modal-body modal-bg p-0 m-0 justify-content-center d-flex">
            <ul>
              <li id="home" onClick={this.handleEvent} className="home" data-dismiss="modal">HOME</li>
              <li id="about" onClick={this.handleEvent} className="about" data-dismiss="modal">ABOUT US</li>
              <li id="contact" onClick={this.handleEvent} className="contact" data-dismiss="modal">CONTACT</li>
              <li id="projects" onClick={this.handleEvent} className="projects" data-dismiss="modal">PROJECTS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>  
      );
  }
};


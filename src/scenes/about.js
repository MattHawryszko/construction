import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/topImage"
import Projects from "../components/projects"
import About from "../components/aboutTop"



export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar />
        <TopImage bg={'bg-about'} col="col-lg-9" split={false} button={true} buttontext="View Our Work" title="About Our Construction Company">
          <About />
        </TopImage>
        
        <Footer />
        
      </div>
    );
  }
}

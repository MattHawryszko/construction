import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/topImage"
import Services from "../components/services"
import Projects from "../components/allProjects"

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar />
        <TopImage bg={'bg-projects'} split={false} button={false} title="Our Construction Projects">
          
          
        </TopImage>
        <Projects />
        <Footer />
        
      </div>
    );
  }
}

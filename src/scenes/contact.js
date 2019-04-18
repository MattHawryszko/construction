import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/topImage"
import ContactInfo from "../components/contactInfo"
import Projects from "../components/projects"



export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar />
        <TopImage bg={'bg-contact'} col="col-lg-9" split={true} button={true} buttontext="Send A Message" title="Contact Us">
          
          <ContactInfo />
        </TopImage>
        
        <Footer />
        
      </div>
    );
  }
}

import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/topImage"
import ContactInfo from "../components/contactInfo"
import ContactCall from "../components/contactCall"
import ContactForm from "../components/contactForm"


export default class App extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar history={this.props.history} />
        <TopImage bg={'bg-contact'} col="col-lg-9" split={true} button={true} buttontext="Send A Message" title="Contact Us">
          <ContactInfo />
        </TopImage>
        <ContactCall />
        <ContactForm />
        <div className="row maps-bg m-0">
          <div className="col-12 m-0 p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.624358855394!2d-73.99778968459397!3d40.748290479328034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fe464e625baa5e6!2sADI+Global+Distribution!5e0!3m2!1sen!2sca!4v1555262118448!5m2!1sen!2sca" width="100%" height="450" frameborder="0" allowFullScreen></iframe>
            <div className="gmap"></div>
          </div> 
        </div>
        <Footer />
        
      </div>
    );
  }
}

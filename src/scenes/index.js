import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/topImage"
import Services from "../components/services"
import Since from "../components/since"
import Projects from "../components/projects"
import About from "../components/about"
import WhyUs from "../components/whyus"
import Reviews from "../components/reviews"

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import "../styles/index.css";
import "../styles/animate.css"

import wow from "wow.js"

new wow({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false, live: true }).init()

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar />
        <TopImage />
        <Services />
        <Since />
        <Projects />
        <About />
        <WhyUs />
        <Reviews />
        <Footer />
        
      </div>
    );
  }
}
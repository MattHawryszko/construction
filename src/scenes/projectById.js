import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/topImage"
import Projects from "../components/projects"



export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar />
        <TopImage />
        <Projects title="Related Projects" />
        <Footer />
        
      </div>
    );
  }
}

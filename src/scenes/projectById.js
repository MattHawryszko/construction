import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import TopImage from "../components/topImage"
import ProjectInfo from "../components/projectInfo"
import AboutThisProject from "../components/aboutThisProject"
import Projects from "../components/projects"



export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar />
        <TopImage bg={'bg-project'} split={false} button={false} title="The EurCorp Building Project">
          <ProjectInfo date="12 April 2018" client="Euronten Corp" type="Building Construction" />
        </TopImage>
        <AboutThisProject />
        <Projects title="Related Projects" />
        <Footer />
        
      </div>
    );
  }
}

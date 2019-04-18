import React, { Component } from 'react';



export default class App extends Component {
render() {
    return (
            <div className="col-12 col-lg-4 vertical-center">
              <div className="row d-block">
                <p className="text-white"><span className="font-weight-bold">Date: </span>{this.props.date}</p>
                <p className="text-white"><span className="font-weight-bold">Client: </span>{this.props.client}</p>
                <p className="text-white"><span className="font-weight-bold">Project Type: </span>{this.props.type}</p>
              </div>
              
              
            </div>
 
      );
  }
};


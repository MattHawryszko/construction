import React, { Component } from 'react';

export default class App extends Component {
render() {
  if(this.props.split)
  {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className={'col-12 '+this.props.col+' p-0'}>
              <div className={this.props.bg}>
                <div className="container-fluid vh-100 vertical-center">
                  <div className="col-12 my-auto">
                    <div className="row justify-content-center wow zoomIn fast">
                      <h1 className="pt-5 text-center text-white font-bold">{this.props.title}</h1>   
                    </div>
                    <div className="row justify-content-center wow fadeIn fast">
                      <h5 className="text-center text-grey font-light w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum iusto nobis quisquam exercitationem iste? Fuga, harum. Aliquid, iste.</h5>
                    </div>
                    {this.props.button &&
                      <div className="row justify-content-center pt-5">
                      <li className="projects active"><a className="mt-5 btn--default btn--yellow text-uppercase text-white">{this.props.buttontext}</a></li>
                    </div>
                    }
                  </div>
                </div>   
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>     
      );
  }else{
    return (
      <div>
        <div className="container-fluid">
          <div className={'row '+ this.props.bg}>
            <div className="col-12 col-lg-8 p-0">
                <div className="container-fluid vh-100 vertical-center">
                  <div className="col-12 my-auto">
                    <div className="row justify-content-center wow zoomIn fast">
                      <h1 className="pt-5 text-center text-white font-bold">{this.props.title}</h1>   
                    </div>
                    <div className="row justify-content-center wow fadeIn fast">
                      <h5 className="text-center text-grey font-light w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum iusto nobis quisquam exercitationem iste? Fuga, harum. Aliquid, iste.</h5>
                    </div>
                    {this.props.button &&
                    <div className="row justify-content-center pt-5">
                      <li className="projects active"><a className="mt-5 btn--default btn--yellow text-uppercase text-white">{this.props.buttontext}</a></li>
                    </div>
                    }
                  </div>
                </div>   
            </div>
            {this.props.children}
          </div>
        </div>
      </div>     
      );
  }

  }
};


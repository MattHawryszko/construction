import React, { Component } from 'react';

import Tracks from "../img/tracks.jpg"

export default class App extends Component {
render() {
    return (
      <div id="accordion">
              <div class="card">
                <div class="card-header p-1" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link text-black font-weight-bold" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Donec rutrum congue leo eget malesuada?
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show text-black " aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincid
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-1" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed text-black font-weight-bold" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Vivamus suscipit tortor eget felis porttitor volutpat?
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincid
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-1" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed text-black font-weight-bold" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Curabitur non nulla sit amet nisl tempus?
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincid
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-1" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link text-black font-weight-bold" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    Pellentesque in ipsum id orci porta dapibus?
                    </button>
                  </h5>
                </div>

                <div id="collapseFour" class="collapse text-black" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body">
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincid
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header p-1" id="headingFive">
                  <h5 class="mb-0">
                    <button class="btn btn-link text-black font-weight-bold" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    Curabitur non nulla sit amet nisl?
                    </button>
                  </h5>
                </div>

                <div id="collapseFive" class="collapse text-black" aria-labelledby="headingFive" data-parent="#accordion">
                  <div class="card-body">
                  Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincid
                  </div>
                </div>
              </div>
            </div>
      );
  }
};


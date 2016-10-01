import React, { Component } from 'react';
import PickDetails from './PickDetails';

export default class RoverMain extends Component {
  constructor() {
    super();

    

  }

  render() {

    return (
      <div>
        <div className="row">

          <div className="col-md-3" id="leftCol">
            <h1>Rover Info</h1>
          </div>

          <div className="col-md-9" id="mainCol">
            <br/>
            <PickDetails/>

            <h1>Gallery</h1>
          </div>
        </div>



      </div>
    )
  }
}

import React, { Component } from 'react';
import PickDetails from './PickDetails';
import RoverGallery from './RoverGallery';
import RoverInfo from './RoverInfo';

export default class RoverMain extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3" id="leftCol">
          <RoverInfo rover={this.props.params.rover}/>
        </div>
        <div className="col-md-9" id="mainCol">
          <br/>
          <PickDetails rover={this.props.params.rover}/>
          <RoverGallery/>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import CameraDateInfo from './CameraDateInfo';

export default class PickDetails extends Component {
  constructor(props) {
    super(props);
    
    this.pickCamera = this.pickCamera.bind(this);
  }

  pickCamera(){
    console.log(CameraDateInfo.getInfo('curiosity'));
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            Pick Date<br/>
          <input type="date" name="bday"/>
        </div>
        <div className="col-sm-6">
          Pick Camera
          <span className="glyphicon glyphicon-camera"></span>
          <br/>
          <div className="btn-group">
            <button type="button" className="btn btn-default">Action</button>
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a onClick={this.pickCamera} href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
}

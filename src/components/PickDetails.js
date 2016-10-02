import React, { Component } from 'react';
import CameraDateInfo from './CameraDateInfo';
import RoverActions from '../actions/RoverActions';
import uuid from 'uuid';

export default class PickDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateCurr: '',
      rover: props.rover,
      camera: 'Pick Camera'
    }

    this.pullPics = this.pullPics.bind(this);
  }

  componentDidUpdate(){
    if(this.props.rover != this.state.rover){
      this.refs.date.value = '';
      RoverActions.clearPictures();

      this.setState({
        dateCurr: '',
        rover: this.props.rover,
        camera: 'Pick Camera'
      })
    }
  }

  pullPics(e){
    let {date} = this.refs;
    let {dateCurr} = this.state;

    if(date.value){
      if(date.value != dateCurr){
        RoverActions.clearPictures();
        RoverActions.pullPics(this.props.rover,date.value);
      }

      RoverActions.setCamera(e.currentTarget.id);
      this.setState({
        dateCurr: date.value,
        camera: e.currentTarget.id
      })

    }else{
      alert('Please Choose Date');
    }
  }

  render() {
    const roverInfo = CameraDateInfo.getInfo(this.props.rover);
    const {cameras,dateStart,dateEnd} = roverInfo;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <br/>
          Pick Date:&nbsp;
          <input style={{"color":"black"}} ref="date" type="date" min={dateStart} max={dateEnd}/>
        </div>
        <div className="col-sm-2">
          <br/>
          <div className="btn-group">
            <button type="button" className="btn btn-default">
              {this.state.camera}&nbsp;
              <span className="glyphicon glyphicon-camera"></span>
            </button>
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {cameras.map(camera => (
                <li key={uuid()}><a id={camera} onClick={this.pullPics}>{camera}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
}

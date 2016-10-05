import React, { Component } from 'react';
import RoverBios from './RoverBios';

export default class RoverInfo extends Component {
  constructor() {
    super();

  }

  render() {
    let rover = RoverBios.getBio(this.props.rover);


    return (
      <div id='roverText'>
        <h2>Rover Info</h2>
        <div id="img">
          <img src={rover.src}/>
        </div>
        <div id='roverInfoText'>
          {rover.info}
        </div>
      </div>
    )
  }
}

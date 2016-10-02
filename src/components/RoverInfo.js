import React, { Component } from 'react';
import RoverBios from './RoverBios';

export default class RoverInfo extends Component {
  constructor() {
    super();

  }

  render() {
    let roverInfo = RoverBios.getBio(this.props.rover).info;


    return (
      <div>
        <h1>Rover Info</h1>
        <div>
          {roverInfo}
        </div>
      </div>
    )
  }
}

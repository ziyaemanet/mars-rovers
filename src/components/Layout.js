import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div className='container' id="banner">
        <h1 className='text-center'>Mars Rover Photos</h1>
        <div className="row">
          <ul className="nav nav-tabs">
            <li role="presentation">
              <Link to='/'>Mission Control</Link>
            </li>
            <li role="presentation">
              <Link to='/rover/curiosity'>Curiosity</Link>
            </li>
            <li role="presentation">
              <Link to='/rover/opportunity'>Opportunity</Link>
            </li>
            <li role="presentation">
              <Link to='/rover/spirit'>Spirit</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

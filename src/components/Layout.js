import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <div id="banner" className="row">
          <span className='text-center' id="page-title">Mars Rover Photos</span>
          <img id="marsSpin" src="http://i.imgur.com/HRcDUQp.gif" />
        </div>

        <div className="row">
          <ul className="nav nav-tabs">
            <li role="presentation">
              <Link to='/' className= {this.props.params.rover == undefined ? "btn btn-default" : null}>Mission Control</Link>
            </li>
            <li role="presentation">
              <Link to='/rover/curiosity' activeClassName= "btn btn-default">Curiosity</Link>
            </li>
            <li role="presentation">
              <Link to='/rover/opportunity' activeClassName= "btn btn-default">Opportunity</Link>
            </li>
            <li role="presentation">
              <Link to='/rover/spirit' activeClassName= "btn btn-default">Spirit</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

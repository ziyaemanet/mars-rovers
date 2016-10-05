import React from 'react'
import {render} from 'react-dom'
import {Router,Route,browserHistory,IndexRoute} from 'react-router';

import Layout from './components/Layout';
import MissionControl from './components/MissionControl';
import RoverMain from './components/RoverMain';


import './stores/RoverStore';

render(
  <div>
    <div id="background"></div>
    <div id="content">
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={MissionControl}></IndexRoute>
          <Route path="/rover/:rover" component={RoverMain}></Route>
        </Route>
      </Router>
    </div>
  </div>,
  document.getElementById('root')
);

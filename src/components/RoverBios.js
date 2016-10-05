import React from 'react';

const bio = {
  curiosity: {
    src: 'http://i.imgur.com/kwsDif7.jpg',
    info: (<h4>
      <h3>Curiosity</h3>
<ul className="a">
  <li>17 cameras</li>
  <li>10 other scientific instruments</li>
  <li>Powered by a radioisotope thermoelectric generator</li>
  <li>Cost $2.5 billion</li>
  <li>Able to move at 30 meters per hour depending on the terrain</li>
</ul>
      </h4>)
  },
  opportunity: {
    src: 'http://i.imgur.com/FtfOaCB.jpg',
    info: (<h4>
      <h3>Opportunity</h3>
<ul className="a">
  <li>One of Opportunity’s main mission objectives was to search for and
  characterize a variety of rocks and soils that hold clues to past water activity on Mars.</li>
  <li>The rover has driven approximately 26 miles (42 km) since it landed on Mars on January 25, 2004.</li>
  <li>Powered by a radioisotope thermoelectric generator</li>
  <li>The rover goes into a power “sleep” mode when not in use. Data is stored in its memory
  and is relayed Earthward before sleep because it is lost when the power goes off.</li>
  <li>Opportunity recently captured a panoramic photograph on one of the highest points
  of Mars, named “Cape Tribulation.”</li>
</ul>
      </h4>)
  },
  spirit: {
    src: 'http://i.imgur.com/HzteuZL.jpg',
    info: (<h4>
      <h3>Spirit</h3>
<ul className="a">
  <li>Search for and characterize a variety of rocks and soils that hold clues to past water activity.</li>
  <li>Determine the distribution and composition of minerals, rocks, and soils surrounding the landing sites.</li>
  <li>Determine what geologic processes have shaped the local terrain and influenced the chemistry.</li>
  <li>Perform calibration and validation of surface observations made by Mars Reconnaissance Orbiter instruments.</li>
  <li>Assess whether those environments were conducive to life.</li>
</ul>
      </h4>)
  }
};

const RoverBios = {
  getBio(rover){
    return bio[rover];
  }
}

export default RoverBios;

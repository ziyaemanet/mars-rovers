import React, { Component } from 'react';


export default class MissionControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {/* <div id="mars_2"></div> */}
        <h1>Mission Control</h1>
        <h3>Mars Information</h3>

        <p>The solar day, by contrast, is the time it takes for the Earth to rotate
          on its axis so that the Sun appears in the same position in the sky. This
          position changes slightly each day, but on Earth, a mean solar dayworks out
          to being 24 hours long. On Mars, a solar day lasts 24 hours, 39 minutes, and 35 seconds.
        </p>
        <br/>
        <br/>

        <p>Mars is the fourth planet from the Sun and is the second smallest planet
          in the solar system. <sp id="status"><img src="http://i.imgur.com/gPnUOBy.jpg" alt="solar system"/></sp>
        It is named after the Roman god of war, Mars is also often
        described as the “Red Planet” due to its reddish appearance. Mars is a terrestrial
        planet with a thin atmosphere composed primarily of carbon dioxide.
      </p>



      <br/>
      <h3>Mars Planet Profile</h3>

      <ul className="a">
        <li>Equatorial Diameter:	6,792 km</li>
        <li>Polar Diameter:	6,752 km</li>
        <li>Mass:	6.42 x 10^23 kg (10.7% Earth)</li>
        <li>Moons:	2 (Phobos & Deimos)</li>
        <li>Orbit Distance:	227,943,824 km (1.52 AU)</li>
        <li>Orbit Period:	687 days (1.9 years)</li>
        <li>Surface Temperature:	-153 to 20 °C</li>
        <li>First Record:	2nd millennium BC</li>
        <li>Recorded By:	Egyptian astronomers</li>
      </ul>
      <br/>
      <br/>
      <br/>

      <h3>Facts About Mars</h3>

      <ul  className='b'>
        <li>Mars and Earth have approximately the same landmass. Even though Mars has
          only 15% of the Earth’s volume and just over 10% of the Earth’s mass, around
          two thirds of the Earth’s surface is covered in water. Martian surface gravity
          is only 37% of the Earth’s (meaning you could leap nearly three times higher on Mars).
        </li>
        <li>Mars is home to the tallest mountain in the solar system. Olympus Mons, a
          shield volcano, is 21km high and 600km in diameter. Despite having formed over
          billions of years, evidence from volcanic lava flows is so recent many scientists
          believe it could still be active.
        </li>
        <li>Only 18 missions to Mars have been successful. As of September 2014 there have
          been 40 missions to Mars, including orbiters, landers and rovers but not counting
          flybys. The most recent arrivals include the Mars Curiosity mission in 2012, the
          MAVEN mission, which arrived on September 22, 2014, followed by the Indian Space
          Research Organization’s MOM Mangalyaan orbiter, which arrived on September 24, 2014.
          The next missions to arrive will be the European Space Agency’s ExoMars mission,
          comprising an orbiter, lander, and a rover, followed by NASA’s InSight robotic lander
          mission, slated for launch in March 2016 and a planned arrival in September, 2016.
        </li>
        <li>Mars has the largest dust storms in the solar system. They can last for months
          and cover the entire planet. The seasons are extreme because its elliptical (oval-shaped)
          orbital path around the Sun is more elongated than most other planets in the solar system.
        </li>
        <li>On Mars the Sun appears about half the size as it does on Earth. At the closest point
          to the Sun, the Martian southern hemisphere leans towards the Sun, causing a short,
          intensely hot summer, while the northern hemisphere endures a brief, cold winter: at its
          farthest point from the Sun, the Martian northern hemisphere leans towards the Sun, causing
          a long, mild summer, while the southern hemisphere endures a lengthy, cold winter.
        </li>
        <li>Pieces of Mars have fallen to Earth. Scientists have found tiny traces of Martian
          atmosphere within meteorites violently ejected from Mars, then orbiting the solar system
          amongst galactic debris for millions of years, before crash landing on Earth. This allowed
          scientists to begin studying Mars prior to launching space missions.
        </li>
        <li>Mars takes its name from the Roman god of war. The ancient Greeks called the planet Ares,
          after their god of war; the Romans then did likewise, associating the planet’s blood-red colour
          with Mars, their own god of war. Interestingly, other ancient cultures also focused on colour –
          to China’s astronomers it was ‘the fire star’, whilst Egyptian priests called on ‘Her Desher’,
          or ‘the red one’. The red colour Mars is known for is due to the rock and dust covering
          its surface being rich in iron.
        </li>
        <li>There are signs of liquid water on Mars. For years Mars has been known to have water in the
          form of ice. The first signs of trickling water are dark stripes or stains on crater wall and
          cliffs seen in satellite images. Due to Mars’ atmosphere this water would have to be salty to
          prevent it from freezing or vaporising.
        </li>
        <li>One day Mars will have a ring. In the next 20-40 million years Mars’ largest moon Phobos
          will be torn apart by gravitational forces leading to the creation of a ring that could last
          up to 100 million years.
        </li>
      </ul>
    </div>
  )
}
}

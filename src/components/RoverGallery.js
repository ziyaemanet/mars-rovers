import React, { Component } from 'react';
import RoverStore from '../stores/RoverStore';

import Gallery from 'react-grid-gallery';


export default class RoverGallery extends Component {
  constructor() {
    super();

    this.state = {
      pictures: RoverStore.getPictures(),
      camera: RoverStore.getCamera()
      //picsBlock: 0
    }

    this._onChange = this._onChange.bind(this);
    //this.scrollPics = this.scrollPics.bind(this);
  }

  componentWillMount(){
    RoverStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    RoverStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      pictures: RoverStore.getPictures(),
      camera: RoverStore.getCamera()
    })
  }

  // scrollPics(e){
  //   switch (e.currentTarget.id) {
  //     case 'up':
  //
  //       break;
  //     case 'down':
  //
  //       break;
  //     default:
  //       console.log('INVALID ID')
  //       break;
  //   }
  // }


  render() {

    const {pictures,camera} = this.state;
    let hasPictures;

    if (pictures.length)  {
      hasPictures = "No pictures for this camera.";
    } else {
      hasPictures = "No picures for this date.";
    }
    let images = [];

    pictures.forEach((picture, index) => {
      if(picture.camera.name == camera && index < 50){
        images.push({
          src: picture.img_src,
          thumbnail: picture.img_src,
          thumbnailWidth: 150,
          thumbnailHeight: 150,
          caption: picture.camera.full_name
        });
      }
    });

    return (
        <div>
        <div className="row">
        {images.length ? <Gallery images={images}/> : hasPictures}
        </div>
          <div className="row">
            <div id="roverGallery" className="col-sm-12"><h1>Gallery</h1></div>
          </div>
        </div>
    )
  }
}

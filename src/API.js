import ServerActions from './actions/ServerActions';
import { get } from 'axios'

const API = {
  pullPics(rover,date){
    get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=80iZHoydfkqZocT9j9R0fOvU8mF4CcbmrdGFqQIx`)
    .then(res =>  {
      ServerActions.recievePictures(res.data.photos);
    })
    .catch(err => {
      console.log('err:', err);
      ServerActions.recievePictures([]);

    })
  }
}

export default API;

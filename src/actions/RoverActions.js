import API from '../API';
import AppDispatcher from '../AppDispatcher';

const RoverActions = {
  pullPics(rover,date){
    API.pullPics(rover,date);
  },

  setCamera(camera){
    AppDispatcher.dispatch({
      type: 'SET_CAMERA',
      payload: {camera}
    })
  },

  clearPictures(){
    AppDispatcher.dispatch({
      type: 'CLEAR_PICTURES'
    })
  },


}

export default RoverActions;

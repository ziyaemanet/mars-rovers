import AppDispatcher from '../AppDispatcher';

const ServerActions = {

  recievePictures(pictures){
    AppDispatcher.dispatch({
      type: 'RECIEVE_PICTURES',
      payload: {pictures}
    })
  }
}

export default ServerActions;

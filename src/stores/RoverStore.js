import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _pictures = [];
let _camera = '';


class RoverStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECIEVE_PICTURES':
          _pictures = action.payload.pictures;
          this.emit('CHANGE');
          break;
        case 'SET_CAMERA':
          _camera = action.payload.camera;
          this.emit('CHANGE');
          break;
        case 'CLEAR_PICTURES':
          _pictures = [];
          _camera = '';
          this.emit('CHANGE');
          break;
        default:
          console.log('INVALID_ACTION_TYPE');
          break;
      }
    });
  }

  startListening(callback){
    this.on('CHANGE',callback)
  }

  stopListening(callback){
    this.removeListener('CHANGE',callback);
  }

  getPictures(){
    return _pictures;
  }

  getCamera(){
    return _camera;
  }


}

export default new RoverStore();

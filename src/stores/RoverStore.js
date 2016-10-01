import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _symbols = [];
let _quote = {};

class StockStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECIEVE_SYMBOLS':
          _symbols = action.payload.symbols;
          this.emit('CHANGE');
          break;
        case 'RECIEVE_QUOTE':
          _quote = action.payload.quote;
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

  getSymbols(){
    return _symbols;
  }

  getQuote(){
    return _quote;
  }

}

export default new StockStore();

import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  recieveSymbols(symbols){
    AppDispatcher.dispatch({
      type: 'RECIEVE_SYMBOLS',
      payload: {symbols}
    })
  },

  recieveQuote(quote){
    AppDispatcher.dispatch({
      type: 'RECIEVE_QUOTE',
      payload: {quote}
    })
  }
}

export default ServerActions;

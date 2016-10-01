import API from '../API';

const StockActions = {
  fetchSymbols(company){
    API.fetchSymbols(company);
  },

  fetchQuote(symbol){
    API.fetchQuote(symbol);
  }
}

export default StockActions;

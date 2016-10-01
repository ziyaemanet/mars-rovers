import jsonp from 'jsonp';

import ServerActions from './actions/ServerActions';

const API = {
  fetchSymbols(company){
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${company.replace(/ /g,'_')}`,(err,data) => {
      ServerActions.recieveSymbols(data);
    });
  },

  fetchQuote(symbol){
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`,(err,data) => {
      ServerActions.recieveQuote(data);
    });
  }
}

export default API;

const currency = {
 cad: 1.5,
 usd: 0.5,

 CadToUsd(amount) {
   return(amount * this.cad);
  },

 UsdToCad(amount) {
   return(amount * this.usd)
 },

setRate(rateName, rateValue){
  switch(rateName){
    case 'CadToUsd':
      this.cad = rateValue;
      return true;
      
    case 'UsdToCad':
      this.usd = ratevalue;
      return false;

    default:
      return false;
 }
  
},
getRate(rateName) {
  switch(rateName){
    case 'CadToUsd':
    return this.cad

    case 'UsdToCad':
    return this.usd

    default:
    return undefined;

  }
}

}

module.exports = currency;

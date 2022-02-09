export default class CryptoService {
  static getCrypto() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?ids=BTC,ETH,USDT&key=${API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  converter(body, number) {
const btc =parseFloat(body[0].price)
  }
}

//https://api.nomics.com/v1/currencies/ticker?ids=BTC,ETH,USDT&key=${API_KEY}
//

//getCrypto parameter crypto?
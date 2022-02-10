export default class CryptoService {
  static getCrypto(searchParams) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}${searchParams}`;
      
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
}
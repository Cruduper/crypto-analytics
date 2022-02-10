import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service.js';


function converter(body, number, chosenCrypto) {
  let btc = parseFloat(body[0].price);
  let eth = parseFloat(body[1].price);
  let usdt = parseFloat(body[2].price);
  if (chosenCrypto === "Bitcoin"){
    return number/btc;
  }
  else if (chosenCrypto === "Ethereum"){
    return number/eth;
  }
  else if(chosenCrypto === "Tether"){
    return number/usdt;
  }
  else  {
    alert("error, incorrect crypto chosen");
  }
}

$(document).ready(function() {
  let promise = CryptoService.getCrypto();
  promise.then(function(response) {
    const body = JSON.parse(response);
    $("#rank1").
  })
  $("#exchange").click(function() {
    let promise = CryptoService.getCrypto();
    promise.then( function(response) {
      const body = JSON.parse(response);
      let chosenCrypto = $("#cryptocurrencies").val();
      let number = $("#usd").val();

      let convertedCurrency = converter(body, number, chosenCrypto);
    
      if ( number === "" ) {
        $(".showErrors").html("Please enter a valid number.");
        $(".showErrors").show();
        $(".showCrypto").hide();
      }
      else  {
        $("#chosen-crypto").text(chosenCrypto);
        $("#crypto-amount").text(convertedCurrency);
        $(".showCrypto").show();
        $(".showErrors").hide();
      }

    }, function(error){
      console.log(error);
    })
  })
})
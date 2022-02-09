import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './js/crypto-service.js';




$(document).ready(function() {
  $("#exchange").click(function() {
    let promise = CryptoService.getCrypto();
    
    promise.then( function(response) {
      const body = JSON.parse(response);
      $(".showCrypto").show();
      

  })
});
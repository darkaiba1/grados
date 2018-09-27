/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

function celsius(conversor) {
    var num1=document.getElementById('num1').value;
  var c= parseInt(num1);
 // alert(conversor);
  switch(conversor){
      case "C":
      var cambio=c;
      break;
      case "F":
      var cambio=(5*(c-32))/9;
      break;
      case "K":
     
      var cambio=c-273.15;
      break;
  }
  window.location.href = "resultado.html?"+cambio;
  document.getElementById('sumar').innerHTML=suma;
  }
  function fahrenheit(conversor) {
    var num1=document.getElementById('num1').value;
  var f= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "C":
      var cambio=((9*f)/5)+32;
      break;
      case "F":
    var cambio=f;
      break;
      case "K":

      var cambio=((9*(f-273.15))/5)+32;
      break;
  }
  window.location.href = "resultado.html?"+cambio;
  document.getElementById('restar').innerHTML=suma;
  }
  function kelvin(conversor) {
    var num1=document.getElementById('num1').value;
  var k= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "C":
      var cambio=(k+273.15);
      break;
      case "F":
      
      var cambio=((5*(k-32))/9)+273.15;
      break;
      case "K":
      var cambio=k;
      break;
  }
  window.location.href = "resultado.html?"+cambio;
  document.getElementById('multiplicar').innerHTML=suma;
  }
  

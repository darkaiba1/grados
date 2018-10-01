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
  window.location.href = "resultado.html?"+cambio+"?celsius";
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
  window.location.href = "resultado.html?"+cambio+"?fahrenheit";
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
  window.location.href = "resultado.html?"+cambio+"?kelvin";
  }
  function pulgada(conversor) {
    var num1=document.getElementById('num1').value;
  var p= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "P":
      var cambio=p;
      break;
      case "M":
      var cambio=p*0.0254;
      break;
      case "Y":
      var cambio=p*0.0277778;
      break;
  }
  window.location.href = "resultado.html?"+cambio+"?pulgada";
  }
  function metro(conversor) {
    var num1=document.getElementById('num1').value;
  var m= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "M":
      var cambio=m;
      break;
      case "P":
      var cambio=m*39.3701;

      break;
      case "Y":
      var cambio=m*1.09361;
      break;
  }
  window.location.href = "resultado.html?"+cambio+"?metro";
}
  function yarda(conversor) {
    var num1=document.getElementById('num1').value;
  var y= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "M":
      var cambio=y*0.9144;
      break;
      case "P":
      var cambio=y*36;
      break;
      case "Y":
      var cambio=y;
      break;
  }
  window.location.href = "resultado.html?"+cambio+"?yarda";
  }
  function kilo(conversor) {
    var num1=document.getElementById('num1').value;
  var k= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "K":
      var cambio=k;
      break;
      case "S":
      var cambio=k*14.6;
      break;
      case "L":
      var cambio=k*0.454;
      break;
  }
  window.location.href = "resultado.html?"+cambio+"?kilo";
  }
  function slug(conversor) {
    var num1=document.getElementById('num1').value;
  var s= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "K":
      var cambio=s*0.0685;
      break;
      case "S":
      var cambio=s;
      break;
      case "L":
      var cambio=s*0.0031154;
      break;
  }
  window.location.href = "resultado.html?"+cambio+"?slug";
  }
  function libra(conversor) {
    var num1=document.getElementById('num1').value;
  var l= parseInt(num1);
  //alert(conversor);
  switch(conversor){
      case "K":
      var cambio=l*2.2;
      break;
      case "S":
      var cambio=l*32.098;
      break;
      case "L":
      var cambio=l;
      break;
  }
  window.location.href = "resultado.html?"+cambio+"?libra";
  }
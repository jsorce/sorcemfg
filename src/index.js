// import "../dist/index.html";
import 'bulma';
import './style.sass';
// Immediately invoked function expression isolates code from global scope
(function(document, window) {
  // no global variables
  'use strict';
  var menuTog = document.querySelector('.navbar-burger');
  var mcl = document.querySelector('#navbarMenuHeroA').classList;

  menuTog.addEventListener('click', function() {
    // On click if the menu has the class is-active remove it else add it
    mcl.contains('is-active') ? 
    mcl.remove('is-active') : 
    mcl.add('is-active') 
  })
  // Locally scope document and window
}(document, window))
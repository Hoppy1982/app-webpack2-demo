//home.js

var pug = require('../../views/home.pug');
var css = require('../stylesheets/home.scss');
var myTestModule = require('./my-front-end-modules/my-test-module.js');

console.log('Hi from home.bundle.js');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  assignOnClicks()
});

function assignOnClicks() {
  var button1 = document.getElementById('button1');

  button1.addEventListener('click', function(){
    myTestModule.sayHi();
  });
}

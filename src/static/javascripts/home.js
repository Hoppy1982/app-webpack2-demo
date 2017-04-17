//home.bundle.js

var pug = require('../../views/home.pug');
var css = require('../stylesheets/home.scss');
var myTestModule = require('./my-front-end-modules/my-test-module.js');

console.log('Hi from home.bundle.js');

//Webpack defaults to not exposing functions globally and need to confirm DOM is hot to trot
//before trying to bugger about with it. Using onclicks in buttons all went to shit.
//Me, use event listeners for everything.
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

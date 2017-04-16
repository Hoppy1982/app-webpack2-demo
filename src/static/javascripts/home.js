//home.js

console.log('loaded home.bundle.js');

function test() {
  console.log('words words words');
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var button1 = document.getElementById('button1');
    button1.addEventListener('click', function(){
      console.log('words');
    });
  });

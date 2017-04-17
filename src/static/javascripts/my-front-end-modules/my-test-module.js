//my-test-module.js

module.exports.sayHi = function() {
  var msgBox = document.getElementById('msgBox');

  msgBox.innerHTML = 'Hi me from a module!';
  console.log('typing hapiily away nah nah nah');
}

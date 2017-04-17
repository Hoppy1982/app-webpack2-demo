//my-test-module.js

//Basic module to prove that browser side modules are working.
module.exports.sayHi = function() {
  var msgBox = document.getElementById('msgBox');

  msgBox.innerHTML = 'Hi me from a module!';
  console.log('typing hapiily away nah nah nah');
}

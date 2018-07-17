document.addEventListener("DOMContentLoaded", function() {

// assign variable to objects we will be using for showing form
var signIn = document.querySelector('.signin');
var form = document.querySelector('.modal');

console.log(form);

signIn.addEventListener('click', function() {
  form.style.display = 'block';
});

// closing form
var closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function() {
  form.style.display = 'none';
});

// error on user and pass when click on submit button

var user = document.getElementsByName("user")[0];
var pass = document.getElementsByName("pass")[0];
var submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function() {
  user.classList.add('error');
  pass.classList.add('error');
});


});

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
})



});

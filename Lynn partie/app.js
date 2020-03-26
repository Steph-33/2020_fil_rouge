function myFunction(x) {
    x.classList.toggle('change');
}

var menu = document.querySelector('nav');
var bouton = document.querySelector('.burger');
var links = document.querySelectorAll('nav a');

bouton.addEventListener('click', function() {
    menu.classList.toggle('nav-open');
});

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        menu.classList.remove('nav-open');
    });
}
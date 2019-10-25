/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/

var filterbutton = document.querySelector('#toon');
var filters = document.querySelector('#filter');

function filterlijst() {
    filters.classList.toggle("show");
}

filterbutton.addEventListener('click', filterlijst);
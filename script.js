// Exercise 1: 
// make toggle equal the item with the class 'toggle'
// and menu equal the item with the class 'menu'
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


// Exercise 2:
// make a function called 'toggleMenu' that 
function toggleMenu(){
    console.log('working')
}

// writes 'working' to the console

// Exercise 3:
toggle.addEventListener("click", toggleMenu);
// Add an event listener to the toggle element
// to run the toggleMenu function
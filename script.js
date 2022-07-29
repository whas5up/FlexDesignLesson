// Exercise 1: 
// make toggle equal the item with the class 'toggle'
// and menu equal the item with the class 'menu'
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


// Exercise 2:
// make a function called 'toggleMenu' that 
function toggleMenu(){
        if(menu.classList.contains("active")){
        // the menu is already open, close it
        menu.classList.remove("active");
    } else {
        // the menu is closed, open it
        menu.classList.add("active");
    }
}
    

// writes 'working' to the console
function toggleMenu(){
    if(menu.classList.contains("active")){
    // the menu is already open, close it
    menu.classList.remove("active");
} else {
    // the menu is closed, open it
    menu.classList.add("active");
}
}

// Exercise 3:
toggle.addEventListener("click", toggleMenu);
// Add an event listener to the toggle element
// to run the toggleMenu function
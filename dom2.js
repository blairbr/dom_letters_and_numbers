let hamburgerMenu = document.getElementById("hamburger-menu");
let letters = document.querySelector(".letters"); //one with Id intro
let numbers = document.querySelector(".numbers");
let numbersLink = document.querySelector("#numbers-link");
let dropdownContent = document.querySelector(".dropdown-content");

hamburgerMenu.addEventListener('click', function() {
    console.log('yess there was a click');
    console.log("dropdowncontent",dropdownContent);
    dropdownContent.classList.toggle('hidden');
})

numbersLink.addEventListener('click', function() {
    console.log('clicked on numbers link');
    numbers.classList.toggle('hidden');
    letters.classList.toggle('hidden');    
})
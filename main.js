//Hamburger Menu
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-container");
const body = document.querySelector("body");


menuBtn.addEventListener("click", function() {
    menu.classList.toggle("change");
    menuBtn.classList.toggle("active");
    body.classList.toggle("overflow");
    
});

//sticky navbar
window.onscroll = function() {
    stickyFunction()
};
const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}




  
let dropDown = document.querySelector(".drop-down");
let navbar = document.querySelector(".header-background");
let clickClose = document.querySelector("i");

dropDown.addEventListener("click", function(e){
    navbar.classList.remove("close");
    navbar.classList.add(".open");
    dropDown.classList.add("close");
    dropDown.classList.remove("open");

    e.preventDefault();
})

clickClose.addEventListener("click",function(e){
    navbar.classList.add("close");
    navbar.classList.remove(".open");
    dropDown.classList.remove("close");
    dropDown.classList.add("open");
})

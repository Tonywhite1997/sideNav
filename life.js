let closeToggle = document.getElementById("closeToggle");
let openToggle = document.getElementById("openToggle");
let sideNav = document.getElementById("sideNav");
let header = document.getElementById("header");
let lightMode = document.getElementById("lightMode");
let darkMode = document.getElementById("darkMode");

closeToggle.addEventListener("click", function(){
    sideNav.style.left="-60rem";
    closeToggle.style.display="none";
    openToggle.style.display="flex";
    header.style.width="50px";
    header.style.backgroundColor="white";
    openToggle.style.color="black";
})

openToggle.addEventListener("click", function(){
    sideNav.style.left="0";
    sideNav.style.display="block"
    openToggle.style.display="none";
    closeToggle.style.display="flex";
    header.style.width="60vw"
    header.style.backgroundColor="rgb(20, 16, 14)"
})

darkMode.addEventListener("click", function(){
    document.body.style.backgroundColor="rgb(23, 21, 19)";
    darkMode.style.display="none";
    lightMode.style.display="flex";
    document.body.style.color="white";
    header.style.backgroundColor="rgb(23, 21, 19)";
})

lightMode.addEventListener("click", function(){
    document.body.style.backgroundColor="white";
    lightMode.style.display="none";
    darkMode.style.display="flex";
    document.body.style.color="black";
})
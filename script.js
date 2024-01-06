
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}


let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}


let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;


  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  
  function enableDarkMode() {
    body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; 
    localStorage.setItem("darkMode", "enabled");
  }


  function disableDarkMode() {
    body.classList.remove("dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
    localStorage.setItem("darkMode", null);
  }
});
const openContactFormBtn = document.getElementById('open-contact-form');
  const closeContactFormBtn = document.getElementById('close-contact-form');
  const contactPopup = document.getElementById('contact-popup');

  openContactFormBtn.addEventListener('click', () => {
    contactPopup.classList.add('popup-active');
  });

  closeContactFormBtn.addEventListener('click', () => {
    contactPopup.classList.remove('popup-active');
  });
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",function(){
    navLinks.classList.toggle("active")
})

window.addEventListener("scroll",function(){

})
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

const roles = [
    "GIS Analyst",
    "Remote Sensing Professional",
    "WebGIS Enthusiast",
    "Geospatial Data Analyst"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        typingText.textContent =
            currentRole.substring(0,charIndex++);

        if(charIndex > currentRole.length){
            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }
    else{

        typingText.textContent =
            currentRole.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

            charIndex = 0;
        }

    }

    setTimeout(typeEffect,
        deleting ? 50 : 100);

}

typeEffect();

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});
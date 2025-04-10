var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "Web Designer"],
    typeSpeed: 100,
    backDelay: 1000,
    loop: true
});

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent"); // Ensure this value is available
    var percent = Math.floor(dots * marked / 100); // Calculate how many points should be marked
    var points = "";
    var rotate = 360 / dots; // Calculate angle for each point

    // Create the points
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points; // Append points to the element

    // Mark the correct number of points
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked'); // Add the 'marked' class to the appropriate number of points
    }
});


//mix it up portfolio
var mixer = mixitup('.portfolio-gallery');


let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

//sticky navbar------------
const header = document.querySelectorAll("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50)
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollBottom.forEach((e1) => Observer.oberve(e1));


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollScale.forEach((e1) => Observer.oberve(e1));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((e1) => Observer.oberve(e1));


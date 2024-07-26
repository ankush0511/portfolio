var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Data Analyst", "Machine Learning Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Define the strings for titles and descriptions
const titles = [
  "Frontend Developer",
  "Data Analyst",
  "Machine Learning Engineer",
];
const descriptions = [
  "Crafting responsive, user-centric interfaces that elevate the digital experience",
  "Uncovering actionable insights and driving data-informed decision-making",
  "Developing predictive models and intelligent systems that drive business outcomes",
];

let titleIndex = 0;

// Initialize Typed.js for the title text
let typedText = new Typed(".about-text .text", {
  strings: [titles[titleIndex]],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: false,
  onComplete: function () {
    // After title is completed, show the description
    showDescription();
  },
});

// Function to show the description
function showDescription() {
  // Initialize Typed.js for the description
  new Typed(".about-text .abouext", {
    strings: [descriptions[titleIndex]],
    typeSpeed: 20,
    backSpeed: 25,
    backDelay: 2000, // Delay before removing description
    loop: false,
    onComplete: function () {
      // Clear the description and move to the next title
      clearDescription();
    },
  });
}

function clearDescription() {
  setTimeout(() => {
    document.querySelector(".about-text .abouext").textContent = "";
    titleIndex = (titleIndex + 1) % titles.length;
    typedText = new Typed(".about-text .text", {
      strings: [titles[titleIndex]],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: false,
      onComplete: function () {
        showDescription();
      },
    });
  }, 1000);
}

var sm = document.getElementById("sidemenu");
function openmenu() {
  sm.style.right = "0";
}
function closemenu() {
  sm.style.right = "-200px";
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

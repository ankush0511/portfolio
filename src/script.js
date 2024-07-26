var typed = new Typed(".text",{
    strings:["Frontend Developer","Data Analyst","Machine Learning Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// Define the strings for titles and descriptions
const titles = ["Frontend Developer", "Data Analyst", "Machine Learning Engineer"];
const descriptions = [
    "Crafting responsive, user-centric interfaces that elevate the digital experience",
    "Uncovering actionable insights and driving data-informed decision-making",
    "Developing predictive models and intelligent systems that drive business outcomes"
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
    }
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
        }
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
            }
        });
    }, 1000); 
}




var sm=document.getElementById("sidemenu");
function openmenu(){
    sm.style.right="0";
}
function closemenu(){
    sm.style.right="-200px";
}
var typed = new Typed(".text",{
    strings:["Frontend Developer","Data Analyst","Machine Learning Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var typed = new Typed(".about-text .text",{
    strings:["Frontend Developer","Data Analyst","Machine Learning Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


var typed = new Typed(".about-text .abouext",{
    strings:["Crafting responsive, user-centric interfaces that elevate the digital experience",
        "Uncovering actionable insights and driving data-informed decision-making",
        "Developing predictive models and intelligent systems that drive business outcomes"],
    typeSpeed:20,
    backSpeed:25,
    backDelay:1000,
    loop:true
})
var sm=document.getElementById("sidemenu");
function openmenu(){
    sm.style.right="0";
}
function closemenu(){
    sm.style.right="-200px";
}
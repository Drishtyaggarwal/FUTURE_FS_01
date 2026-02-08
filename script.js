 
window.addEventListener("load",()=>{
    document.body.style.opacity ="1";
});

//hover effect on skills
const skills = document.querySelectorAll("ul li");

skills.forEach(skill =>{
    skill.addEventListener("mouseenter",()=>{
        skill.style.transform = "scale(1.1)";
        skill.style.transition = "0.3s";
    });
    skill.addEventListener("mouseleave",()=>{
        skill.style.transform = "scale(1)";
    });
});
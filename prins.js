const buttonMe = document.querySelector(".ri-menu-line");
const btn2 = document.querySelector("#menu");

buttonMe.addEventListener("click", ()=>{
    document.querySelector("#side-bar").style.display = "flex";
})
btn2.addEventListener("click", ()=>{
    document.querySelector("#side-bar").style.display = "none";
})

// javascript

const menuBtn = document.querySelector(".menu_btn");
const backBtn = document.querySelector(".back_btn");

const menu = document.querySelector("nav");

menuBtn.addEventListener("click", () =>
{
    menu.style.transform = "translateX(0)";
})

backBtn.addEventListener("click", () =>
{
    menu.style.transform = "translateX(-100%)";
})
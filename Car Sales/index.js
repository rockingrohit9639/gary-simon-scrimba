const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu_items");

menuBtn.addEventListener("click", () =>
{
    if (menu.style.display == "none")
    {
        menu.style.display = "block";
    }
    else
    {
        menu.style.display = "none";
    }
})

const handleSave = (e) =>
{
    if (e.target.src === "assets/save.svg")
    {
        e.target.src = "assets/save-filled.svg"
    } else
    {
        e.target.src = "assets/save.svg"
    }
}
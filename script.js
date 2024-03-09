const menuIcon = document.querySelector(".menu-icon");
let navList = document.querySelector(".navitem");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});
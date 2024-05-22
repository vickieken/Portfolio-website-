const menuBar = document.querySelector(".fa-bars");

const cancelBar = document.querySelector(".fa-times");

const navOption = document.querySelector(".navbar");

menuBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
})

cancelBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
})
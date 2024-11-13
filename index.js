const menuBar = document.querySelector(".fa-bars");

const cancelBar = document.querySelector(".fa-times");

const navOption = document.querySelector(".navbar");

const intro = document.querySelector(".intro");

const navLink = document.querySelectorAll(".nav-link");

// const fillWeb = document.querySelectorAll("");

menuBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
})

cancelBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
});

navLink.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
});

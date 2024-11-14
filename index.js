const menuBar = document.querySelector(".fa-bars");

const cancelBar = document.querySelector(".fa-times");

const navOption = document.querySelector(".navbar");

const intro = document.querySelector(".intro");

const navli = document.querySelectorAll(".nav-link");

// const fillWeb = document.querySelectorAll("");

menuBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
})

cancelBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
});

function closeBar() {
    navOption.classList.toggle("showbar");
};

function showOverlayAndScroll(event, link) {
    event.preventDefault();

    const overlay = document.querySelector(".black-overlay");
    const target = document.querySelector(link.getAttribute('href'));

    overlay.classList.add('show');

    setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
            overlay.classList.remove('show');
        }, 500);
    }, 500);
}
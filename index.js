const menuBar = document.querySelector(".fa-bars");

const cancelBar = document.querySelector(".fa-times");

const navOption = document.querySelector(".navbar");

const intro = document.querySelector(".intro");

const navli = document.querySelectorAll(".nav-link");

const scrollContainer = document.querySelector(".carousel");

const nextButn = document.querySelector(".fa-caret-right");

const backBtn = document.querySelector(".fa-caret-left");
// const fillWeb = document.querySelectorAll("");

menuBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
    backBtn.style.zIndex = "0";
    nextButn.style.zIndex = "0";
})

cancelBar.addEventListener("click", ()=> {
    navOption.classList.toggle("showbar");
    setTimeout(() => {
        backBtn.style.zIndex = "100";
        nextButn.style.zIndex = "100";
    }, 1000);
});

// backBtn.addEventListener('click', ()=> {
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -= 200;
// })

//  function nextBtn() {
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft += 200;
// };

console.log(nextBtn);
function closeBar() {
    navOption.classList.toggle("showbar");
    setTimeout(() => {
        backBtn.style.zIndex = "100";
        nextButn.style.zIndex = "100";
    }, 1000);

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

const cardWidth = scrollContainer.firstElementChild.offsetWidth + 5;

function nextBtn() {
    scrollContainer.scrollBy({
        left: cardWidth, behavior: 'smooth'
    });
}

backBtn.addEventListener('click', ()=> {
    scrollContainer.scrollBy({
        left: -cardWidth, behavior: 'smooth'
    });
});

console.log(nextButn);

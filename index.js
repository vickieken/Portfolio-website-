const menuBar = document.querySelector(".fa-bars");

const cancelBar = document.querySelector(".fa-times");

const navOption = document.querySelector(".navbar");

const intro = document.querySelector(".intro");

const navli = document.querySelectorAll(".nav-link");

const scrollContainer = document.querySelector(".carousel");

const nextButn = document.querySelector(".fa-caret-right");

const backBtn = document.querySelector(".fa-caret-left");
// const fillWeb = document.querySelectorAll("");


// Menu Bar Functionalities

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


// Testimonials text content

const testimonials = [
    {
        name: "Sarah H.",
        job: " CEO, TechFlow Solutions",
        image: "./imgs/testi-img1.jpg",
        testimonial: "Fantastic work! [Your Name] delivered a beautiful, responsive website that exceeded our expectations. The user experience is seamless, and the site looks amazing on all devices!",
    },
    {
        name: " John P.",
        job: "Marketing Manager, Visionary Brands",
        image: "./imgs/testi-img2.jpg",
        testimonial: "The design work was incredible! Victech brought our brand to life with creative and professional graphics. The results were exactly what we needed to stand out!",
    },
    {
        name: "Laura T.",
        job: "Product Lead, SnapTech",
        image: "./imgs/testi-img3.jpg",
        testimonial: "The new UI/UX design completely transformed our app. It’s easy to use, intuitive, and visually stunning. Our users love the update!",
    },
    {
        name: "Mark D.",
        job: "Founder, Bright Ideas Agency",
        image: "./imgs/testi-img4.jpg",
        testimonial: "Incredible attention to detail! [Your Name] helped us redesign our website with a focus on user experience. It’s now faster, more intuitive, and looks amazing!",
    }, 
    {
        name: "Emily G.",
        job: "Creative Director, Horizon Media",
        image: "./imgs/testi-img5.jpg",
        testimonial: "Working with [Your Name] was a game-changer. From web development to graphics and UI/UX design, they delivered everything we asked for, and more!",
    }, 
];

// TESTIMONIAL FUNCTIONALITY

// Current Slide

let i = 0;

// Total Slide
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");

let nextTestiBtn = document.getElementById("next");
let prevTestiBtn = document.getElementById("prev");

nextTestiBtn.addEventListener("click", ()=> {
    i = (j+i+1) % j;
    setTimeout(() => {
        displayTestimonial();
    }, 200);
})

prevTestiBtn.addEventListener("click", ()=> {
    i = (j+i-1) % j;
    setTimeout(() => {
        displayTestimonial();
    }, 200);
})

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src = ${testimonials[i].image}>
    <i class = "fa fa-quote-left"></i>
    <ul>
        <li><i class = "fa fa-star"></i></li>
        <li><i class = "fa fa-star"></i></li>
        <li><i class = "fa fa-star"></i></li>
        <li><i class = "fa fa-star"></i></li>
        <li><i class = "fa fa-star"></i></li>
    </ul>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    `;
};

displayTestimonial();

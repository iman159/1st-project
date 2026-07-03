// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ==============================
// HEADER SHADOW
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==============================
// HERO BUTTON ANIMATION
// ==============================

const buttons = document.querySelectorAll(".btn-blue, .btn-outline");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// ==============================
// CARD HOVER EFFECT
// ==============================

const cards = document.querySelectorAll(".work-card, .stat-box");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ==============================
// SIMPLE FADE ANIMATION
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".hero-left, .hero-right, .stat-box, .work-card")
.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".8s";

    observer.observe(el);

});
// ==============================
// FAQ ACCORDION
// ==============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});
// =====================================
// JOB SLIDER
// =====================================

const jobSlider = document.querySelector(".job-slider");
const nextBtn = document.querySelector(".job-next");
const prevBtn = document.querySelector(".job-prev");

if (jobSlider && nextBtn && prevBtn) {

    nextBtn.addEventListener("click", () => {

        jobSlider.scrollBy({

            left:380,

            behavior:"smooth"

        });

    });

    prevBtn.addEventListener("click", () => {

        jobSlider.scrollBy({

            left:-380,

            behavior:"smooth"

        });

    });

}
//==================================
// PAGE LOADER
//==================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.classList.add("hide");

        },700);

    }

});

//==================================
// SCROLL PROGRESS BAR
//==================================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

//==================================
// BACK TO TOP
//==================================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//==================================
// CUSTOM CURSOR
//==================================

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left=e.clientX+"px";
        cursor.style.top=e.clientY+"px";

    }

    if(cursor2){

        cursor2.style.left=e.clientX+"px";
        cursor2.style.top=e.clientY+"px";

    }

});

//==================================
// CURSOR HOVER EFFECT
//==================================

const hoverItems = document.querySelectorAll(

'a, button, .course-card, .trainer-card, .job-card, .why-card'

);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(cursor2){

            cursor2.style.width="65px";
            cursor2.style.height="65px";
            cursor2.style.borderColor="#27a8ff";

        }

    });

    item.addEventListener("mouseleave",()=>{

        if(cursor2){

            cursor2.style.width="40px";
            cursor2.style.height="40px";
            cursor2.style.borderColor="#27a8ff";

        }

    });

});

//==================================
// REVEAL ANIMATION
//==================================

const reveals = document.querySelectorAll(

".course-card,.trainer-card,.job-card,.why-card,.location-card,.partner-card,.success-card,.blog-card,.testimonial-card"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},

{

    threshold:.15

}

);

reveals.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s ease";

    revealObserver.observe(card);

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
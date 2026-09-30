// ========================================
// AMERIGO HR CONSULTING
// Premium Website
// ========================================

// ========================================
// HAMBURGER MENU
// ========================================

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('header')) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
});

// HEADER

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ========================================
// FADE IN
// ========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ========================================
// SMOOTH MENU
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ========================================
// COUNTER
// ========================================

const counters=document.querySelectorAll(".growth-number");

const speed=80;

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.innerText;

        let count=0;

        const inc=target/speed;

        const timer=setInterval(()=>{

            count+=inc;

            if(count>=target){

                counter.innerText=target;

                clearInterval(timer);

            }else{

                counter.innerText=Math.floor(count);

            }

        },15);

    }

    observer.observe(counter);

});

// ========================================
// PARALLAX HERO
// ========================================

const hero=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

    hero.style.transform=

    `translateY(${window.scrollY*0.20}px) scale(1.08)`;

});

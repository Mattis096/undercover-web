/* =========================
   ANIMATION AU SCROLL
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   MENU MOBILE
========================= */
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* =========================
   CAROUSEL DE CARTES (RÈGLES)
========================= */
const cards = document.querySelectorAll(".card");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let currentCard = 0;

function updateCards() {
    cards.forEach((card, index) => {
        const position = (index - currentCard + cards.length) % cards.length;

        card.classList.remove("active");

        if (position === 0) {
            card.classList.add("active");
        }

        card.style.zIndex = 10 - position;
        card.style.transform = `
            translateY(${position * 14}px)
            scale(${1 - position * 0.04})
        `;
        card.style.opacity = position < 3 ? 1 - position * 0.3 : 0;
    });
}

if (rightBtn) {
    rightBtn.addEventListener("click", () => {
        currentCard = (currentCard + 1) % cards.length;
        updateCards();
    });
}

if (leftBtn) {
    leftBtn.addEventListener("click", () => {
        currentCard = (currentCard - 1 + cards.length) % cards.length;
        updateCards();
    });
}

// Initialisation
if (cards.length > 0) {
    updateCards();
}

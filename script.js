// ==========================================================
// حرفِ راز — SCRIPT.JS
// Animated Urdu Novel Website
// ==========================================================


// ==========================================================
// 1. PAGE LOADER
// ==========================================================

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

        // Hero elements show after loader
        setTimeout(() => {
            revealVisibleElements();
        }, 300);

    }, 1600);

});


// ==========================================================
// 2. NAVBAR SCROLL EFFECT
// ==========================================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ==========================================================
// 3. MOBILE MENU
// ==========================================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ==========================================================
// 4. CLOSE MOBILE MENU WHEN LINK CLICKED
// ==========================================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ==========================================================
// 5. SCROLL REVEAL ANIMATION
// ==========================================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// Show elements already visible on screen
function revealVisibleElements() {

    revealElements.forEach((element) => {

        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50) {

            element.classList.add("visible");

        }

    });

}


// ==========================================================
// 6. ACTIVE NAVBAR LINK ON SCROLL
// ==========================================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ==========================================================
// 7. CREATE BACKGROUND STARS
// ==========================================================

const starsContainer = document.getElementById("stars");

function createStars() {

    if (!starsContainer) return;

    const starCount = 65;

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        // Random position
        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        // Random animation delay
        star.style.animationDelay =
            Math.random() * 5 + "s";

        // Random animation duration
        star.style.animationDuration =
            2 + Math.random() * 4 + "s";

        // Random size
        const size =
            1 + Math.random() * 2;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        starsContainer.appendChild(star);

    }

}

createStars();


// ==========================================================
// 8. BACK TO TOP BUTTON
// ==========================================================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================================================
// 9. SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================================

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetID =
            this.getAttribute("href");

        if (
            targetID === "#" ||
            targetID === ""
        ) {
            return;
        }

        const target =
            document.querySelector(targetID);

        if (target) {

            event.preventDefault();

            const headerHeight =
                header.offsetHeight;

            const targetPosition =
                target.offsetTop -
                headerHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});


// ==========================================================
// 10. HERO BOOK MOUSE MOVEMENT
// ==========================================================

const book =
    document.querySelector(".book");

const heroBookArea =
    document.querySelector(".hero-book-area");


if (book && heroBookArea) {

    heroBookArea.addEventListener(
        "mousemove",
        (event) => {

            // Stop CSS animation while mouse is moving
            book.style.animation = "none";

            const area =
                heroBookArea.getBoundingClientRect();

            const mouseX =
                event.clientX - area.left;

            const mouseY =
                event.clientY - area.top;

            const centerX =
                area.width / 2;

            const centerY =
                area.height / 2;

            const rotateY =
                ((mouseX - centerX) / centerX) * 12;

            const rotateX =
                -((mouseY - centerY) / centerY) * 8;


            book.style.transform = `
                rotateY(${rotateY}deg)
                rotateX(${rotateX}deg)
                translateY(-8px)
            `;

        }
    );


    heroBookArea.addEventListener(
        "mouseleave",
        () => {

            book.style.transform = "";

            book.style.animation =
                "bookFloat 5s ease-in-out infinite";

        }
    );

}


// ==========================================================
// 11. BACK COVER 3D MOUSE EFFECT
// ==========================================================

const backBook =
    document.querySelector(".back-book");

const backBookArea =
    document.querySelector(".back-book-area");


if (backBook && backBookArea) {

    backBookArea.addEventListener(
        "mousemove",
        (event) => {

            backBook.style.animation = "none";

            const area =
                backBookArea.getBoundingClientRect();

            const mouseX =
                event.clientX - area.left;

            const mouseY =
                event.clientY - area.top;

            const centerX =
                area.width / 2;

            const centerY =
                area.height / 2;

            const rotateY =
                ((mouseX - centerX) / centerX) * 10;

            const rotateX =
                -((mouseY - centerY) / centerY) * 7;


            backBook.style.transform = `
                rotateY(${rotateY}deg)
                rotateX(${rotateX}deg)
                translateY(-5px)
            `;

        }
    );


    backBookArea.addEventListener(
        "mouseleave",
        () => {

            backBook.style.transform = "";

            backBook.style.animation =
                "backBookFloat 6s ease-in-out infinite";

        }
    );

}


// ==========================================================
// 12. CHARACTER CARD 3D EFFECT
// ==========================================================

const characterCards =
    document.querySelectorAll(".character-card");


characterCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rectangle =
                card.getBoundingClientRect();

            const mouseX =
                event.clientX - rectangle.left;

            const mouseY =
                event.clientY - rectangle.top;

            const centerX =
                rectangle.width / 2;

            const centerY =
                rectangle.height / 2;

            const rotateX =
                ((mouseY - centerY) / centerY) * -3;

            const rotateY =
                ((mouseX - centerX) / centerX) * 3;


            card.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


// ==========================================================
// 13. QUOTE CARDS — SOFT LIGHT EFFECT
// ==========================================================

const quoteCards =
    document.querySelectorAll(".quote-card");


quoteCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            card.style.background = `

                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(215, 173, 98, 0.10),
                    rgba(215, 173, 98, 0.02) 35%,
                    transparent 65%
                )

            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background = "";

        }
    );

});


// ==========================================================
// 14. HERO PARALLAX EFFECT
// ==========================================================

const heroMoon =
    document.querySelector(".hero-moon");

const floatingFeather =
    document.querySelector(".floating-feather");


window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;


    // Only run near hero section
    if (scroll < window.innerHeight * 1.3) {

        if (heroMoon) {

            heroMoon.style.transform =
                `translateY(${scroll * 0.12}px)`;

        }

        if (floatingFeather) {

            floatingFeather.style.marginTop =
                scroll * 0.05 + "px";

        }

    }

});


// ==========================================================
// 15. IMAGE PARALLAX
// ==========================================================

const storyImage =
    document.querySelector(".story-image img");

window.addEventListener("scroll", () => {

    if (!storyImage) return;

    const imagePosition =
        storyImage.getBoundingClientRect();

    if (
        imagePosition.top < window.innerHeight &&
        imagePosition.bottom > 0
    ) {

        const movement =
            (window.innerHeight -
                imagePosition.top) * 0.015;

        storyImage.style.objectPosition =
            `center ${50 + movement}%`;

    }

});


// ==========================================================
// 16. RANDOM FLOATING GOLD DUST
// ==========================================================

function createGoldDust() {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;


    const dust =
        document.createElement("span");


    dust.style.position = "absolute";

    dust.style.width =
        Math.random() * 3 + 1 + "px";

    dust.style.height =
        dust.style.width;

    dust.style.borderRadius =
        "50%";

    dust.style.background =
        "#d7ad62";

    dust.style.pointerEvents =
        "none";

    dust.style.opacity =
        Math.random() * 0.5;

    dust.style.left =
        Math.random() * 100 + "%";

    dust.style.bottom =
        "-10px";

    dust.style.zIndex =
        "2";

    dust.style.boxShadow =
        "0 0 8px rgba(215,173,98,.5)";


    hero.appendChild(dust);


    const duration =
        5000 + Math.random() * 5000;


    dust.animate(

        [

            {
                transform:
                    "translateY(0px) translateX(0px)",

                opacity: 0
            },

            {
                opacity: 0.6,
                offset: 0.2
            },

            {
                transform:
                    `translateY(-${400 + Math.random() * 500}px)
                     translateX(${Math.random() * 100 - 50}px)`,

                opacity: 0
            }

        ],

        {

            duration: duration,

            easing: "linear"

        }

    );


    setTimeout(() => {

        dust.remove();

    }, duration);

}


// Create dust slowly
setInterval(createGoldDust, 650);


// ==========================================================
// 17. POETRY TEXT SOFT MOVEMENT
// ==========================================================

const poetry =
    document.querySelector(".poetry-content");


if (poetry) {

    window.addEventListener("mousemove", event => {

        const x =
            (event.clientX /
                window.innerWidth -
                0.5) * 8;

        const y =
            (event.clientY /
                window.innerHeight -
                0.5) * 8;


        poetry.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// ==========================================================
// 18. PAGE VISIBILITY
// Pause some effects when tab isn't active
// ==========================================================

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            document.body.classList.add(
                "page-hidden"
            );

        } else {

            document.body.classList.remove(
                "page-hidden"
            );

        }

    }
);


// ==========================================================
// 19. INITIAL CHECK
// ==========================================================

window.addEventListener(
    "DOMContentLoaded",
    () => {

        // Navbar initial state
        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        }


        // Back-to-top initial state
        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        }

    }
);


// ==========================================================
// 20. CONSOLE MESSAGE
// ==========================================================

console.log(
    "%c حرفِ راز ",
    "background:#21160e; color:#f1d59c; font-size:20px; padding:8px 15px;"
);

console.log(
    "ہر لفظ کے پیچھے ایک کہانی ہے۔۔۔"
);
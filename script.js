/* ============================================================
   FIREBASE CONFIGURATION
============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyC5mirQ_S3ALwKsDRnb0RDuKYJ2xC8XISw",
  authDomain: "abhijeetportfolio-739.firebaseapp.com",
  databaseURL: "https://abhijeetportfolio-739-default-rtdb.firebaseio.com",
  projectId: "abhijeetportfolio-739",
  storageBucket: "abhijeetportfolio-739.appspot.com",
  messagingSenderId: "442796985979",
  appId: "1:442796985979:web:fec842ab71b2a1197a5cde"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Realtime Database
const contactDB = firebase.database().ref("AbhijeetPortfolio");


/* ============================================================
   CONTACT FORM
============================================================ */

// Form Elements
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#contact-name");
const emailInput = document.querySelector("#contact-email");
const messageInput = document.querySelector("#contact-message");


// Return form values after validation
function getFormData() {

    if (!form.reportValidity()) {
        return null;
    }

    return {
        username: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };
}


// Send data to Firebase
document
    .querySelector("#send-message")
    .addEventListener("click", () => {

        const data = getFormData();

        if (!data) return;

        contactDB
            .push(data)
            .then(() => {

                alert("Message sent successfully!");

                form.reset();

            })
            .catch((error) => {

                console.error(error);

                alert("Failed to send message.");

            });

    });


/* ============================================================
   SEND EMAIL BUTTON
============================================================ */

document
    .querySelector("#send-email")
    .addEventListener("click", () => {

        const data = getFormData();

        if (!data) return;

        const subject = encodeURIComponent(
            `Portfolio enquiry from ${data.username}`
        );

        const body = encodeURIComponent(
`Hi Abhijeet,

${data.message}

From: ${data.username}
Email: ${data.email}`
        );

        location.href =
            `mailto:itsabhi739@gmail.com?subject=${subject}&body=${body}`;

    });


/* ============================================================
   HEADER HIDE ON SCROLL
============================================================ */

const header = document.querySelector("[data-header]");
let lastScroll = 0;

window.addEventListener(
    "scroll",
    () => {

        const currentScroll = window.scrollY;

        if (currentScroll > 120 && currentScroll > lastScroll) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }

        lastScroll = currentScroll;
    },
    { passive: true }
);


/* ============================================================
   MOBILE MENU
============================================================ */

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-center");

menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.innerHTML = isOpen
        ? '<i class="ri-close-line"></i>'
        : '<i class="ri-menu-3-line"></i>';

});


// Close menu after clicking a navigation link
document.querySelectorAll(".nav-center a").forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.innerHTML =
            '<i class="ri-menu-3-line"></i>';

    });

});


/* ============================================================
   CURSOR GLOW EFFECT
============================================================ */

const cursorGlow = document.querySelector(".cursor-glow");

if (
    matchMedia("(pointer:fine)").matches &&
    !matchMedia("(prefers-reduced-motion:reduce)").matches
) {

    let currentX = innerWidth / 2;
    let currentY = innerHeight / 2;

    let targetX = currentX;
    let targetY = currentY;

    addEventListener("pointermove", (event) => {

        targetX = event.clientX;
        targetY = event.clientY;

    });

    function animateGlow() {

        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        cursorGlow.style.left = currentX + "px";
        cursorGlow.style.top = currentY + "px";

        requestAnimationFrame(animateGlow);

    }

    animateGlow();

}


/* ============================================================
   REVEAL ANIMATION
============================================================ */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("in");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));


/* ============================================================
   CURRENT YEAR
============================================================ */

document.querySelector("#year").textContent =
    new Date().getFullYear();


/* ============================================================
   PROJECT CARD CLICK
============================================================ */

document
    .querySelectorAll("[data-project-url]")
    .forEach((card) => {

        function openProject() {

            window.open(
                card.dataset.projectUrl,
                "_blank",
                "noopener,noreferrer"
            );

        }

        card.addEventListener("click", (event) => {

            if (!event.target.closest("a,button")) {
                openProject();
            }

        });

        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                openProject();

            }

        });

    });


/* ============================================================
   CURSOR RING EFFECT
============================================================ */

const cursorRing = document.querySelector(".cursor-ring");

const isDesktop = matchMedia("(pointer:fine)").matches;
const reduceMotion = matchMedia("(prefers-reduced-motion:reduce)").matches;

if (isDesktop && !reduceMotion) {

    let currentX = innerWidth / 2;
    let currentY = innerHeight / 2;

    let targetX = currentX;
    let targetY = currentY;

    addEventListener("pointermove", (event) => {

        targetX = event.clientX;
        targetY = event.clientY;

    });

    function animateRing() {

        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;

        cursorRing.style.left = currentX + "px";
        cursorRing.style.top = currentY + "px";

        requestAnimationFrame(animateRing);

    }

    animateRing();

    // Magnetic buttons
    document.querySelectorAll("[data-magnetic]").forEach((element) => {

        element.addEventListener("mousemove", (event) => {

            const rect = element.getBoundingClientRect();

            const moveX =
                event.clientX - rect.left - rect.width / 2;

            const moveY =
                event.clientY - rect.top - rect.height / 2;

            element.style.transform =
                `translate(${moveX * 0.18}px, calc(${moveY * 0.35}px - 2px))`;

        });

        element.addEventListener("mouseenter", () => {

            cursorRing.classList.add("hover");

        });

        element.addEventListener("mouseleave", () => {

            element.style.transform = "translate(0,0)";

            cursorRing.classList.remove("hover");

        });

    });

    // Cursor hover effect
    document
        .querySelectorAll("a,button,.project-clickable")
        .forEach((element) => {

            element.addEventListener("mouseenter", () => {

                cursorRing.classList.add("hover");

            });

            element.addEventListener("mouseleave", () => {

                cursorRing.classList.remove("hover");

            });

        });

}


/* ============================================================
   LIGHT / DARK THEME
============================================================ */

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");


// Update Theme Button
function updateThemeUI() {

    const currentTheme =
        document.documentElement.dataset.theme || "dark";

    const nextTheme =
        currentTheme === "dark" ? "light" : "dark";

    themeIcon.className =
        currentTheme === "dark"
            ? "ri-sun-line theme-icon"
            : "ri-moon-line theme-icon";

    themeLabel.textContent =
        nextTheme === "light"
            ? "PLATINUM"
            : "DARK";

    themeToggle.setAttribute(
        "aria-label",
        `Switch to ${nextTheme}`
    );

    themeToggle.title =
        `Switch to ${nextTheme}`;

}

updateThemeUI();


// Toggle Theme
themeToggle.addEventListener("click", () => {

    const current =
        document.documentElement.dataset.theme || "dark";

    const next =
        current === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;

    localStorage.setItem("portfolio-theme", next);

    updateThemeUI();

});
"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navigationLinks = navigation.querySelectorAll("a");
const navDropdowns = document.querySelectorAll(".nav-dropdown");
const practiceLinks = document.querySelectorAll("[data-practice]");
const practiceCards = document.querySelectorAll(".practice-card");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const slideDots = Array.from(document.querySelectorAll(".hero-dot"));
const hero = document.querySelector(".hero");
const consultationForm = document.querySelector("#consultation-form");
const formStatus = document.querySelector("#form-status");
const preferredDate = document.querySelector("#preferred-date");
const copyTelegramButton = document.querySelector("#copy-telegram");
const toast = document.querySelector("#toast");
const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

let currentSlide = 0;
let slideTimer = null;
let toastTimer = null;

function setMenu(open) {
    navigation.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
    );
    document.body.classList.toggle("menu-open", open);
}

menuToggle.addEventListener("click", () => {
    const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

    setMenu(!isOpen);
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setMenu(false);

        navDropdowns.forEach((dropdown) => {
            dropdown.open = false;
        });
    });
});

document.addEventListener("click", (event) => {
    navDropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
            dropdown.open = false;
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    setMenu(false);

    navDropdowns.forEach((dropdown) => {
        dropdown.open = false;
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
        setMenu(false);
    }
});

practiceLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const practiceId = link.dataset.practice;
        const practice = document.getElementById(practiceId);

        if (!practice) {
            return;
        }

        practice.open = true;

        window.setTimeout(() => {
            practice.scrollIntoView({
                behavior: reducedMotion.matches ? "auto" : "smooth",
                block: "start"
            });
        }, 80);
    });
});

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle(
            "is-active",
            slideIndex === currentSlide
        );
    });

    slideDots.forEach((dot, dotIndex) => {
        const active = dotIndex === currentSlide;

        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-pressed", String(active));
    });
}

function stopSlideshow() {
    if (slideTimer !== null) {
        window.clearInterval(slideTimer);
        slideTimer = null;
    }
}

function startSlideshow() {
    stopSlideshow();

    if (reducedMotion.matches) {
        return;
    }

    slideTimer = window.setInterval(() => {
        showSlide(currentSlide + 1);
    }, 6500);
}

slideDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.slide));
        startSlideshow();
    });
});

hero.addEventListener("mouseenter", stopSlideshow);
hero.addEventListener("mouseleave", startSlideshow);
hero.addEventListener("focusin", stopSlideshow);
hero.addEventListener("focusout", startSlideshow);

reducedMotion.addEventListener("change", startSlideshow);

showSlide(0);
startSlideshow();

const revealItems = document.querySelectorAll(".reveal");

if (
    "IntersectionObserver" in window &&
    !reducedMotion.matches
) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.13,
            rootMargin: "0px 0px -45px"
        }
    );

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });
} else {
    revealItems.forEach((item) => {
        item.classList.add("is-visible");
    });
}

const observedSections = Array.from(
    document.querySelectorAll(
        "#home, #about, #jeanette-stevenson, #practice-areas, #testimonials, #consultation, #contact"
    )
);

const topLevelNavLinks = Array.from(
    document.querySelectorAll(".primary-nav > .nav-link")
);

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                    (first, second) =>
                        second.intersectionRatio -
                        first.intersectionRatio
                );

            const activeSection = visibleEntries[0];

            if (!activeSection) {
                return;
            }

            const activeId = activeSection.target.id;

            topLevelNavLinks.forEach((link) => {
                const destination = link
                    .getAttribute("href")
                    .replace("#", "");

                link.classList.toggle(
                    "is-active",
                    destination === activeId
                );
            });
        },
        {
            rootMargin: "-28% 0px -58%",
            threshold: [0.05, 0.2, 0.5]
        }
    );

    observedSections.forEach((section) => {
        sectionObserver.observe(section);
    });
}

function getLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

preferredDate.min = getLocalDateString(new Date());

consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent = "";

    if (!consultationForm.checkValidity()) {
        consultationForm.reportValidity();
        formStatus.textContent =
            "Please complete all required fields.";
        return;
    }

    const data = new FormData(consultationForm);

    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const contactMethod = String(
        data.get("contactMethod") || ""
    ).trim();
    const service = String(data.get("service") || "").trim();
    const location = String(data.get("location") || "").trim();
    const preferredDateValue = String(
        data.get("preferredDate") || ""
    ).trim();
    const preferredTime = String(
        data.get("preferredTime") || ""
    ).trim();
    const summary = String(data.get("summary") || "").trim();

    const subject =
        `Consultation request — ${service} — ${fullName}`;

    const message = [
        "NEW CONSULTATION REQUEST",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone or Telegram: ${phone || "Not provided"}`,
        `Preferred contact method: ${contactMethod}`,
        `Requested service: ${service}`,
        `Location: ${location || "Not provided"}`,
        `Preferred date: ${preferredDateValue || "No preference"}`,
        `Preferred time: ${preferredTime}`,
        "",
        "Brief non-confidential summary:",
        summary,
        "",
        "The sender acknowledged that submitting this request does not create a lawyer-client relationship."
    ].join("\n");

    const primaryEmail =
        "barristerjeanettestevenson@gmail.com";

    const alternateEmail =
        "barristerjeanettestevensonlw@gmail.com";

    const mailtoUrl =
        `mailto:${primaryEmail}` +
        `?cc=${encodeURIComponent(alternateEmail)}` +
        `&subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(message)}`;

    formStatus.textContent =
        "Opening your email application…";

    window.location.href = mailtoUrl;
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");

    if (toastTimer !== null) {
        window.clearTimeout(toastTimer);
    }

    toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 3200);
}

copyTelegramButton.addEventListener("click", async () => {
    const number = copyTelegramButton.dataset.number;

    try {
        await navigator.clipboard.writeText(number);
        showToast("Telegram number copied: " + number);
    } catch (error) {
        const temporaryInput = document.createElement("input");

        temporaryInput.value = number;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.select();

        const copied = document.execCommand("copy");

        temporaryInput.remove();

        showToast(
            copied
                ? "Telegram number copied: " + number
                : "Telegram number: " + number
        );
    }
});

document.querySelector("#current-year").textContent =
    String(new Date().getFullYear());

if (window.location.hash) {
    const hashId = window.location.hash.slice(1);
    const matchingPractice = document.getElementById(hashId);

    if (
        matchingPractice &&
        matchingPractice.classList.contains("practice-card")
    ) {
        matchingPractice.open = true;
    }
}

practiceCards.forEach((practice) => {
    practice.addEventListener("toggle", () => {
        if (!practice.open) {
            return;
        }

        practiceCards.forEach((otherPractice) => {
            if (otherPractice !== practice) {
                otherPractice.open = false;
            }
        });
    });
});

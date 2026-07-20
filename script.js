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

function getConsultationSuccessModal() {
    let modal = document.querySelector("#consultation-success-modal");

    if (modal) {
        return modal;
    }

    modal = document.createElement("div");
    modal.id = "consultation-success-modal";
    modal.className = "success-modal";
    modal.hidden = true;
    modal.innerHTML = `
        <div
            class="success-modal__backdrop"
            data-success-close
            aria-hidden="true"
        ></div>

        <section
            class="success-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-success-title"
            aria-describedby="consultation-success-description"
            tabindex="-1"
        >
            <button
                class="success-modal__close"
                type="button"
                aria-label="Close confirmation"
                data-success-close
            >
                ×
            </button>

            <span class="success-modal__icon" aria-hidden="true">✓</span>

            <p class="success-modal__eyebrow">Consultation Request</p>

            <h2 id="consultation-success-title">
                Consultation Request Successfully Submitted
            </h2>

            <p id="consultation-success-description">
                Your completed details have been cleared from the form. Close
                this message or go back to enter a new consultation request.
            </p>

            <div class="success-modal__actions">
                <button
                    class="button button--dark"
                    type="button"
                    data-success-close
                >
                    Cancel
                </button>

                <button
                    class="button"
                    type="button"
                    data-success-new-request
                >
                    Go Back / Enter New Details
                </button>
            </div>
        </section>
    `;

    document.body.appendChild(modal);
    return modal;
}

const successModal = getConsultationSuccessModal();
const successDialog = successModal.querySelector(".success-modal__dialog");
const newRequestButton = successModal.querySelector(
    "[data-success-new-request]"
);
const closeSuccessButtons = successModal.querySelectorAll(
    "[data-success-close]"
);
const fullNameField = consultationForm.querySelector("#full-name");
let consultationLastFocusedElement = null;

function closeConsultationSuccessModal(focusForm = false) {
    successModal.classList.remove("is-visible");
    document.body.classList.remove("modal-open");

    window.setTimeout(() => {
        successModal.hidden = true;

        if (focusForm && fullNameField) {
            fullNameField.focus();
            fullNameField.scrollIntoView({
                behavior: reducedMotion.matches ? "auto" : "smooth",
                block: "center"
            });
            return;
        }

        if (consultationLastFocusedElement instanceof HTMLElement) {
            consultationLastFocusedElement.focus();
        }
    }, reducedMotion.matches ? 0 : 180);
}

function openConsultationSuccessModal() {
    consultationLastFocusedElement = document.activeElement;
    successModal.hidden = false;
    document.body.classList.add("modal-open");

    window.requestAnimationFrame(() => {
        successModal.classList.add("is-visible");

        if (newRequestButton) {
            newRequestButton.focus();
        } else if (successDialog) {
            successDialog.focus();
        }
    });
}

closeSuccessButtons.forEach((button) => {
    button.addEventListener("click", () => {
        closeConsultationSuccessModal(false);
    });
});

if (newRequestButton) {
    newRequestButton.addEventListener("click", () => {
        closeConsultationSuccessModal(true);
    });
}

successModal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeConsultationSuccessModal(false);
    }
});

consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "";

    if (!consultationForm.checkValidity()) {
        consultationForm.reportValidity();
        formStatus.textContent = "Please complete all required fields.";
        return;
    }

    consultationForm.reset();
    preferredDate.min = getLocalDateString(new Date());
    formStatus.textContent = "";
    openConsultationSuccessModal();
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

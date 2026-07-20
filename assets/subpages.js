"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navigationLinks = navigation
    ? navigation.querySelectorAll("a")
    : [];

const navDropdowns = document.querySelectorAll(".nav-dropdown");
const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

const toast = document.querySelector("#toast");
let toastTimer = null;

function setMenu(open) {
    if (!menuToggle || !navigation) {
        return;
    }

    navigation.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
    );

    document.body.classList.toggle("menu-open", open);
}

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        setMenu(!isOpen);
    });
}

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        setMenu(false);

        navDropdowns.forEach(function (dropdown) {
            dropdown.open = false;
        });
    });
});

document.addEventListener("click", function (event) {
    navDropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            dropdown.open = false;
        }
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
        return;
    }

    setMenu(false);

    navDropdowns.forEach(function (dropdown) {
        dropdown.open = false;
    });
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 1100) {
        setMenu(false);
    }
});

const revealItems = document.querySelectorAll(".reveal");

if (
    "IntersectionObserver" in window &&
    !reducedMotion.matches
) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
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

    revealItems.forEach(function (item) {
        revealObserver.observe(item);
    });
} else {
    revealItems.forEach(function (item) {
        item.classList.add("is-visible");
    });
}

document
    .querySelectorAll("[data-current-year]")
    .forEach(function (element) {
        element.textContent = String(new Date().getFullYear());
    });

function showToast(message) {
    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("is-visible");

    if (toastTimer !== null) {
        window.clearTimeout(toastTimer);
    }

    toastTimer = window.setTimeout(function () {
        toast.classList.remove("is-visible");
    }, 3200);
}

async function copyText(value) {
    try {
        await navigator.clipboard.writeText(value);
        return true;
    } catch (error) {
        const temporaryInput = document.createElement("input");

        temporaryInput.value = value;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.select();

        const copied = document.execCommand("copy");

        temporaryInput.remove();

        return copied;
    }
}

document
    .querySelectorAll("[data-copy-value]")
    .forEach(function (button) {
        button.addEventListener("click", async function () {
            const value = button.getAttribute("data-copy-value") || "";
            const copied = await copyText(value);

            showToast(
                copied
                    ? "Copied: " + value
                    : "Contact number: " + value
            );
        });
    });

function getLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;
}

const preferredDate = document.querySelector("#preferred-date");

if (preferredDate) {
    preferredDate.min = getLocalDateString(new Date());
}

const consultationForm = document.querySelector(
    "#consultation-form"
);

if (consultationForm) {
    const formStatus = document.querySelector("#form-status");

    consultationForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            if (formStatus) {
                formStatus.textContent = "";
            }

            if (!consultationForm.checkValidity()) {
                consultationForm.reportValidity();

                if (formStatus) {
                    formStatus.textContent =
                        "Please complete all required fields.";
                }

                return;
            }

            consultationForm.reset();

            if (preferredDate) {
                preferredDate.min = getLocalDateString(new Date());
            }

            if (formStatus) {
                formStatus.textContent = "";
            }

            showToast("Consultation Request Successfully Submitted");
        }
    );
}

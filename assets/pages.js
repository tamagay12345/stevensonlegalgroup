"use strict";

const firm = {
    name: "Stevenson Legal Group LLP",
    province: "Ontario, Canada",
    primaryEmail: "barristerjeanettestevenson@gmail.com",
    alternateEmail: "barristerjeanettestevensonlw@gmail.com",
    telegramUrl: "https://t.me/BARRISTER_JEANETT_STEVENSON_Esq",
    telegramNumber: "+1 863 251 4333"
};

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute("active") || "";
        const activeClass = (name) => (active === name ? " is-active" : "");
        const currentPage = (name) =>
            active === name ? ' aria-current="page"' : "";
        const attorneysActive = active === "attorneys";
        const practiceActive = active === "practice";

        this.innerHTML = `
            <header class="site-header" id="top">
                <div class="container header-inner">
                    <a class="brand" href="index.html" aria-label="${firm.name} home">
                        <span class="brand-mark" aria-hidden="true">SLG</span>
                        <span class="brand-copy">
                            <span class="brand-name">${firm.name}</span>
                            <span class="brand-type">Barristers · ${firm.province}</span>
                        </span>
                    </a>

                    <button
                        class="menu-toggle"
                        type="button"
                        aria-label="Open navigation"
                        aria-controls="primary-navigation"
                        aria-expanded="false"
                    >
                        <span class="menu-toggle-lines" aria-hidden="true"></span>
                    </button>

                    <nav class="primary-nav" id="primary-navigation" aria-label="Primary navigation">
                        <a class="nav-link" href="index.html">Home</a>
                        <a class="nav-link" href="about.html">About the Firm</a>

                        <details class="nav-dropdown${attorneysActive ? " is-active" : ""}">
                            <summary>Attorneys</summary>
                            <div class="dropdown-menu">
                                <a href="attorneys.html">Attorneys Overview</a>
                                <a href="attorneys.html#jeanette-stevenson">Barrister Jeanette Stevenson</a>
                            </div>
                        </details>

                        <details class="nav-dropdown${practiceActive ? " is-active" : ""}">
                            <summary>Areas of Practice</summary>
                            <div class="dropdown-menu dropdown-menu--wide">
                                <a href="practice-areas.html">All Practice Areas</a>
                                <a href="practice-areas.html#family-law">Family &amp; Marriage Law</a>
                                <a href="practice-areas.html#criminal-defence">Criminal Defence</a>
                                <a href="practice-areas.html#real-estate">Real Estate &amp; Property Law</a>
                                <a href="practice-areas.html#civil-litigation">Civil Litigation</a>
                                <a href="practice-areas.html#estate-planning">Estate Planning</a>
                            </div>
                        </details>

                        <a class="nav-link${activeClass("testimonials")}" href="testimonials.html"${currentPage("testimonials")}>Testimonials</a>
                        <a class="nav-link${activeClass("contact")}" href="contact.html"${currentPage("contact")}>Contact</a>
                        <a class="button header-cta${activeClass("consultation")}" href="consultation.html"${currentPage("consultation")}>Book a Consultation</a>
                    </nav>
                </div>
            </header>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-top">
                        <div>
                            <div class="footer-brand">
                                <span class="brand-mark" aria-hidden="true">SLG</span>
                                <strong>${firm.name}</strong>
                            </div>

                            <p class="footer-description">
                                Strategic, client-focused legal representation in family law,
                                criminal defence, real estate, civil litigation and estate planning.
                            </p>
                        </div>

                        <nav class="footer-links" aria-label="Footer navigation">
                            <a href="about.html">About the Firm</a>
                            <a href="attorneys.html">Attorneys</a>
                            <a href="practice-areas.html">Areas of Practice</a>
                            <a href="testimonials.html">Testimonials</a>
                            <a href="consultation.html">Book a Consultation</a>
                            <a href="contact.html">Contact</a>
                        </nav>
                    </div>

                    <div class="footer-disclaimer">
                        <strong>Legal notice:</strong>
                        The information on this website is general information and is not legal
                        advice. Viewing this website or sending a consultation request does not
                        create a lawyer-client relationship. A lawyer-client relationship begins
                        only after the firm confirms acceptance of the matter and the parties enter
                        into an appropriate written retainer. Do not send confidential information
                        until the firm confirms that it can receive it. Past results do not
                        guarantee a similar result. Legal services outside Ontario may require
                        collaboration with counsel licensed in the relevant jurisdiction.
                    </div>

                    <div class="footer-bottom">
                        <span>© <span data-current-year></span> ${firm.name}. All rights reserved.</span>
                        <a class="back-to-top" href="#top">Back to top ↑</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

if (!customElements.get("site-header")) {
    customElements.define("site-header", SiteHeader);
}

if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let toastTimer = null;

function initializeNavigation() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".primary-nav");
    const navDropdowns = document.querySelectorAll(".nav-dropdown");

    if (!menuToggle || !navigation) {
        return;
    }

    const setMenu = (open) => {
        navigation.classList.toggle("is-open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute(
            "aria-label",
            open ? "Close navigation" : "Open navigation"
        );
        document.body.classList.toggle("menu-open", open);
    };

    menuToggle.addEventListener("click", () => {
        setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    navigation.querySelectorAll("a").forEach((link) => {
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
        if (event.key === "Escape") {
            setMenu(false);
            navDropdowns.forEach((dropdown) => {
                dropdown.open = false;
            });
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1100) {
            setMenu(false);
        }
    });
}

function initializeRevealAnimations() {
    const revealItems = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window) || reducedMotion.matches) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, revealObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -45px"
        }
    );

    revealItems.forEach((item) => observer.observe(item));
}

function initializeCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
        element.textContent = String(new Date().getFullYear());
    });
}

function getToast() {
    let toast = document.querySelector("#toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        toast.setAttribute("aria-atomic", "true");
        document.body.appendChild(toast);
    }

    return toast;
}

function showToast(message) {
    const toast = getToast();
    toast.textContent = message;
    toast.classList.add("is-visible");

    if (toastTimer !== null) {
        window.clearTimeout(toastTimer);
    }

    toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 3200);
}

async function copyText(value) {
    try {
        await navigator.clipboard.writeText(value);
        return true;
    } catch (error) {
        const input = document.createElement("input");
        input.value = value;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        const copied = document.execCommand("copy");
        input.remove();
        return copied;
    }
}

function initializeCopyButtons() {
    document.querySelectorAll("[data-copy], [data-copy-value]").forEach((button) => {
        button.addEventListener("click", async () => {
            const value =
                button.getAttribute("data-copy") ||
                button.getAttribute("data-copy-value") ||
                "";
            const copied = await copyText(value);
            showToast(copied ? `Copied: ${value}` : `Contact number: ${value}`);
        });
    });
}

function initializeDirectories() {
    ["practice-directory", "attorney-directory"].forEach((id) => {
        const directory = document.getElementById(id);

        if (!directory) {
            return;
        }

        directory.addEventListener("change", () => {
            const selector = directory.value;

            if (!selector || !selector.startsWith("#")) {
                return;
            }

            const target = document.querySelector(selector);

            if (target) {
                target.scrollIntoView({
                    behavior: reducedMotion.matches ? "auto" : "smooth",
                    block: "start"
                });
                try {
                    window.history.replaceState(null, "", selector);
                } catch (error) {
                    window.location.hash = selector;
                }
            }
        });
    });
}

function getLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function initializeConsultationForm() {
    const preferredDate = document.querySelector("#preferred-date");
    const consultationForm = document.querySelector("#consultation-form");

    if (preferredDate) {
        preferredDate.min = getLocalDateString(new Date());
    }

    if (!consultationForm) {
        return;
    }

    const formStatus = document.querySelector("#form-status");

    consultationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (formStatus) {
            formStatus.textContent = "";
        }

        if (!consultationForm.checkValidity()) {
            consultationForm.reportValidity();

            if (formStatus) {
                formStatus.textContent = "Please complete all required fields.";
            }
            return;
        }

        const data = new FormData(consultationForm);
        const read = (name, fallback = "Not provided") => {
            const value = String(data.get(name) || "").trim();
            return value || fallback;
        };

        const fullName = read("fullName", "");
        const service = read("service", "Legal inquiry");
        const subject = `Consultation request — ${service} — ${fullName}`;
        const message = [
            "NEW CONSULTATION REQUEST",
            "",
            `Name: ${fullName}`,
            `Email: ${read("email")}`,
            `Phone or Telegram: ${read("phone")}`,
            `Preferred contact method: ${read("contactMethod", "Email")}`,
            `Requested service: ${service}`,
            `Location: ${read("location")}`,
            `Preferred date: ${read("preferredDate", "No preference")}`,
            `Preferred time: ${read("preferredTime", "No preference")}`,
            `Opposing party or organization: ${read("opposingParty")}`,
            `Known court date or deadline: ${read("deadline")}`,
            "",
            "Brief non-confidential summary:",
            read("summary", ""),
            "",
            "The sender acknowledged that submitting this request does not create a lawyer-client relationship."
        ].join("\n");

        const mailtoUrl =
            `mailto:${firm.primaryEmail}` +
            `?cc=${encodeURIComponent(firm.alternateEmail)}` +
            `&subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(message)}`;

        if (formStatus) {
            formStatus.textContent = "Opening your email application…";
        }

        window.location.href = mailtoUrl;
    });
}

initializeNavigation();
initializeRevealAnimations();
initializeCurrentYear();
initializeCopyButtons();
initializeDirectories();
initializeConsultationForm();

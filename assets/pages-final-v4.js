"use strict";

const firm = {
    name: "Stevenson Legal Group LLP",
    province: "Ontario, Canada"
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
                Your consultation request has been saved to the connected Google
                Sheet. The form has been cleared and is ready for a new request.
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


function getConsultationSheetEndpoint() {
    const endpoint = String(
        window.CONSULTATION_SHEET_ENDPOINT || ""
    ).trim();

    if (
        !endpoint.startsWith("https://script.google.com/macros/s/") ||
        !endpoint.includes("/exec")
    ) {
        return "";
    }

    return endpoint;
}

function setConsultationHiddenField(form, name, value) {
    let field = form.querySelector(
        `input[type="hidden"][name="${name}"]`
    );

    if (!field) {
        field = document.createElement("input");
        field.type = "hidden";
        field.name = name;
        form.appendChild(field);
    }

    field.value = value;
}

function getConsultationSubmissionFrame() {
    let frame = document.querySelector("#consultation-sheet-frame");

    if (frame) {
        return frame;
    }

    frame = document.createElement("iframe");
    frame.id = "consultation-sheet-frame";
    frame.name = "consultation-sheet-frame";
    frame.title = "Consultation form submission";
    frame.hidden = true;
    frame.setAttribute("aria-hidden", "true");
    document.body.appendChild(frame);

    return frame;
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

    const fullNameField = consultationForm.querySelector("#full-name");
    const successModal = getConsultationSuccessModal();
    const successDialog = successModal.querySelector(".success-modal__dialog");
    const newRequestButton = successModal.querySelector(
        "[data-success-new-request]"
    );
    const closeButtons = successModal.querySelectorAll("[data-success-close]");
    let lastFocusedElement = null;

    const closeSuccessModal = (focusForm = false) => {
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

            if (lastFocusedElement instanceof HTMLElement) {
                lastFocusedElement.focus();
            }
        }, reducedMotion.matches ? 0 : 180);
    };

    const openSuccessModal = () => {
        lastFocusedElement = document.activeElement;
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
    };

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => closeSuccessModal(false));
    });

    if (newRequestButton) {
        newRequestButton.addEventListener("click", () => {
            closeSuccessModal(true);
        });
    }

    successModal.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSuccessModal(false);
        }
    });

    const formStatus = consultationForm.querySelector("#form-status");
    const submitButton = consultationForm.querySelector(
        'button[type="submit"]'
    );
    const submissionFrame = getConsultationSubmissionFrame();
    const originalButtonText = submitButton
        ? submitButton.textContent.trim()
        : "Book Now";
    let submissionPending = false;
    let submissionTimeout = null;

    const restoreSubmitButton = () => {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    };

    const completeSheetSubmission = () => {
        if (!submissionPending) {
            return;
        }

        submissionPending = false;

        if (submissionTimeout !== null) {
            window.clearTimeout(submissionTimeout);
            submissionTimeout = null;
        }

        restoreSubmitButton();
        consultationForm.reset();

        if (preferredDate) {
            preferredDate.min = getLocalDateString(new Date());
        }

        if (formStatus) {
            formStatus.textContent = "";
        }

        openSuccessModal();
    };

    submissionFrame.addEventListener("load", completeSheetSubmission);

    consultationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

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

        const endpoint = getConsultationSheetEndpoint();

        if (!endpoint) {
            if (formStatus) {
                formStatus.textContent =
                    "Google Sheet connection is not configured yet.";
            }

            return;
        }

        setConsultationHiddenField(
            consultationForm,
            "sourcePage",
            window.location.href
        );
        setConsultationHiddenField(
            consultationForm,
            "website",
            ""
        );

        consultationForm.action = endpoint;
        consultationForm.method = "POST";
        consultationForm.target = submissionFrame.name;
        submissionPending = true;

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Submitting…";
        }

        if (formStatus) {
            formStatus.textContent =
                "Submitting consultation request…";
        }

        submissionTimeout = window.setTimeout(() => {
            if (!submissionPending) {
                return;
            }

            submissionPending = false;
            restoreSubmitButton();

            if (formStatus) {
                formStatus.textContent =
                    "The request could not be submitted. Please check the Google Sheet connection and try again.";
            }
        }, 30000);

        HTMLFormElement.prototype.submit.call(consultationForm);
    }, true);
}
initializeNavigation();
initializeRevealAnimations();
initializeCurrentYear();
initializeCopyButtons();
initializeDirectories();
initializeConsultationForm();

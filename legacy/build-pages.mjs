import {
    access,
    mkdir,
    readFile,
    writeFile
} from "node:fs/promises";

import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(currentFile);
const assetsDirectory = path.join(projectRoot, "assets");
const homeFile = path.join(projectRoot, "index.html");
const homeBackupFile = path.join(projectRoot, "index.home-backup.html");

const firm = {
    name: "Stevenson Legal Group LLP",
    lawyer: "Barrister Jeanette Stevenson",
    province: "Ontario, Canada",
    email: "barristerjeanettestevenson@gmail.com",
    alternateEmail: "barristerjeanettestevensonlw@gmail.com",
    telegramUrl:
        "https://t.me/BARRISTER_JEANETT_STEVENSON_Esq",
    telegramNumber: "+1 863 251 4333"
};

const practices = [
    {
        slug: "family-marriage-law",
        title: "Family & Marriage Law",
        navigationTitle: "Family & Marriage Law",
        image: "courthouse-atrium.jpg",
        heroHeading:
            "Steady legal guidance through important family transitions.",
        heroIntro:
            "Thoughtful representation for separation, divorce, parenting, support, property division and family agreements.",
        overview: [
            "Family law matters often involve several important concerns at the same time. A separation may affect parenting arrangements, financial support, ownership of the family home, business interests, retirement savings and long-term plans for children.",
            "Stevenson Legal Group LLP helps clients understand how Ontario family law applies to their circumstances. The firm reviews the history of the relationship, relevant documents, financial information and the needs of the family before recommending a practical legal strategy.",
            "Where a fair negotiated resolution is possible, the firm works toward clear and durable terms. Where urgent court intervention or litigation is necessary, the matter is prepared carefully and advanced with determination."
        ],
        services: [
            "Separation and divorce advice",
            "Parenting time and decision-making responsibility",
            "Child support and special expenses",
            "Spousal support",
            "Division of property and equalization",
            "Financial disclosure concerns",
            "Marriage contracts and cohabitation agreements",
            "Separation agreements",
            "Urgent family motions",
            "Enforcement and variation proceedings"
        ],
        process: [
            {
                title: "Understand the family circumstances",
                text:
                    "The firm begins by identifying the relationship history, present concerns, children’s needs, financial circumstances and any urgent safety or stability issues."
            },
            {
                title: "Review financial and legal information",
                text:
                    "Income records, property information, agreements, court documents and communication history are reviewed to determine the legal issues requiring attention."
            },
            {
                title: "Select an appropriate resolution path",
                text:
                    "The matter may proceed through direct negotiation, a formal agreement process, mediation, settlement discussions or litigation."
            },
            {
                title: "Protect the long-term result",
                text:
                    "Proposed terms are assessed for clarity, enforceability and their effect on the client’s future responsibilities and financial position."
            }
        ],
        faqs: [
            {
                question:
                    "Do I need to go to court to resolve a family matter?",
                answer:
                    "Not every family matter requires a court hearing. Many cases can be resolved through negotiation, written agreements, mediation or settlement conferences. Court proceedings may be appropriate where there is urgency, incomplete disclosure, safety concerns or a serious disagreement that cannot otherwise be resolved."
            },
            {
                question:
                    "What information should I prepare for a consultation?",
                answer:
                    "Helpful information may include the date of marriage or cohabitation, date of separation, information concerning children, current parenting arrangements, income records, major assets and debts, existing agreements and any court documents already received."
            },
            {
                question:
                    "Can parenting or support arrangements be changed later?",
                answer:
                    "Some arrangements can be changed when there has been a legally significant change in circumstances. The available procedure depends on whether the existing arrangement is contained in an agreement or court order and on the facts of the case."
            }
        ]
    },
    {
        slug: "criminal-defence",
        title: "Criminal Defence",
        navigationTitle: "Criminal Defence",
        image: "gavel.jpg",
        heroHeading:
            "Prepared defence when your liberty and reputation are at stake.",
        heroIntro:
            "Prompt, confidential legal guidance for investigations, criminal charges, bail proceedings and courtroom defence.",
        overview: [
            "An arrest, investigation or criminal charge can affect employment, immigration status, family relationships, travel and personal reputation. Decisions made during the early stages of a criminal matter may have lasting consequences.",
            "Stevenson Legal Group LLP helps clients understand the allegations, the court process and the evidence that may be used in the case. The firm examines disclosure, identifies procedural and evidentiary issues and develops a defence strategy based on the available facts and applicable law.",
            "Every client is presumed innocent unless proven guilty according to law. The firm approaches criminal matters with discretion, careful preparation and a commitment to protecting the client’s lawful rights."
        ],
        services: [
            "Pre-charge and investigation advice",
            "Police interview guidance",
            "Bail and release proceedings",
            "Review of disclosure and evidence",
            "Charter-related legal issues",
            "Resolution and withdrawal discussions",
            "Peace bond matters",
            "Trial preparation",
            "Witness and document review",
            "Sentencing advocacy"
        ],
        process: [
            {
                title: "Immediate risk assessment",
                text:
                    "The first priority is understanding the charge, release conditions, upcoming court dates and any immediate restrictions affecting the client."
            },
            {
                title: "Disclosure and evidence review",
                text:
                    "Police notes, witness accounts, recordings, digital evidence and other disclosure are examined for reliability, completeness and legal significance."
            },
            {
                title: "Defence strategy",
                text:
                    "Potential factual, procedural, constitutional and evidentiary arguments are assessed before deciding how the matter should proceed."
            },
            {
                title: "Resolution or trial preparation",
                text:
                    "The firm explores lawful resolution opportunities while remaining prepared to advance the matter through motions, hearings or trial."
            }
        ],
        faqs: [
            {
                question:
                    "Should I speak with police before obtaining legal advice?",
                answer:
                    "A person who is being investigated or detained should understand their rights before deciding whether to provide information. The appropriate response depends on the circumstances, and prompt legal advice is important."
            },
            {
                question:
                    "What is criminal disclosure?",
                answer:
                    "Disclosure generally consists of the information and evidence relevant to the prosecution. It may include police notes, witness statements, videos, photographs, forensic materials and other documents."
            },
            {
                question:
                    "Does being charged mean I will be convicted?",
                answer:
                    "No. A criminal charge is an allegation. The prosecution must prove the case according to the required legal standard, and the accused may challenge the evidence and raise available defences."
            }
        ]
    },
    {
        slug: "real-estate-property-law",
        title: "Real Estate & Property Law",
        navigationTitle: "Real Estate & Property Law",
        image: "city-towers.jpg",
        heroHeading:
            "Protecting the legal value of important property decisions.",
        heroIntro:
            "Clear advice for property transactions, ownership concerns, agreements, title issues and real estate disputes.",
        overview: [
            "Real estate decisions frequently involve substantial financial commitments, strict contractual deadlines and detailed legal documentation. Early legal review can help identify risks before they become expensive disputes.",
            "Stevenson Legal Group LLP assists clients with property-related agreements, ownership issues and disputes. The firm reviews the legal documents, identifies the obligations of the parties and explains the available options in practical terms.",
            "When disagreement arises, the firm considers negotiation, formal demands, litigation and other resolution procedures while remaining focused on protecting the client’s ownership and financial interests."
        ],
        services: [
            "Residential purchase and sale concerns",
            "Agreement of purchase and sale review",
            "Title and ownership disputes",
            "Co-ownership disagreements",
            "Partition and sale matters",
            "Boundary and access disputes",
            "Easement issues",
            "Failed real estate transactions",
            "Deposit disputes",
            "Property-related contract claims"
        ],
        process: [
            {
                title: "Document review",
                text:
                    "Agreements, title records, correspondence, surveys, financial records and other relevant documents are reviewed carefully."
            },
            {
                title: "Identify legal obligations",
                text:
                    "The rights and responsibilities of the owners, purchasers, vendors or other parties are assessed under the applicable documents and law."
            },
            {
                title: "Evaluate practical solutions",
                text:
                    "Negotiated arrangements, amendments, formal demands and settlement opportunities are considered before litigation costs increase."
            },
            {
                title: "Protect the property interest",
                text:
                    "Where litigation is required, the claim or defence is organized around the evidence, financial consequences and requested legal remedy."
            }
        ],
        faqs: [
            {
                question:
                    "What should I do when a real estate transaction is at risk of failing?",
                answer:
                    "Obtain legal advice promptly and preserve all documents and communications. The available remedies may depend on the wording of the agreement, conditions, deposits, financing issues and the reason the transaction is at risk."
            },
            {
                question:
                    "Can one co-owner force the sale of a property?",
                answer:
                    "There are legal procedures that may permit a co-owner to request partition or sale. The result depends on the ownership structure, agreements between the parties and the surrounding circumstances."
            },
            {
                question:
                    "What is a title issue?",
                answer:
                    "A title issue may involve uncertainty or disagreement concerning legal ownership, registrations, liens, easements, boundaries or another interest affecting the property."
            }
        ]
    },
    {
        slug: "civil-litigation",
        title: "Civil Litigation",
        navigationTitle: "Civil Litigation",
        image: "courthouse-columns.jpg",
        heroHeading:
            "Disciplined advocacy for serious civil and commercial disputes.",
        heroIntro:
            "Strategic representation for contract, financial, property, negligence and business-related claims.",
        overview: [
            "Civil disputes can disrupt finances, property interests, business relationships and personal plans. Effective litigation requires a clear understanding of the evidence, legal remedies, procedural deadlines and practical cost of pursuing the case.",
            "Stevenson Legal Group LLP evaluates both the legal and strategic considerations affecting a claim or defence. The firm identifies the strongest available arguments, assesses the reliability of the evidence and considers whether early settlement or formal litigation is more appropriate.",
            "Clients receive direct advice concerning potential strengths, risks, timing and possible outcomes. No result can be guaranteed, but every accepted matter is approached with preparation, organization and focused advocacy."
        ],
        services: [
            "Contract disputes",
            "Debt and payment claims",
            "Business and commercial disagreements",
            "Property-related litigation",
            "Negligence and financial-loss claims",
            "Demand letters",
            "Settlement negotiation",
            "Motions and procedural hearings",
            "Document and witness preparation",
            "Trial preparation and advocacy"
        ],
        process: [
            {
                title: "Case assessment",
                text:
                    "The facts, documents, limitation periods, parties, damages and available remedies are reviewed before significant litigation costs are incurred."
            },
            {
                title: "Evidence development",
                text:
                    "Relevant contracts, correspondence, financial information, witness evidence and expert issues are organized around the legal theory of the case."
            },
            {
                title: "Proportionate strategy",
                text:
                    "The firm compares settlement, negotiation and litigation options in light of cost, time, enforceability and the client’s objectives."
            },
            {
                title: "Focused advocacy",
                text:
                    "Court materials, examinations, motions, settlement proceedings and trial preparation are handled according to the needs of the case."
            }
        ],
        faqs: [
            {
                question:
                    "How long does civil litigation take?",
                answer:
                    "The timing depends on the complexity of the dispute, number of parties, volume of evidence, court scheduling and whether the case resolves before trial."
            },
            {
                question:
                    "Can legal costs be recovered from the other party?",
                answer:
                    "A successful party may sometimes receive a costs award, but it does not necessarily reimburse every legal expense. Costs remain subject to the applicable rules and the court’s discretion."
            },
            {
                question:
                    "Should a demand letter be sent before starting a claim?",
                answer:
                    "A demand letter can clarify the dispute, preserve the client’s position and create an opportunity for resolution. Whether one should be sent depends on urgency, limitation periods and the nature of the claim."
            }
        ]
    },
    {
        slug: "estate-planning",
        title: "Estate Planning",
        navigationTitle: "Estate Planning",
        image: "law-books.jpg",
        heroHeading:
            "Clear estate documents for important personal decisions.",
        heroIntro:
            "Thoughtful planning for wills, powers of attorney, beneficiaries, executors and estate administration.",
        overview: [
            "Estate planning allows individuals to provide clear instructions concerning property, beneficiaries and decision-making. Proper documents can reduce uncertainty and help family members understand how important responsibilities should be handled.",
            "Stevenson Legal Group LLP works with clients to understand their family circumstances, assets, intended beneficiaries and personal priorities. The firm identifies issues that should be addressed before preparing or updating estate documents.",
            "Estate planning should also be reviewed after significant changes such as marriage, separation, the birth of a child, acquisition of property, business changes or the death of a beneficiary or appointed decision-maker."
        ],
        services: [
            "Wills",
            "Powers of attorney for property",
            "Powers of attorney for personal care",
            "Executor and trustee considerations",
            "Beneficiary planning",
            "Guardianship considerations",
            "Estate-planning reviews",
            "Planning following major life changes",
            "Estate administration guidance",
            "Document updates and revisions"
        ],
        process: [
            {
                title: "Identify goals and responsibilities",
                text:
                    "The firm discusses intended beneficiaries, dependants, property, decision-makers and any particular family or business concerns."
            },
            {
                title: "Review the estate structure",
                text:
                    "Assets, jointly held property, beneficiary designations, debts and existing documents are considered as part of the overall plan."
            },
            {
                title: "Prepare clear documents",
                text:
                    "The documents are written to express the client’s instructions accurately and reduce avoidable uncertainty."
            },
            {
                title: "Keep the plan current",
                text:
                    "Clients are encouraged to review their plan after major personal, financial or family changes."
            }
        ],
        faqs: [
            {
                question:
                    "When should I update my will?",
                answer:
                    "A review may be appropriate after marriage, separation, divorce, the birth of a child, a substantial financial change, acquisition of property or a change involving an executor or beneficiary."
            },
            {
                question:
                    "What is a power of attorney?",
                answer:
                    "A power of attorney is a legal document through which a person appoints someone to make certain decisions in the circumstances authorized by the document and applicable law."
            },
            {
                question:
                    "Can an estate plan help reduce family conflict?",
                answer:
                    "Clear and properly prepared documents may reduce uncertainty, although they cannot prevent every dispute. Careful instructions and appropriate appointments can help family members understand the client’s intentions."
            }
        ]
    }
];

const testimonials = [
    {
        name: "Maya",
        text:
            "Jeanette explained every stage clearly and helped me approach a stressful family matter with confidence."
    },
    {
        name: "Daniel",
        text:
            "I appreciated the honesty, careful preparation and timely communication throughout my matter."
    },
    {
        name: "Priya",
        text:
            "The firm brought structure to a complicated dispute and made sure I understood the available options."
    },
    {
        name: "Simone",
        text:
            "Jeanette was calm, prepared and respectful. I never felt that my concerns were being overlooked."
    },
    {
        name: "Adrian",
        text:
            "The advice was direct and practical. I knew what to expect and what information was needed from me."
    },
    {
        name: "Elena",
        text:
            "I felt supported from the consultation onward. The firm treated my situation with care and discretion."
    },
    {
        name: "Marcus",
        text:
            "The communication was professional and consistent, even when the legal process became difficult."
    },
    {
        name: "Naomi",
        text:
            "My questions were answered clearly and I was given realistic guidance rather than empty promises."
    },
    {
        name: "Lucas",
        text:
            "The firm reviewed the documents carefully and identified issues I had not previously considered."
    },
    {
        name: "Tiana",
        text:
            "Jeanette listened closely, understood what was most important to me and developed a focused plan."
    },
    {
        name: "Grace",
        text:
            "I valued the confidentiality, compassion and professional judgment shown throughout the matter."
    },
    {
        name: "Victor",
        text:
            "The firm was organized, responsive and prepared at every important stage of the process."
    }
];

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function activeClass(page, expected) {
    return page === expected ? " is-active" : "";
}

function renderHeader(activePage) {
    const attorneysOpen =
        activePage === "attorneys" ||
        activePage === "jeanette";

    const practicesOpen =
        activePage === "practice-areas" ||
        practices.some((practice) => practice.slug === activePage);

    const practiceLinks = practices
        .map((practice) => {
            return `
                <a href="${practice.slug}.html">
                    ${escapeHtml(practice.navigationTitle)}
                </a>
            `;
        })
        .join("");

    return `
        <header class="site-header" id="top">
            <div class="container header-inner">
                <a
                    class="brand"
                    href="index.html#home"
                    aria-label="${escapeHtml(firm.name)} home"
                >
                    <span class="brand-mark" aria-hidden="true">SLG</span>

                    <span class="brand-copy">
                        <span class="brand-name">
                            ${escapeHtml(firm.name)}
                        </span>

                        <span class="brand-type">
                            Barristers · ${escapeHtml(firm.province)}
                        </span>
                    </span>
                </a>

                <button
                    class="menu-toggle"
                    type="button"
                    aria-label="Open navigation"
                    aria-controls="primary-navigation"
                    aria-expanded="false"
                >
                    <span
                        class="menu-toggle-lines"
                        aria-hidden="true"
                    ></span>
                </button>

                <nav
                    class="primary-nav"
                    id="primary-navigation"
                    aria-label="Primary navigation"
                >
                    <a
                        class="nav-link"
                        href="index.html#home"
                    >
                        Home
                    </a>

                    <a
                        class="nav-link${activeClass(activePage, "about")}"
                        href="about.html"
                        ${activePage === "about" ? 'aria-current="page"' : ""}
                    >
                        About the Firm
                    </a>

                    <details
                        class="nav-dropdown${attorneysOpen ? " is-active" : ""}"
                    >
                        <summary>Attorneys</summary>

                        <div class="dropdown-menu">
                            <a href="attorneys.html">
                                Attorneys Overview
                            </a>

                            <a href="jeanette-stevenson.html">
                                Barrister Jeanette Stevenson
                            </a>
                        </div>
                    </details>

                    <details
                        class="nav-dropdown${practicesOpen ? " is-active" : ""}"
                    >
                        <summary>Areas of Practice</summary>

                        <div class="dropdown-menu dropdown-menu--wide">
                            <a href="practice-areas.html">
                                All Practice Areas
                            </a>

                            ${practiceLinks}
                        </div>
                    </details>

                    <a
                        class="nav-link${activeClass(activePage, "testimonials")}"
                        href="testimonials.html"
                        ${activePage === "testimonials" ? 'aria-current="page"' : ""}
                    >
                        Testimonials
                    </a>

                    <a
                        class="nav-link${activeClass(activePage, "contact")}"
                        href="contact.html"
                        ${activePage === "contact" ? 'aria-current="page"' : ""}
                    >
                        Contact
                    </a>

                    <a
                        class="button header-cta"
                        href="consultation.html"
                    >
                        Book a Consultation
                    </a>
                </nav>
            </div>
        </header>
    `;
}

function renderFooter() {
    return `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-top">
                    <div>
                        <div class="footer-brand">
                            <span
                                class="brand-mark"
                                aria-hidden="true"
                            >
                                SLG
                            </span>

                            <strong>
                                ${escapeHtml(firm.name)}
                            </strong>
                        </div>

                        <p class="footer-description">
                            Strategic, client-focused legal representation in
                            family law, criminal defence, real estate, civil
                            litigation and estate planning.
                        </p>
                    </div>

                    <nav
                        class="footer-links"
                        aria-label="Footer navigation"
                    >
                        <a href="about.html">About the Firm</a>
                        <a href="attorneys.html">Attorneys</a>
                        <a href="jeanette-stevenson.html">
                            Barrister Jeanette Stevenson
                        </a>
                        <a href="practice-areas.html">Areas of Practice</a>
                        <a href="testimonials.html">Testimonials</a>
                        <a href="consultation.html">
                            Book a Consultation
                        </a>
                        <a href="contact.html">Contact</a>
                    </nav>
                </div>

                <div class="footer-disclaimer">
                    <strong>Legal notice:</strong>
                    The information on this website is general information and
                    is not legal advice. Viewing this website or sending a
                    consultation request does not create a lawyer-client
                    relationship. A lawyer-client relationship begins only
                    after the firm confirms acceptance of the matter and the
                    parties enter into an appropriate written retainer. Do not
                    send confidential information until the firm confirms that
                    it can receive it. Past results, where accurately reported,
                    do not guarantee a similar result. Legal services outside
                    Ontario may require collaboration with counsel licensed in
                    the relevant jurisdiction. All professional,
                    certification, licensing, testimonial and
                    representative-matter claims must be verified before
                    publication.
                </div>

                <div class="footer-bottom">
                    <span>
                        © <span data-current-year></span>
                        ${escapeHtml(firm.name)}. All rights reserved.
                    </span>

                    <a class="back-to-top" href="#top">
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>

        <div
            class="toast"
            id="toast"
            role="status"
            aria-live="polite"
            aria-atomic="true"
        ></div>
    `;
}

function renderPage({
    title,
    description,
    activePage,
    heroImage,
    eyebrow,
    heading,
    introduction,
    content
}) {
    return `<!DOCTYPE html>
<html lang="en-CA">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
    >

    <meta
        name="description"
        content="${escapeHtml(description)}"
    >

    <meta name="theme-color" content="#f4f1eb">

    <title>
        ${escapeHtml(title)} | ${escapeHtml(firm.name)}
    </title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >

    <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    >

    <link
        rel="stylesheet"
        href="assets/subpages.css"
    >

    <script
        src="assets/subpages.js"
        defer
    ></script>
</head>

<body data-page="${escapeHtml(activePage)}">
    <a class="skip-link" href="#main-content">
        Skip to main content
    </a>

    ${renderHeader(activePage)}

    <main id="main-content">
        <section
            class="subhero"
            style="--hero-image: url('assets/${escapeHtml(heroImage)}');"
        >
            <div class="subhero-overlay" aria-hidden="true"></div>

            <div class="container subhero-inner">
                <div class="subhero-content">
                    <p class="hero-eyebrow">
                        ${escapeHtml(eyebrow)}
                    </p>

                    <h1>${escapeHtml(heading)}</h1>

                    <p class="subhero-intro">
                        ${escapeHtml(introduction)}
                    </p>
                </div>
            </div>
        </section>

        ${content}
    </main>

    ${renderFooter()}
</body>
</html>`;
}

function renderFeatureCards(cards) {
    return `
        <div class="feature-grid">
            ${cards
                .map((card, index) => {
                    return `
                        <article class="feature-card reveal">
                            <span class="feature-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>${escapeHtml(card.title)}</h3>

                            <p>${escapeHtml(card.text)}</p>
                        </article>
                    `;
                })
                .join("")}
        </div>
    `;
}

function renderFaqs(faqs) {
    return `
        <div class="faq-list">
            ${faqs
                .map((faq) => {
                    return `
                        <details class="faq-item reveal">
                            <summary>
                                ${escapeHtml(faq.question)}
                            </summary>

                            <div class="faq-answer">
                                <p>${escapeHtml(faq.answer)}</p>
                            </div>
                        </details>
                    `;
                })
                .join("")}
        </div>
    `;
}

function renderAboutPage() {
    const content = `
        <section class="section section--light">
            <div class="container content-split">
                <div class="content-image reveal">
                    <img
                        src="assets/modern-courthouse.jpg"
                        alt="Modern courthouse interior with a curved staircase"
                    >
                </div>

                <article class="prose reveal">
                    <p class="eyebrow">Who We Are</p>

                    <h2 class="section-title">
                        A law firm built around clarity, preparation and personal responsibility.
                    </h2>

                    <p class="lead">
                        Stevenson Legal Group LLP is an Ontario-based law firm
                        providing thoughtful legal representation to individuals,
                        families and businesses facing consequential decisions.
                    </p>

                    <p>
                        The firm recognizes that legal concerns rarely exist in
                        isolation. A family dispute may affect housing and
                        finances. A criminal allegation may affect employment and
                        travel. A property disagreement may disrupt a business or
                        family relationship. Effective representation requires an
                        understanding of both the legal issue and the practical
                        circumstances surrounding it.
                    </p>

                    <p>
                        Every accepted matter begins with careful listening.
                        Stevenson Legal Group LLP identifies the client’s concerns,
                        reviews the available information and explains the
                        relevant legal options in understandable language.
                    </p>

                    <p>
                        Clients receive direct advice concerning risk, procedure,
                        timing and possible next steps. The firm does not rely on
                        unnecessary complexity or unrealistic assurances. The
                        objective is to provide informed, strategic and
                        responsible representation.
                    </p>
                </article>
            </div>
        </section>

        <section class="section section--white">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">Our Commitments</p>

                    <h2 class="section-title">
                        Professional standards that shape every client relationship.
                    </h2>

                    <p class="section-intro">
                        The firm’s service model is designed to help clients
                        understand their position and participate meaningfully in
                        important legal decisions.
                    </p>
                </div>

                ${renderFeatureCards([
                    {
                        title: "Clear communication",
                        text:
                            "Legal issues, available options and important deadlines are explained in direct and understandable terms."
                    },
                    {
                        title: "Careful preparation",
                        text:
                            "Documents, evidence, procedural requirements and legal arguments are reviewed deliberately."
                    },
                    {
                        title: "Honest expectations",
                        text:
                            "Clients receive realistic assessments without promises concerning outcomes that cannot be guaranteed."
                    },
                    {
                        title: "Confidential service",
                        text:
                            "Sensitive personal, family, financial and business information is handled with discretion."
                    },
                    {
                        title: "Proportionate strategy",
                        text:
                            "The recommended approach considers the legal objective, cost, urgency, risk and practical consequences."
                    },
                    {
                        title: "Committed advocacy",
                        text:
                            "The firm prepares to negotiate effectively and to litigate firmly where the matter requires it."
                    }
                ])}
            </div>
        </section>

        <section class="section section--paper">
            <div class="container two-column-copy">
                <article class="prose reveal">
                    <p class="eyebrow">How the Firm Works</p>

                    <h2 class="section-title">
                        A structured approach to difficult legal problems.
                    </h2>

                    <p>
                        The first stage of a matter is directed toward identifying
                        the immediate legal concerns. This may include a court
                        deadline, contractual obligation, limitation period,
                        release condition, financial disclosure requirement or
                        urgent family issue.
                    </p>

                    <p>
                        Once immediate concerns are addressed, the firm reviews the
                        facts and documents necessary to evaluate the legal
                        position. The client is then advised concerning the
                        available options, including negotiation, formal
                        agreements, administrative steps, court proceedings or
                        collaboration with another qualified professional.
                    </p>

                    <p>
                        Strategy is reviewed as the matter develops. New evidence,
                        procedural decisions and settlement opportunities may
                        require the plan to be adjusted while keeping the client’s
                        objectives in view.
                    </p>
                </article>

                <aside class="statement-panel reveal">
                    <span class="statement-label">
                        Minority Business Enterprise
                    </span>

                    <h3>
                        Certified as a Minority Business Enterprise.
                    </h3>

                    <p>
                        Stevenson Legal Group LLP is identified as a certified
                        Minority Business Enterprise. Relevant certification
                        information should be confirmed and made available to
                        prospective institutional or commercial clients when
                        requested.
                    </p>

                    <a class="button button--light" href="contact.html">
                        Contact the Firm
                    </a>
                </aside>
            </div>
        </section>

        <section class="section section--white">
            <div class="container service-audience">
                <div class="section-heading reveal">
                    <p class="eyebrow">Clients We Assist</p>

                    <h2 class="section-title">
                        Legal service responsive to individual and organizational needs.
                    </h2>
                </div>

                <div class="audience-grid">
                    <article class="audience-card reveal">
                        <h3>Individuals and families</h3>

                        <p>
                            Assistance with family transitions, criminal
                            allegations, property concerns, personal disputes and
                            estate planning.
                        </p>
                    </article>

                    <article class="audience-card reveal">
                        <h3>Property owners</h3>

                        <p>
                            Guidance concerning purchases, sales, ownership
                            disagreements, title issues and real estate-related
                            litigation.
                        </p>
                    </article>

                    <article class="audience-card reveal">
                        <h3>Businesses and professionals</h3>

                        <p>
                            Strategic assistance with contractual disputes,
                            payment claims, property issues and civil proceedings.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        ${renderCallToAction(
            "Speak with the firm about your legal matter.",
            "Begin with a confidential consultation request.",
            "Book a Consultation",
            "consultation.html"
        )}
    `;

    return renderPage({
        title: "About the Firm",
        description:
            "Learn about Stevenson Legal Group LLP, its approach to legal representation and commitment to clarity, preparation and client service.",
        activePage: "about",
        heroImage: "courthouse-atrium.jpg",
        eyebrow: "About Stevenson Legal Group LLP",
        heading: "Trusted counsel begins with careful listening.",
        introduction:
            "An Ontario law firm providing strategic legal advice, disciplined advocacy and personal attention through important legal decisions.",
        content
    });
}

function renderAttorneysPage() {
    const content = `
        <section class="section section--light">
            <div class="container attorney-overview">
                <div class="attorney-overview-image reveal">
                    <img
                        src="assets/jeanette-library.jpg"
                        alt="Barrister Jeanette Stevenson in a law library"
                    >
                </div>

                <article class="prose attorney-overview-copy reveal">
                    <p class="eyebrow">Firm Counsel</p>

                    <h2 class="section-title">
                        Barrister Jeanette Stevenson
                    </h2>

                    <p class="lead">
                        Professional judgment, honest communication and
                        determined representation.
                    </p>

                    <p>
                        Born and raised in Canada, Jeanette Stevenson leads the
                        firm from its Canadian head office. Her practice is
                        centered on understanding each client’s circumstances,
                        explaining the legal issues clearly and developing a
                        strategy responsive to the client’s priorities.
                    </p>

                    <p>
                        Jeanette approaches legal work with preparation,
                        confidentiality and professional candour. Clients are
                        given a realistic understanding of the opportunities and
                        risks affecting their matter.
                    </p>

                    <p>
                        Cross-border and international inquiries may be considered
                        where appropriate. Legal work in another jurisdiction may
                        require collaboration with counsel licensed in that
                        location.
                    </p>

                    <a
                        class="button"
                        href="jeanette-stevenson.html"
                    >
                        Read Full Attorney Profile
                    </a>
                </article>
            </div>
        </section>

        <section class="section section--white">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">Client Service</p>

                    <h2 class="section-title">
                        The qualities clients should expect from their legal counsel.
                    </h2>
                </div>

                ${renderFeatureCards([
                    {
                        title: "Preparation",
                        text:
                            "Each accepted matter is organized around the facts, documents, legal requirements and client objectives."
                    },
                    {
                        title: "Professionalism",
                        text:
                            "Communication and advocacy are conducted respectfully, carefully and with appropriate professional judgment."
                    },
                    {
                        title: "Honesty",
                        text:
                            "Clients receive direct advice about strengths, risks, costs, procedure and available options."
                    },
                    {
                        title: "Confidentiality",
                        text:
                            "Sensitive information is treated with the discretion required in a professional legal relationship."
                    },
                    {
                        title: "Responsiveness",
                        text:
                            "Important developments and requests for information are communicated as the matter progresses."
                    },
                    {
                        title: "Dedication",
                        text:
                            "The strategy remains focused on obtaining the strongest lawful and practical result available."
                    }
                ])}
            </div>
        </section>

        ${renderCallToAction(
            "Request a consultation with Barrister Jeanette Stevenson.",
            "Provide a brief, non-confidential description of the legal assistance you are seeking.",
            "Book a Consultation",
            "consultation.html"
        )}
    `;

    return renderPage({
        title: "Attorneys",
        description:
            "Meet Barrister Jeanette Stevenson of Stevenson Legal Group LLP in Ontario, Canada.",
        activePage: "attorneys",
        heroImage: "jeanette-desk.jpg",
        eyebrow: "Attorneys",
        heading: "Experienced guidance with a personal commitment to every matter.",
        introduction:
            "Meet the counsel responsible for the firm’s client-focused, prepared and confidential approach to legal representation.",
        content
    });
}

function renderJeanettePage() {
    const content = `
        <section class="section section--light">
            <div class="container profile-layout">
                <div class="profile-gallery reveal">
                    <img
                        class="profile-primary"
                        src="assets/jeanette-library.jpg"
                        alt="Barrister Jeanette Stevenson in a law library"
                    >

                    <img
                        class="profile-secondary"
                        src="assets/jeanette-archbold.jpg"
                        alt="Barrister Jeanette Stevenson holding a legal reference book"
                    >
                </div>

                <article class="prose reveal">
                    <p class="eyebrow">Attorney Biography</p>

                    <h2 class="section-title">
                        Barrister Jeanette Stevenson
                    </h2>

                    <p class="profile-role">
                        Barrister · Stevenson Legal Group LLP
                    </p>

                    <p class="lead">
                        Jeanette Stevenson provides thoughtful, prepared and
                        highly personal legal representation from the firm’s head
                        office in Canada.
                    </p>

                    <p>
                        Born and raised in Canada, Jeanette developed her practice
                        around the belief that clients deserve both strong
                        advocacy and an understandable explanation of their legal
                        position.
                    </p>

                    <p>
                        Her work begins with careful listening. Before recommending
                        a strategy, she seeks to understand the legal facts,
                        personal concerns, financial consequences and long-term
                        priorities involved in the matter.
                    </p>

                    <p>
                        Jeanette is committed to professional honesty. She advises
                        clients concerning the strengths and risks of their
                        position without making promises that the law or evidence
                        cannot support.
                    </p>

                    <p>
                        Confidentiality and discretion are particularly important
                        in family, criminal, financial and business matters.
                        Jeanette approaches sensitive information with the
                        seriousness required by the professional relationship.
                    </p>
                </article>
            </div>
        </section>

        <section class="section section--white">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">Professional Approach</p>

                    <h2 class="section-title">
                        Representation built on preparation and practical judgment.
                    </h2>

                    <p class="section-intro">
                        Every matter is different, but the principles guiding the
                        work remain consistent.
                    </p>
                </div>

                ${renderFeatureCards([
                    {
                        title: "Listen before advising",
                        text:
                            "The legal strategy begins with a complete understanding of the client’s circumstances and immediate concerns."
                    },
                    {
                        title: "Explain the legal position",
                        text:
                            "Clients are advised about applicable procedures, evidence, possible remedies and important limitations."
                    },
                    {
                        title: "Develop a focused strategy",
                        text:
                            "The recommended plan reflects the client’s goals, legal position, resources, urgency and risk."
                    },
                    {
                        title: "Prepare every important step",
                        text:
                            "Documents, negotiations, hearings and court proceedings are approached with careful organization."
                    },
                    {
                        title: "Review changing circumstances",
                        text:
                            "The strategy is reassessed when new evidence, legal developments or settlement opportunities arise."
                    },
                    {
                        title: "Protect professional trust",
                        text:
                            "Communication remains candid, respectful and confidential throughout the representation."
                    }
                ])}
            </div>
        </section>

        <section class="section section--paper">
            <div class="container two-column-copy">
                <article class="prose reveal">
                    <p class="eyebrow">Representative Work</p>

                    <h2 class="section-title">
                        Legal matters requiring careful judgment and focused advocacy.
                    </h2>

                    <p>
                        Jeanette’s practice addresses family and marriage law,
                        criminal defence, property law, civil litigation and
                        estate planning.
                    </p>

                    <p>
                        Representative matters may include negotiated family
                        resolutions, parenting and support proceedings, defence of
                        criminal allegations, property ownership disputes,
                        contract claims, financial litigation and preparation of
                        estate-planning documents.
                    </p>

                    <p>
                        Specific client matters and outcomes are confidential
                        unless disclosure has been lawfully authorized. No legal
                        professional can guarantee that a future matter will
                        produce the same result as a previous case.
                    </p>
                </article>

                <aside class="statement-panel reveal">
                    <span class="statement-label">
                        International and Cross-Border Inquiries
                    </span>

                    <h3>
                        Canadian counsel with the ability to consider matters involving other jurisdictions.
                    </h3>

                    <p>
                        Jeanette may advise on appropriate aspects of cross-border
                        matters and coordinate with qualified professionals.
                        Representation involving the law of another country may
                        require locally licensed counsel.
                    </p>

                    <a
                        class="button button--light"
                        href="consultation.html"
                    >
                        Submit an Inquiry
                    </a>
                </aside>
            </div>
        </section>

        <section class="section section--white">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">Attorney Questions</p>

                    <h2 class="section-title">
                        What clients may wish to know before a consultation.
                    </h2>
                </div>

                ${renderFaqs([
                    {
                        question:
                            "Will Barrister Jeanette Stevenson personally review my inquiry?",
                        answer:
                            "Consultation requests are submitted for review by the firm. Acceptance of a matter depends on the legal issue, jurisdiction, availability, conflicts and other professional requirements."
                    },
                    {
                        question:
                            "Can a result be guaranteed?",
                        answer:
                            "No. Legal results depend on facts, evidence, applicable law, procedural decisions and the actions of other parties. The firm provides an informed assessment and committed advocacy but does not guarantee outcomes."
                    },
                    {
                        question:
                            "Can Jeanette assist with a matter outside Canada?",
                        answer:
                            "Cross-border inquiries may be considered. Where the matter requires advice or representation under another jurisdiction’s law, locally licensed counsel may need to be retained or consulted."
                    },
                    {
                        question:
                            "Is information submitted through the consultation form confidential?",
                        answer:
                            "Submitting a form does not by itself create a lawyer-client relationship. Prospective clients should provide only a brief, non-confidential summary until the firm confirms that it can receive confidential information."
                    }
                ])}
            </div>
        </section>

        ${renderCallToAction(
            "Discuss your legal matter with Barrister Jeanette Stevenson.",
            "Complete the consultation request with a brief, non-confidential description of the assistance you need.",
            "Book a Consultation",
            "consultation.html"
        )}
    `;

    return renderPage({
        title: "Barrister Jeanette Stevenson",
        description:
            "Read the professional profile of Barrister Jeanette Stevenson of Stevenson Legal Group LLP.",
        activePage: "jeanette",
        heroImage: "jeanette-desk.jpg",
        eyebrow: "Barrister Jeanette Stevenson",
        heading: "Professional judgment. Honest advice. Dedicated advocacy.",
        introduction:
            "Canadian counsel committed to helping clients understand their legal position and pursue the strongest lawful outcome available.",
        content
    });
}

function renderPracticeOverviewPage() {
    const practiceCards = practices
        .map((practice, index) => {
            return `
                <article class="practice-overview-card reveal">
                    <a
                        class="practice-card-image"
                        href="${practice.slug}.html"
                    >
                        <img
                            src="assets/${escapeHtml(practice.image)}"
                            alt=""
                        >
                    </a>

                    <div class="practice-card-content">
                        <span class="practice-card-number">
                            Practice ${String(index + 1).padStart(2, "0")}
                        </span>

                        <h2>
                            <a href="${practice.slug}.html">
                                ${escapeHtml(practice.title)}
                            </a>
                        </h2>

                        <p>${escapeHtml(practice.heroIntro)}</p>

                        <a
                            class="text-link"
                            href="${practice.slug}.html"
                        >
                            Read about this practice
                        </a>
                    </div>
                </article>
            `;
        })
        .join("");

    const content = `
        <section class="section section--light">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">Legal Services</p>

                    <h2 class="section-title">
                        Focused representation across five important areas of law.
                    </h2>

                    <p class="section-intro">
                        Select a practice area to read detailed information about
                        the issues the firm addresses and the approach used to
                        evaluate each matter.
                    </p>
                </div>

                <div class="practice-overview-grid">
                    ${practiceCards}
                </div>
            </div>
        </section>

        <section class="section section--white">
            <div class="container two-column-copy">
                <article class="prose reveal">
                    <p class="eyebrow">Choosing Legal Counsel</p>

                    <h2 class="section-title">
                        Begin by understanding the issue, urgency and desired result.
                    </h2>

                    <p>
                        The correct legal strategy depends on more than the general
                        category of the case. Timing, evidence, jurisdiction,
                        existing agreements, previous court orders and the actions
                        of other parties may all affect the available options.
                    </p>

                    <p>
                        During an initial consultation, the firm identifies the
                        immediate concerns and determines what information should
                        be reviewed before substantive advice can be provided.
                    </p>

                    <p>
                        Clients should preserve relevant documents and avoid
                        deleting messages, financial information, agreements,
                        photographs, recordings or other evidence that may be
                        important.
                    </p>
                </article>

                <aside class="statement-panel statement-panel--dark reveal">
                    <span class="statement-label">
                        Important Information
                    </span>

                    <h3>
                        Legal outcomes cannot be guaranteed.
                    </h3>

                    <p>
                        The firm works to identify the strongest lawful and
                        practical strategy available. Results remain dependent on
                        the facts, evidence, law, procedure and decisions of
                        courts or other parties.
                    </p>

                    <a
                        class="button button--light"
                        href="consultation.html"
                    >
                        Request an Assessment
                    </a>
                </aside>
            </div>
        </section>

        ${renderCallToAction(
            "Not sure which practice area applies?",
            "Provide a short description through the consultation form and select the closest available category.",
            "Book a Consultation",
            "consultation.html"
        )}
    `;

    return renderPage({
        title: "Areas of Practice",
        description:
            "Explore the legal practice areas of Stevenson Legal Group LLP, including family law, criminal defence, real estate, civil litigation and estate planning.",
        activePage: "practice-areas",
        heroImage: "courthouse-columns.jpg",
        eyebrow: "Areas of Practice",
        heading: "Legal guidance for matters that can shape your future.",
        introduction:
            "Explore the firm’s services in family law, criminal defence, real estate, civil litigation and estate planning.",
        content
    });
}

function renderPracticePage(practice) {
    const services = practice.services
        .map((service) => {
            return `<li>${escapeHtml(service)}</li>`;
        })
        .join("");

    const overviewParagraphs = practice.overview
        .map((paragraph) => {
            return `<p>${escapeHtml(paragraph)}</p>`;
        })
        .join("");

    const content = `
        <section class="section section--light">
            <div class="container practice-detail-layout">
                <article class="prose reveal">
                    <p class="eyebrow">Practice Overview</p>

                    <h2 class="section-title">
                        ${escapeHtml(practice.title)}
                    </h2>

                    ${overviewParagraphs}
                </article>

                <aside class="service-list-panel reveal">
                    <span class="statement-label">
                        Matters We May Address
                    </span>

                    <ul>${services}</ul>

                    <a
                        class="button"
                        href="consultation.html"
                    >
                        Request a Consultation
                    </a>
                </aside>
            </div>
        </section>

        <section class="section section--white">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">Our Approach</p>

                    <h2 class="section-title">
                        A structured strategy for each stage of the matter.
                    </h2>
                </div>

                ${renderFeatureCards(practice.process)}
            </div>
        </section>

        <section class="section section--paper">
            <div class="container two-column-copy">
                <article class="prose reveal">
                    <p class="eyebrow">How the Firm Helps</p>

                    <h2 class="section-title">
                        Advice directed toward the strongest practical legal position.
                    </h2>

                    <p>
                        Stevenson Legal Group LLP begins by identifying urgent
                        deadlines, existing documents and the information necessary
                        to understand the legal position.
                    </p>

                    <p>
                        The firm explains the available procedures and considers
                        the cost, timing, risks and potential benefit of each
                        option. Where negotiation offers a responsible route
                        toward resolution, the firm advocates for clear and
                        enforceable terms.
                    </p>

                    <p>
                        Where court or formal proceedings are necessary, the case
                        is organized around the relevant evidence, applicable law
                        and relief being requested.
                    </p>

                    <p>
                        No firm can promise that a client will win. Stevenson Legal
                        Group LLP instead provides careful preparation, candid
                        advice and committed advocacy directed toward obtaining the
                        best lawful result available in the circumstances.
                    </p>
                </article>

                <aside class="statement-panel reveal">
                    <span class="statement-label">
                        Preparing for Your Consultation
                    </span>

                    <h3>
                        Preserve documents and note important dates.
                    </h3>

                    <p>
                        Helpful information may include agreements, court
                        documents, letters, emails, messages, financial records,
                        photographs, identification of witnesses and a timeline of
                        important events.
                    </p>

                    <p>
                        Do not send confidential documents until the firm confirms
                        that it can receive them.
                    </p>
                </aside>
            </div>
        </section>

        <section class="section section--white">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">Frequently Asked Questions</p>

                    <h2 class="section-title">
                        Common questions concerning ${escapeHtml(
                            practice.title.toLowerCase()
                        )}.
                    </h2>
                </div>

                ${renderFaqs(practice.faqs)}
            </div>
        </section>

        ${renderCallToAction(
            `Discuss a ${practice.title.toLowerCase()} matter.`,
            "Submit a brief, non-confidential summary so the firm can review the nature of your inquiry.",
            "Book a Consultation",
            "consultation.html"
        )}
    `;

    return renderPage({
        title: practice.title,
        description: practice.heroIntro,
        activePage: practice.slug,
        heroImage: practice.image,
        eyebrow: practice.title,
        heading: practice.heroHeading,
        introduction: practice.heroIntro,
        content
    });
}

function renderTestimonialsPage() {
    const cards = testimonials
        .map((testimonial) => {
            return `
                <article class="testimonial-card reveal">
                    <span class="quote-mark" aria-hidden="true">“</span>

                    <blockquote>
                        ${escapeHtml(testimonial.text)}
                    </blockquote>

                    <footer>
                        <strong>${escapeHtml(testimonial.name)}</strong>

                        <span>
                            Sample copy — verify before publication
                        </span>
                    </footer>
                </article>
            `;
        })
        .join("");

    const content = `
        <section class="section section--light">
            <div class="container">
                <div class="notice-panel reveal">
                    <strong>Publication notice</strong>

                    <p>
                        The testimonials displayed on this page are layout samples,
                        not verified client reviews. Replace each statement with
                        written, authorized and verifiable client feedback before
                        publishing the website publicly.
                    </p>
                </div>

                <div class="testimonial-page-grid">
                    ${cards}
                </div>
            </div>
        </section>

        <section class="section section--white">
            <div class="container two-column-copy">
                <article class="prose reveal">
                    <p class="eyebrow">Client Experience</p>

                    <h2 class="section-title">
                        Service designed around communication, dignity and trust.
                    </h2>

                    <p>
                        Legal matters can be unfamiliar and stressful. Clients
                        should understand the purpose of important steps, what
                        information is required and how new developments may affect
                        the strategy.
                    </p>

                    <p>
                        Stevenson Legal Group LLP seeks to maintain professional
                        communication throughout the representation. Questions are
                        addressed directly, expectations are discussed honestly
                        and sensitive concerns are approached respectfully.
                    </p>
                </article>

                <aside class="statement-panel statement-panel--dark reveal">
                    <span class="statement-label">
                        Important
                    </span>

                    <h3>
                        Past experiences do not guarantee future results.
                    </h3>

                    <p>
                        Every legal matter depends on its own facts, evidence,
                        applicable law and procedural history.
                    </p>
                </aside>
            </div>
        </section>

        ${renderCallToAction(
            "Begin your own conversation with the firm.",
            "Submit a consultation request describing the type of legal assistance you are seeking.",
            "Book a Consultation",
            "consultation.html"
        )}
    `;

    return renderPage({
        title: "Testimonials",
        description:
            "Read sample testimonial layouts and learn about the client-service commitments of Stevenson Legal Group LLP.",
        activePage: "testimonials",
        heroImage: "law-library-glass.jpg",
        eyebrow: "Testimonials",
        heading: "A client experience shaped by preparation and care.",
        introduction:
            "Professional communication, honest guidance and respectful attention throughout the legal process.",
        content
    });
}

function renderConsultationPage() {
    const options = practices
        .map((practice) => {
            return `
                <option value="${escapeHtml(practice.title)}">
                    ${escapeHtml(practice.title)}
                </option>
            `;
        })
        .join("");

    const content = `
        <section class="section section--light">
            <div class="container consultation-page-layout">
                <aside class="consultation-information reveal">
                    <p class="eyebrow">Before You Submit</p>

                    <h2 class="section-title">
                        Important information about consultation requests.
                    </h2>

                    <p>
                        Use this form to provide your contact details and a short,
                        non-confidential description of the assistance you are
                        seeking.
                    </p>

                    <ul class="check-list">
                        <li>
                            Submission of the form does not create a lawyer-client
                            relationship.
                        </li>

                        <li>
                            The firm must complete availability, jurisdiction and
                            conflict checks.
                        </li>

                        <li>
                            Representation begins only after the firm accepts the
                            matter and a written retainer is completed.
                        </li>

                        <li>
                            Do not send evidence, passwords, banking information,
                            identity documents or confidential attachments.
                        </li>

                        <li>
                            Contact emergency services when immediate personal
                            safety is at risk.
                        </li>
                    </ul>

                    <div class="contact-mini-panel">
                        <strong>Prefer Telegram?</strong>

                        <a
                            href="${firm.telegramUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open the firm’s Telegram contact
                        </a>
                    </div>
                </aside>

                <div class="consultation-form-card reveal">
                    <h2>Consultation request</h2>

                    <p>
                        Required fields are marked with an asterisk.
                    </p>

                    <form id="consultation-form" novalidate>
                        <div class="form-grid">
                            <div class="form-field">
                                <label for="full-name">
                                    Full name
                                    <span class="required">*</span>
                                </label>

                                <input
                                    id="full-name"
                                    name="fullName"
                                    type="text"
                                    autocomplete="name"
                                    required
                                >
                            </div>

                            <div class="form-field">
                                <label for="email">
                                    Email address
                                    <span class="required">*</span>
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    required
                                >
                            </div>

                            <div class="form-field">
                                <label for="phone">
                                    Phone or Telegram number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autocomplete="tel"
                                >
                            </div>

                            <div class="form-field">
                                <label for="contact-method">
                                    Preferred contact method
                                </label>

                                <select
                                    id="contact-method"
                                    name="contactMethod"
                                >
                                    <option value="Email">Email</option>
                                    <option value="Telegram">Telegram</option>
                                    <option value="Telephone">Telephone</option>
                                </select>
                            </div>

                            <div class="form-field">
                                <label for="service">
                                    Legal service
                                    <span class="required">*</span>
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    required
                                >
                                    <option value="">
                                        Select a practice area
                                    </option>

                                    ${options}
                                </select>
                            </div>

                            <div class="form-field">
                                <label for="location">
                                    Province, territory or country
                                </label>

                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    autocomplete="country-name"
                                    placeholder="Ontario, Canada"
                                >
                            </div>

                            <div class="form-field">
                                <label for="preferred-date">
                                    Preferred consultation date
                                </label>

                                <input
                                    id="preferred-date"
                                    name="preferredDate"
                                    type="date"
                                >
                            </div>

                            <div class="form-field">
                                <label for="preferred-time">
                                    Preferred time
                                </label>

                                <select
                                    id="preferred-time"
                                    name="preferredTime"
                                >
                                    <option value="No preference">
                                        No preference
                                    </option>

                                    <option value="Morning">
                                        Morning
                                    </option>

                                    <option value="Afternoon">
                                        Afternoon
                                    </option>

                                    <option value="Evening">
                                        Evening
                                    </option>
                                </select>
                            </div>

                            <div class="form-field form-field--full">
                                <label for="summary">
                                    Brief, non-confidential summary
                                    <span class="required">*</span>
                                </label>

                                <textarea
                                    id="summary"
                                    name="summary"
                                    maxlength="1500"
                                    required
                                    placeholder="Briefly describe the type of legal assistance you are seeking."
                                ></textarea>
                            </div>

                            <div class="checkbox-field form-field--full">
                                <input
                                    id="consent"
                                    name="consent"
                                    type="checkbox"
                                    required
                                >

                                <label for="consent">
                                    I understand that submitting this request does
                                    not create a lawyer-client relationship and that
                                    the firm must confirm whether it can accept the
                                    matter.
                                </label>
                            </div>
                        </div>

                        <div class="form-actions">
                            <button class="button" type="submit">
                                Book Now
                            </button>

                            <span
                                class="form-status"
                                id="form-status"
                                role="status"
                                aria-live="polite"
                            ></span>
                        </div>

                        <p class="form-privacy">
                            This static website does not upload or store your
                            information. Selecting “Book Now” opens your email
                            application with the form details prepared for sending.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    `;

    return renderPage({
        title: "Book a Consultation",
        description:
            "Request a consultation with Stevenson Legal Group LLP for family law, criminal defence, real estate, civil litigation or estate planning.",
        activePage: "consultation",
        heroImage: "marble-stairs.jpg",
        eyebrow: "Book a Consultation",
        heading: "Begin with a confidential conversation.",
        introduction:
            "Provide your contact information and a brief, non-confidential description of the legal assistance you are seeking.",
        content
    });
}

function renderContactPage() {
    const content = `
        <section class="section section--light">
            <div class="container contact-page-layout">
                <article class="prose reveal">
                    <p class="eyebrow">Contact the Firm</p>

                    <h2 class="section-title">
                        Choose the contact method that is most convenient for you.
                    </h2>

                    <p class="lead">
                        New legal inquiries may be submitted through the
                        consultation form, Telegram or email.
                    </p>

                    <p>
                        Provide only a short, non-confidential description until
                        the firm confirms that it can consider your matter. Avoid
                        sending court evidence, identity documents, banking
                        details, passwords or sensitive attachments.
                    </p>

                    <p>
                        The firm’s head office is located in Ontario, Canada.
                        Consultations are available by appointment.
                    </p>

                    <a class="button" href="consultation.html">
                        Book a Consultation
                    </a>
                </article>

                <div class="contact-methods">
                    <article class="contact-method-card reveal">
                        <span class="contact-method-label">
                            Telegram
                        </span>

                        <h3>Official Telegram contact</h3>

                        <p>
                            Use the firm’s Telegram link to begin a new inquiry.
                        </p>

                        <a
                            class="button"
                            href="${firm.telegramUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open Telegram
                        </a>
                    </article>

                    <article class="contact-method-card reveal">
                        <span class="contact-method-label">
                            Telegram number
                        </span>

                        <h3>${escapeHtml(firm.telegramNumber)}</h3>

                        <p>
                            Copy the number for use in Telegram or your contacts.
                        </p>

                        <button
                            class="button button--dark"
                            type="button"
                            data-copy-value="${escapeHtml(
                                firm.telegramNumber
                            )}"
                        >
                            Copy Number
                        </button>
                    </article>

                    <article class="contact-method-card reveal">
                        <span class="contact-method-label">
                            Primary email
                        </span>

                        <h3 class="contact-email">
                            ${escapeHtml(firm.email)}
                        </h3>

                        <a
                            class="button"
                            href="mailto:${escapeHtml(firm.email)}"
                        >
                            Send Email
                        </a>
                    </article>

                    <article class="contact-method-card reveal">
                        <span class="contact-method-label">
                            Alternate email
                        </span>

                        <h3 class="contact-email">
                            ${escapeHtml(firm.alternateEmail)}
                        </h3>

                        <a
                            class="button"
                            href="mailto:${escapeHtml(
                                firm.alternateEmail
                            )}"
                        >
                            Send Email
                        </a>
                    </article>
                </div>
            </div>
        </section>

        <section class="section section--white">
            <div class="container">
                <div class="section-heading reveal">
                    <p class="eyebrow">What Happens Next</p>

                    <h2 class="section-title">
                        A clear process for new legal inquiries.
                    </h2>
                </div>

                ${renderFeatureCards([
                    {
                        title: "Inquiry review",
                        text:
                            "The firm reviews the general nature of the request and determines whether further information is required."
                    },
                    {
                        title: "Preliminary checks",
                        text:
                            "Availability, jurisdiction, professional conflicts and the type of legal service required are considered."
                    },
                    {
                        title: "Consultation scheduling",
                        text:
                            "Where appropriate, the firm contacts the prospective client to arrange a consultation."
                    },
                    {
                        title: "Retainer decision",
                        text:
                            "Representation begins only after the firm accepts the matter and the required written retainer is completed."
                    }
                ])}
            </div>
        </section>
    `;

    return renderPage({
        title: "Contact",
        description:
            "Contact Stevenson Legal Group LLP by consultation form, Telegram or email.",
        activePage: "contact",
        heroImage: "modern-courthouse.jpg",
        eyebrow: "Contact Stevenson Legal Group LLP",
        heading: "Professional legal guidance begins with the right conversation.",
        introduction:
            "Contact the firm by consultation form, Telegram or email for an initial review of your legal inquiry.",
        content
    });
}

function renderCallToAction(
    heading,
    text,
    buttonText,
    buttonHref
) {
    return `
        <section class="page-cta">
            <div class="container page-cta-inner">
                <div>
                    <p class="page-cta-label">
                        Stevenson Legal Group LLP
                    </p>

                    <h2>${escapeHtml(heading)}</h2>

                    <p>${escapeHtml(text)}</p>
                </div>

                <a
                    class="button button--light"
                    href="${escapeHtml(buttonHref)}"
                >
                    ${escapeHtml(buttonText)}
                </a>
            </div>
        </section>
    `;
}

const subpagesCss = String.raw`
:root {
    --paper: #f4f1eb;
    --paper-light: #fbfaf7;
    --white: #ffffff;
    --ink: #1e1f1d;
    --charcoal: #292a27;
    --charcoal-soft: #383935;
    --muted: #66675f;
    --stone: #d8d2c8;
    --stone-light: #e9e4dc;
    --burgundy: #792d3c;
    --burgundy-dark: #58202c;
    --focus: #b34b5f;
    --header-height: 82px;
    --container: 1180px;
    --serif: "Libre Baskerville", Georgia, serif;
    --sans: "Source Sans 3", Arial, sans-serif;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 20px);
}

body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 17px;
    line-height: 1.65;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

body.menu-open {
    overflow: hidden;
}

img {
    display: block;
    max-width: 100%;
}

button,
input,
select,
textarea {
    font: inherit;
}

button,
summary,
a {
    -webkit-tap-highlight-color: transparent;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
}

::selection {
    background: var(--burgundy);
    color: var(--white);
}

:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 4px;
}

.skip-link {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 5000;
    padding: 10px 16px;
    background: var(--white);
    color: var(--ink);
    border: 2px solid var(--burgundy);
    transform: translateY(-160%);
    transition: transform 180ms ease;
}

.skip-link:focus {
    transform: translateY(0);
}

.container {
    width: min(calc(100% - 40px), var(--container));
    margin-inline: auto;
}

.section {
    padding: 105px 0;
}

.section--light {
    background: var(--paper-light);
}

.section--white {
    background: var(--white);
}

.section--paper {
    background: var(--paper);
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 18px;
    color: var(--burgundy);
    font-size: 0.79rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    line-height: 1.2;
    text-transform: uppercase;
}

.eyebrow::before {
    width: 36px;
    height: 2px;
    background: currentColor;
    content: "";
}

.section-title {
    max-width: 850px;
    margin: 0;
    font-family: var(--serif);
    font-size: clamp(2.15rem, 4vw, 4.1rem);
    font-weight: 400;
    letter-spacing: -0.045em;
    line-height: 1.12;
}

.section-intro {
    max-width: 750px;
    margin: 24px 0 0;
    color: var(--muted);
    font-size: 1.08rem;
}

.section-heading {
    margin-bottom: 55px;
}

.button {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 2px;
    background: var(--burgundy);
    color: var(--white);
    font-size: 0.92rem;
    font-weight: 700;
    letter-spacing: 0.035em;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    transition:
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        transform 180ms ease;
}

.button:hover {
    background: var(--burgundy-dark);
    transform: translateY(-2px);
}

.button--light {
    background: var(--white);
    color: var(--burgundy-dark);
}

.button--light:hover {
    background: var(--paper);
    color: var(--burgundy-dark);
}

.button--dark {
    background: var(--charcoal);
    color: var(--white);
}

.button--dark:hover {
    background: #111210;
}

.text-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--burgundy);
    font-weight: 700;
    text-decoration: none;
}

.text-link::after {
    content: "→";
    transition: transform 180ms ease;
}

.text-link:hover::after {
    transform: translateX(4px);
}

/* Header */

.site-header {
    position: fixed;
    inset: 0 0 auto;
    z-index: 1000;
    height: var(--header-height);
    background: rgba(250, 248, 243, 0.97);
    border-bottom: 1px solid rgba(30, 31, 29, 0.12);
}

.header-inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.brand {
    display: inline-flex;
    min-width: 250px;
    align-items: center;
    gap: 13px;
    color: var(--ink);
    text-decoration: none;
}

.brand-mark {
    display: grid;
    width: 46px;
    height: 46px;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid var(--burgundy);
    color: var(--burgundy);
    font-family: var(--serif);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: -0.06em;
}

.brand-copy {
    display: grid;
    line-height: 1.1;
}

.brand-name {
    font-family: var(--serif);
    font-size: 0.96rem;
    font-weight: 700;
}

.brand-type {
    margin-top: 5px;
    color: var(--muted);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
}

.primary-nav {
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-link,
.nav-dropdown > summary {
    position: relative;
    display: flex;
    min-height: 44px;
    align-items: center;
    gap: 7px;
    padding: 10px 9px;
    border: 0;
    color: var(--charcoal);
    font-size: 0.84rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    white-space: nowrap;
    list-style: none;
}

.nav-link::after,
.nav-dropdown.is-active > summary::before {
    position: absolute;
    right: 9px;
    bottom: 4px;
    left: 9px;
    height: 2px;
    background: var(--burgundy);
    content: "";
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 180ms ease;
}

.nav-link:hover::after,
.nav-link.is-active::after,
.nav-dropdown.is-active > summary::before {
    transform: scaleX(1);
}

.nav-dropdown {
    position: relative;
}

.nav-dropdown > summary {
    cursor: pointer;
}

.nav-dropdown > summary::-webkit-details-marker {
    display: none;
}

.nav-dropdown > summary::after {
    width: 7px;
    height: 7px;
    margin-top: -4px;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    content: "";
    transform: rotate(45deg);
    transition: transform 180ms ease;
}

.nav-dropdown[open] > summary::after {
    margin-top: 4px;
    transform: rotate(225deg);
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 290px;
    padding: 10px;
    background: var(--white);
    border: 1px solid var(--stone);
    box-shadow: 0 20px 45px rgba(25, 25, 23, 0.14);
}

.dropdown-menu--wide {
    width: 320px;
}

.dropdown-menu a {
    display: block;
    padding: 12px 13px;
    border-bottom: 1px solid var(--stone-light);
    color: var(--ink);
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.35;
    text-decoration: none;
}

.dropdown-menu a:last-child {
    border-bottom: 0;
}

.dropdown-menu a:hover {
    background: var(--paper);
    color: var(--burgundy);
}

.header-cta {
    min-height: 44px;
    padding: 11px 15px;
    font-size: 0.78rem;
}

.menu-toggle {
    display: none;
    width: 46px;
    height: 46px;
    place-items: center;
    padding: 0;
    border: 1px solid var(--stone);
    background: transparent;
    color: var(--ink);
}

.menu-toggle-lines,
.menu-toggle-lines::before,
.menu-toggle-lines::after {
    display: block;
    width: 21px;
    height: 2px;
    background: currentColor;
    content: "";
    transition: transform 180ms ease;
}

.menu-toggle-lines {
    position: relative;
}

.menu-toggle-lines::before {
    position: absolute;
    top: -7px;
}

.menu-toggle-lines::after {
    position: absolute;
    top: 7px;
}

.menu-toggle[aria-expanded="true"] .menu-toggle-lines {
    background: transparent;
}

.menu-toggle[aria-expanded="true"] .menu-toggle-lines::before {
    transform: translateY(7px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] .menu-toggle-lines::after {
    transform: translateY(-7px) rotate(-45deg);
}

/* Interior hero */

.subhero {
    position: relative;
    min-height: 610px;
    margin-top: var(--header-height);
    overflow: hidden;
    background: var(--charcoal);
    color: var(--white);
}

.subhero::before {
    position: absolute;
    inset: 0;
    background-image: var(--hero-image);
    background-position: center;
    background-size: cover;
    content: "";
}

.subhero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(23, 24, 22, 0.68);
}

.subhero-inner {
    position: relative;
    z-index: 2;
    display: flex;
    min-height: 610px;
    align-items: flex-end;
    padding-top: 120px;
    padding-bottom: 85px;
}

.subhero-content {
    max-width: 910px;
}

.hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 22px;
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.hero-eyebrow::before {
    width: 40px;
    height: 2px;
    background: var(--white);
    content: "";
}

.subhero h1 {
    margin: 0;
    font-family: var(--serif);
    font-size: clamp(2.9rem, 6.5vw, 6rem);
    font-weight: 400;
    letter-spacing: -0.055em;
    line-height: 1.04;
}

.subhero-intro {
    max-width: 760px;
    margin: 28px 0 0;
    color: rgba(255, 255, 255, 0.84);
    font-size: clamp(1.03rem, 2vw, 1.25rem);
}

/* Main content */

.content-split,
.profile-layout,
.attorney-overview,
.practice-detail-layout,
.consultation-page-layout,
.contact-page-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    align-items: start;
    gap: clamp(50px, 8vw, 100px);
}

.content-image img {
    width: 100%;
    min-height: 650px;
    object-fit: cover;
}

.prose p {
    color: var(--muted);
}

.prose .lead {
    color: var(--ink);
    font-family: var(--serif);
    font-size: 1.25rem;
    line-height: 1.72;
}

.prose > .button {
    margin-top: 18px;
}

.profile-role {
    color: var(--burgundy) !important;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid var(--stone);
    border-left: 1px solid var(--stone);
}

.feature-card {
    min-height: 280px;
    padding: 32px;
    border-right: 1px solid var(--stone);
    border-bottom: 1px solid var(--stone);
    background: var(--white);
}

.feature-number {
    display: block;
    margin-bottom: 50px;
    color: var(--burgundy);
    font-family: var(--serif);
}

.feature-card h3 {
    margin: 0 0 13px;
    font-family: var(--serif);
    font-size: 1.2rem;
}

.feature-card p {
    margin: 0;
    color: var(--muted);
    font-size: 0.93rem;
}

.two-column-copy {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.7fr);
    gap: clamp(50px, 9vw, 120px);
    align-items: start;
}

.statement-panel {
    padding: 38px;
    background: var(--burgundy);
    color: var(--white);
}

.statement-panel--dark {
    background: var(--charcoal);
}

.statement-label,
.contact-method-label {
    display: block;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.statement-panel h3 {
    margin: 0 0 18px;
    font-family: var(--serif);
    font-size: 1.65rem;
    font-weight: 400;
    line-height: 1.45;
}

.statement-panel p {
    color: rgba(255, 255, 255, 0.76);
}

.statement-panel .button {
    margin-top: 14px;
}

.audience-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid var(--stone);
    border-left: 1px solid var(--stone);
}

.audience-card {
    min-height: 235px;
    padding: 32px;
    border-right: 1px solid var(--stone);
    border-bottom: 1px solid var(--stone);
}

.audience-card h3 {
    margin: 0 0 15px;
    font-family: var(--serif);
    font-size: 1.3rem;
}

.audience-card p {
    margin: 0;
    color: var(--muted);
}

.attorney-overview-image img {
    width: 100%;
    min-height: 680px;
    object-fit: cover;
    object-position: center top;
}

.profile-gallery {
    position: relative;
    min-height: 760px;
}

.profile-primary {
    width: 88%;
    height: 680px;
    object-fit: cover;
    object-position: center top;
}

.profile-secondary {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 46%;
    height: 310px;
    border: 10px solid var(--paper-light);
    object-fit: cover;
    object-position: center top;
}

/* Practices */

.practice-overview-grid {
    display: grid;
    gap: 22px;
}

.practice-overview-card {
    display: grid;
    grid-template-columns: 360px minmax(0, 1fr);
    min-height: 310px;
    border: 1px solid var(--stone);
    background: var(--white);
}

.practice-card-image {
    overflow: hidden;
}

.practice-card-image img {
    width: 100%;
    height: 100%;
    min-height: 310px;
    object-fit: cover;
    transition: transform 300ms ease;
}

.practice-card-image:hover img {
    transform: scale(1.025);
}

.practice-card-content {
    align-self: center;
    padding: 40px 48px;
}

.practice-card-number {
    display: block;
    margin-bottom: 15px;
    color: var(--burgundy);
    font-size: 0.73rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.practice-card-content h2 {
    margin: 0 0 14px;
    font-family: var(--serif);
    font-size: clamp(1.7rem, 3vw, 2.55rem);
    font-weight: 400;
}

.practice-card-content h2 a {
    text-decoration: none;
}

.practice-card-content h2 a:hover {
    color: var(--burgundy);
}

.practice-card-content p {
    max-width: 690px;
    margin: 0 0 22px;
    color: var(--muted);
}

.practice-detail-layout {
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.65fr);
}

.service-list-panel {
    padding: 35px;
    background: var(--charcoal);
    color: var(--white);
}

.service-list-panel .statement-label {
    margin-bottom: 25px;
}

.service-list-panel ul {
    display: grid;
    gap: 11px;
    margin: 0 0 30px;
    padding-left: 20px;
    color: rgba(255, 255, 255, 0.78);
}

/* FAQ */

.faq-list {
    border-top: 1px solid var(--stone);
}

.faq-item {
    border-bottom: 1px solid var(--stone);
}

.faq-item summary {
    position: relative;
    padding: 28px 55px 28px 0;
    cursor: pointer;
    font-family: var(--serif);
    font-size: 1.15rem;
    list-style: none;
}

.faq-item summary::-webkit-details-marker {
    display: none;
}

.faq-item summary::before,
.faq-item summary::after {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 18px;
    height: 2px;
    background: var(--burgundy);
    content: "";
}

.faq-item summary::after {
    transform: rotate(90deg);
}

.faq-item[open] summary::after {
    transform: rotate(0);
}

.faq-answer {
    max-width: 850px;
    padding: 0 55px 28px 0;
}

.faq-answer p {
    margin: 0;
    color: var(--muted);
}

/* Testimonials */

.notice-panel {
    max-width: 900px;
    margin-bottom: 45px;
    padding: 25px 28px;
    border-left: 4px solid var(--burgundy);
    background: var(--white);
}

.notice-panel strong {
    display: block;
    margin-bottom: 8px;
    font-family: var(--serif);
    font-size: 1.15rem;
}

.notice-panel p {
    margin: 0;
    color: var(--muted);
}

.testimonial-page-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid var(--stone);
    border-left: 1px solid var(--stone);
}

.testimonial-card {
    display: flex;
    min-height: 340px;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    border-right: 1px solid var(--stone);
    border-bottom: 1px solid var(--stone);
    background: var(--white);
}

.testimonial-card:nth-child(even) {
    background: var(--paper);
}

.quote-mark {
    color: var(--burgundy);
    font-family: var(--serif);
    font-size: 4rem;
    line-height: 0.8;
}

.testimonial-card blockquote {
    margin: 26px 0 35px;
    color: var(--charcoal-soft);
    font-family: var(--serif);
    font-size: 1.02rem;
    line-height: 1.75;
}

.testimonial-card footer strong {
    display: block;
}

.testimonial-card footer span {
    display: block;
    margin-top: 4px;
    color: var(--muted);
    font-size: 0.72rem;
    letter-spacing: 0.055em;
    text-transform: uppercase;
}

/* Consultation */

.consultation-page-layout {
    grid-template-columns: minmax(320px, 0.7fr) minmax(0, 1.15fr);
}

.consultation-information {
    padding-right: 20px;
}

.consultation-information > p {
    color: var(--muted);
}

.check-list {
    display: grid;
    gap: 15px;
    margin: 33px 0;
    padding: 0;
    list-style: none;
}

.check-list li {
    display: grid;
    grid-template-columns: 9px 1fr;
    gap: 13px;
    color: var(--charcoal-soft);
}

.check-list li::before {
    width: 8px;
    height: 8px;
    margin-top: 9px;
    background: var(--burgundy);
    content: "";
}

.contact-mini-panel {
    padding: 25px;
    background: var(--charcoal);
    color: var(--white);
}

.contact-mini-panel strong {
    display: block;
    margin-bottom: 8px;
    font-family: var(--serif);
}

.contact-mini-panel a {
    color: rgba(255, 255, 255, 0.82);
    text-underline-offset: 4px;
}

.consultation-form-card {
    padding: 55px;
    background: var(--white);
    border: 1px solid var(--stone);
}

.consultation-form-card > h2 {
    margin: 0 0 8px;
    font-family: var(--serif);
    font-size: 2rem;
    font-weight: 400;
}

.consultation-form-card > p {
    margin: 0 0 30px;
    color: var(--muted);
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 21px;
}

.form-field {
    display: grid;
    gap: 7px;
}

.form-field--full {
    grid-column: 1 / -1;
}

.form-field label {
    color: var(--charcoal);
    font-size: 0.83rem;
    font-weight: 700;
}

.required {
    color: var(--burgundy);
}

.form-field input,
.form-field select,
.form-field textarea {
    width: 100%;
    min-height: 52px;
    padding: 12px 14px;
    border: 1px solid #bdb8ae;
    border-radius: 0;
    background: var(--white);
    color: var(--ink);
}

.form-field textarea {
    min-height: 165px;
    resize: vertical;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
    border-color: var(--burgundy);
    outline: 2px solid rgba(121, 45, 60, 0.16);
}

.checkbox-field {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 11px;
    align-items: start;
}

.checkbox-field input {
    width: 18px;
    height: 18px;
    margin: 4px 0 0;
    accent-color: var(--burgundy);
}

.checkbox-field label {
    color: var(--muted);
    font-size: 0.82rem;
}

.form-actions {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 28px;
}

.form-status {
    min-height: 24px;
    color: var(--burgundy);
    font-size: 0.84rem;
    font-weight: 600;
}

.form-privacy {
    margin: 18px 0 0 !important;
    color: var(--muted);
    font-size: 0.77rem;
}

/* Contact */

.contact-page-layout {
    grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid var(--stone);
    border-left: 1px solid var(--stone);
}

.contact-method-card {
    min-height: 285px;
    padding: 31px;
    border-right: 1px solid var(--stone);
    border-bottom: 1px solid var(--stone);
    background: var(--white);
}

.contact-method-card:nth-child(2),
.contact-method-card:nth-child(3) {
    background: var(--paper);
}

.contact-method-label {
    color: var(--burgundy);
}

.contact-method-card h3 {
    margin: 0 0 13px;
    font-family: var(--serif);
    font-size: 1.27rem;
    font-weight: 400;
    overflow-wrap: anywhere;
}

.contact-method-card p {
    margin: 0 0 24px;
    color: var(--muted);
}

.contact-email {
    font-size: 1rem !important;
}

/* CTA */

.page-cta {
    padding: 65px 0;
    background: var(--burgundy);
    color: var(--white);
}

.page-cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
}

.page-cta-label {
    margin: 0 0 9px;
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.73rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.page-cta h2 {
    max-width: 760px;
    margin: 0;
    font-family: var(--serif);
    font-size: clamp(1.85rem, 3.5vw, 3.2rem);
    font-weight: 400;
    line-height: 1.2;
}

.page-cta p {
    max-width: 720px;
    margin: 13px 0 0;
    color: rgba(255, 255, 255, 0.75);
}

/* Footer */

.site-footer {
    padding: 58px 0 28px;
    background: #1a1b19;
    color: rgba(255, 255, 255, 0.72);
}

.footer-top {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
    padding-bottom: 45px;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--white);
}

.footer-brand .brand-mark {
    border-color: rgba(255, 255, 255, 0.55);
    color: var(--white);
}

.footer-brand strong {
    font-family: var(--serif);
    font-size: 1.05rem;
}

.footer-description {
    max-width: 600px;
    margin: 21px 0 0;
    font-size: 0.9rem;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 24px;
    align-content: start;
}

.footer-links a {
    padding: 7px 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.88rem;
    text-decoration: none;
}

.footer-links a:hover {
    color: var(--white);
    text-decoration: underline;
    text-underline-offset: 4px;
}

.footer-disclaimer {
    padding: 26px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 0.76rem;
    line-height: 1.7;
}

.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    padding-top: 27px;
    font-size: 0.76rem;
}

.back-to-top {
    color: var(--white);
    text-decoration: none;
}

/* Toast and reveal */

.toast {
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 3000;
    max-width: min(390px, calc(100% - 44px));
    padding: 14px 18px;
    background: var(--charcoal);
    color: var(--white);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
    font-size: 0.88rem;
    opacity: 0;
    pointer-events: none;
    transform: translateY(15px);
    transition: opacity 180ms ease, transform 180ms ease;
}

.toast.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 650ms ease, transform 650ms ease;
}

.reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive */

@media (max-width: 1100px) {
    :root {
        --header-height: 74px;
    }

    .brand {
        min-width: 225px;
    }

    .brand-name {
        font-size: 0.88rem;
    }

    .primary-nav {
        position: fixed;
        top: var(--header-height);
        right: 0;
        bottom: 0;
        width: min(390px, 100%);
        display: block;
        padding: 24px;
        overflow-y: auto;
        background: var(--paper-light);
        border-left: 1px solid var(--stone);
        transform: translateX(105%);
        transition: transform 220ms ease;
    }

    .primary-nav.is-open {
        transform: translateX(0);
    }

    .nav-link,
    .nav-dropdown > summary {
        width: 100%;
        min-height: 52px;
        justify-content: space-between;
        padding: 14px 4px;
        border-bottom: 1px solid var(--stone);
        font-size: 0.96rem;
    }

    .nav-link::after,
    .nav-dropdown.is-active > summary::before {
        display: none;
    }

    .nav-dropdown {
        width: 100%;
    }

    .dropdown-menu,
    .dropdown-menu--wide {
        position: static;
        width: 100%;
        padding: 8px 0 16px 14px;
        border: 0;
        border-bottom: 1px solid var(--stone);
        background: transparent;
        box-shadow: none;
    }

    .dropdown-menu a {
        padding: 11px 8px;
    }

    .header-cta {
        width: 100%;
        margin-top: 20px;
    }

    .menu-toggle {
        display: grid;
    }

    .content-split,
    .profile-layout,
    .attorney-overview,
    .practice-detail-layout,
    .consultation-page-layout,
    .contact-page-layout {
        grid-template-columns: 1fr;
    }

    .content-image img,
    .attorney-overview-image img {
        min-height: 560px;
    }

    .feature-grid,
    .testimonial-page-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .practice-overview-card {
        grid-template-columns: 290px minmax(0, 1fr);
    }

    .two-column-copy {
        grid-template-columns: 1fr;
    }

    .consultation-information {
        padding-right: 0;
    }
}

@media (max-width: 760px) {
    body {
        font-size: 16px;
    }

    .container {
        width: min(calc(100% - 28px), var(--container));
    }

    .section {
        padding: 75px 0;
    }

    .brand {
        min-width: 0;
    }

    .brand-mark {
        width: 42px;
        height: 42px;
    }

    .brand-name {
        font-size: 0.8rem;
    }

    .brand-type {
        display: none;
    }

    .subhero,
    .subhero-inner {
        min-height: 570px;
    }

    .subhero-inner {
        padding-bottom: 65px;
    }

    .subhero h1 {
        font-size: clamp(2.7rem, 12vw, 4.5rem);
    }

    .content-image img,
    .attorney-overview-image img {
        min-height: 440px;
    }

    .feature-grid,
    .audience-grid,
    .testimonial-page-grid,
    .contact-methods {
        grid-template-columns: 1fr;
    }

    .feature-card {
        min-height: 235px;
    }

    .profile-gallery {
        min-height: 620px;
    }

    .profile-primary {
        width: 100%;
        height: 555px;
    }

    .profile-secondary {
        right: 12px;
        width: 48%;
        height: 240px;
        border-width: 7px;
    }

    .practice-overview-card {
        grid-template-columns: 1fr;
    }

    .practice-card-image img {
        min-height: 230px;
        max-height: 260px;
    }

    .practice-card-content {
        padding: 28px 25px 34px;
    }

    .consultation-form-card {
        padding: 34px 22px;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .form-field--full {
        grid-column: auto;
    }

    .form-actions {
        display: grid;
    }

    .form-actions .button {
        width: 100%;
    }

    .page-cta-inner {
        display: grid;
    }

    .page-cta .button {
        width: 100%;
    }

    .footer-top {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .footer-links {
        grid-template-columns: 1fr;
    }

    .footer-bottom {
        display: grid;
    }
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }
}
`;

const subpagesJs = String.raw`
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

            const data = new FormData(consultationForm);

            const fullName = String(
                data.get("fullName") || ""
            ).trim();

            const email = String(
                data.get("email") || ""
            ).trim();

            const phone = String(
                data.get("phone") || ""
            ).trim();

            const contactMethod = String(
                data.get("contactMethod") || ""
            ).trim();

            const service = String(
                data.get("service") || ""
            ).trim();

            const location = String(
                data.get("location") || ""
            ).trim();

            const preferredDateValue = String(
                data.get("preferredDate") || ""
            ).trim();

            const preferredTime = String(
                data.get("preferredTime") || ""
            ).trim();

            const summary = String(
                data.get("summary") || ""
            ).trim();

            const subject =
                "Consultation request — " +
                service +
                " — " +
                fullName;

            const message = [
                "NEW CONSULTATION REQUEST",
                "",
                "Name: " + fullName,
                "Email: " + email,
                "Phone or Telegram: " +
                    (phone || "Not provided"),
                "Preferred contact method: " +
                    contactMethod,
                "Requested service: " + service,
                "Location: " +
                    (location || "Not provided"),
                "Preferred date: " +
                    (preferredDateValue || "No preference"),
                "Preferred time: " + preferredTime,
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
                "mailto:" +
                primaryEmail +
                "?cc=" +
                encodeURIComponent(alternateEmail) +
                "&subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(message);

            if (formStatus) {
                formStatus.textContent =
                    "Opening your email application…";
            }

            window.location.href = mailtoUrl;
        }
    );
}
`;

async function fileExists(filePath) {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function patchHomePage() {
    if (!(await fileExists(homeFile))) {
        throw new Error(
            "index.html was not found. Place build-pages.mjs beside your current index.html."
        );
    }

    const originalHome = await readFile(homeFile, "utf8");

    if (!(await fileExists(homeBackupFile))) {
        await writeFile(
            homeBackupFile,
            originalHome,
            "utf8"
        );
    }

    const replacements = [
        ['href="#about"', 'href="about.html"'],
        [
            'href="#jeanette-stevenson"',
            'href="jeanette-stevenson.html"'
        ],
        [
            'href="#practice-areas"',
            'href="practice-areas.html"'
        ],
        [
            'href="#family-law"',
            'href="family-marriage-law.html"'
        ],
        [
            'href="#criminal-defence"',
            'href="criminal-defence.html"'
        ],
        [
            'href="#real-estate"',
            'href="real-estate-property-law.html"'
        ],
        [
            'href="#civil-litigation"',
            'href="civil-litigation.html"'
        ],
        [
            'href="#estate-planning"',
            'href="estate-planning.html"'
        ],
        [
            'href="#testimonials"',
            'href="testimonials.html"'
        ],
        [
            'href="#consultation"',
            'href="consultation.html"'
        ],
        ['href="#contact"', 'href="contact.html"']
    ];

    let updatedHome = originalHome;

    for (const [currentValue, newValue] of replacements) {
        updatedHome = updatedHome.replaceAll(
            currentValue,
            newValue
        );
    }

    await writeFile(homeFile, updatedHome, "utf8");
}

async function writeProjectFiles() {
    await mkdir(assetsDirectory, {
        recursive: true
    });

    await writeFile(
        path.join(assetsDirectory, "subpages.css"),
        subpagesCss.trim() + "\n",
        "utf8"
    );

    await writeFile(
        path.join(assetsDirectory, "subpages.js"),
        subpagesJs.trim() + "\n",
        "utf8"
    );

    const pages = new Map([
        ["about.html", renderAboutPage()],
        ["attorneys.html", renderAttorneysPage()],
        [
            "jeanette-stevenson.html",
            renderJeanettePage()
        ],
        [
            "practice-areas.html",
            renderPracticeOverviewPage()
        ],
        [
            "testimonials.html",
            renderTestimonialsPage()
        ],
        [
            "consultation.html",
            renderConsultationPage()
        ],
        ["contact.html", renderContactPage()]
    ]);

    for (const practice of practices) {
        pages.set(
            `${practice.slug}.html`,
            renderPracticePage(practice)
        );
    }

    for (const [filename, content] of pages) {
        await writeFile(
            path.join(projectRoot, filename),
            content.trim() + "\n",
            "utf8"
        );
    }

    return [...pages.keys()];
}

async function checkImages() {
    const requiredImages = [
        "courthouse-atrium.jpg",
        "jeanette-desk.jpg",
        "modern-courthouse.jpg",
        "marble-stairs.jpg",
        "city-towers.jpg",
        "gavel.jpg",
        "law-library-glass.jpg",
        "courthouse-columns.jpg",
        "law-books.jpg",
        "jeanette-library.jpg",
        "jeanette-archbold.jpg"
    ];

    const missingImages = [];

    for (const image of requiredImages) {
        const imagePath = path.join(
            assetsDirectory,
            image
        );

        if (!(await fileExists(imagePath))) {
            missingImages.push(image);
        }
    }

    return missingImages;
}

async function build() {
    await patchHomePage();

    const generatedPages =
        await writeProjectFiles();

    const missingImages = await checkImages();

    console.log("");
    console.log("Stevenson Legal Group website updated.");
    console.log("");
    console.log("Homepage:");
    console.log("  index.html");
    console.log("");
    console.log("Homepage backup:");
    console.log("  index.home-backup.html");
    console.log("");
    console.log("Generated pages:");

    generatedPages.forEach((page) => {
        console.log("  " + page);
    });

    console.log("");
    console.log("Generated shared assets:");
    console.log("  assets/subpages.css");
    console.log("  assets/subpages.js");

    if (missingImages.length > 0) {
        console.log("");
        console.warn(
            "The following image files were not found in the assets folder:"
        );

        missingImages.forEach((image) => {
            console.warn("  assets/" + image);
        });
    }

    console.log("");
}

build().catch((error) => {
    console.error("");
    console.error("Build failed:");
    console.error(error.message);
    console.error("");

    process.exitCode = 1;
});
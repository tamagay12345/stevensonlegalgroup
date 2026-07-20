STEVENSON LEGAL GROUP LLP WEBSITE

MAIN HOMEPAGE
- index.html
- style.css
- script.js

UPDATED MAIN PAGES
- attorneys.html
- practice-areas.html
- testimonials.html
- consultation.html
- contact.html

SHARED FILES FOR THE UPDATED PAGES
- assets/pages.css
- assets/pages.js

OTHER WEBSITE PAGES RETAINED
- about.html
- jeanette-stevenson.html
- family-marriage-law.html
- criminal-defence.html
- real-estate-property-law.html
- civil-litigation.html
- estate-planning.html

LEGACY SHARED FILES RETAINED FOR THE OTHER PAGES
- assets/subpages.css
- assets/subpages.js

REQUIRED IMAGES
Place all required JPG images inside the assets folder using the exact filenames
listed in assets/README.txt.

OPENING THE WEBSITE
Open index.html in a browser, or upload the entire folder to your hosting service.
Do not upload only the HTML files; the CSS, JavaScript and assets folder are also
required.

CONSULTATION FORM BEHAVIOUR
- Book Now does not open an email application.
- After valid fields are completed, the form clears and a success pop-up appears.
- Cancel closes the pop-up.
- Go Back / Enter New Details closes it and returns focus to the form.
- This front-end-only package does not send or store submissions on a server.
  A backend or form service is required if the firm needs to receive the details.

GOOGLE SHEET CONSULTATION INTEGRATION
-------------------------------------
The Book Now forms on consultation.html and index.html submit consultation details to the configured Google Apps Script Web App. The Apps Script stores each submission in the Google Sheet tab named Consultation. After the request is sent, the form clears and the success pop-up appears.

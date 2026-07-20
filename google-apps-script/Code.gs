const SHEET_NAME = "Consultation Requests";

const HEADERS = [
  "Submitted At",
  "Submission ID",
  "Source Page",
  "Full Name",
  "Email Address",
  "Phone Number",
  "Preferred Contact Method",
  "Legal Service",
  "Province / Territory / Country",
  "Preferred Consultation Date",
  "Preferred Time",
  "Opposing Party / Organization",
  "Known Court Date / Deadline",
  "Brief Summary",
  "Consent Confirmed"
];

function doPost(e) {
  const parameters = (e && e.parameter) || {};

  // Honeypot: silently accept likely bot submissions without saving them.
  if (String(parameters.website || "").trim()) {
    return createResponse_("Request received.");
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);

  try {
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.autoResizeColumns(1, HEADERS.length);
    }

    sheet.appendRow([
      new Date(),
      Utilities.getUuid(),
      safeCell_(parameters.sourcePage),
      safeCell_(parameters.fullName),
      safeCell_(parameters.email),
      safeCell_(parameters.phone),
      safeCell_(parameters.contactMethod),
      safeCell_(parameters.service),
      safeCell_(parameters.location),
      safeCell_(parameters.preferredDate),
      safeCell_(parameters.preferredTime),
      safeCell_(parameters.opposingParty),
      safeCell_(parameters.deadline),
      safeCell_(parameters.summary),
      parameters.consent ? "Yes" : "No"
    ]);
  } finally {
    lock.releaseLock();
  }

  return createResponse_("Consultation request saved successfully.");
}

function doGet() {
  return createResponse_("Consultation submission service is active.");
}

function safeCell_(value) {
  const text = String(value || "").trim();

  // Prevent spreadsheet formulas from being created by form input.
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function createResponse_(message) {
  return HtmlService.createHtmlOutput(
    "<!doctype html><html><head><meta charset='utf-8'></head>" +
    "<body><p>" + escapeHtml_(message) + "</p></body></html>"
  ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// dotdock app runtime config for public/static pages.
// IMPORTANT: This file is still client-visible in the browser.
// Do not place true secrets here. Store real secrets in server-side functions only.
window.DOTDOCK_APP_CONFIG = window.DOTDOCK_APP_CONFIG || {
  dataUrl: "https://script.google.com/macros/s/AKfycbxme0FmUWdOmNG5EVHKxkQkbm0alqCo6vWJgESo8SBzwIQunlTU0f9MdGlEqu2AqkQa/exec",
  // Optional Ask dotdock backend endpoint (recommended: your Google Apps Script Web App URL).
  // Example: "https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec?action=ask_dotdock"
  askApiUrl: ""
};

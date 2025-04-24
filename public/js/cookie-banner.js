
// When the user clicks "Accept All": //

// The localStorage.setItem("cookiesAccepted", "true"); saves their preference. //

// The banner is hidden with banner.style.display = "none";. //

// It triggers enableCookies(), which loads cookies such as Google Analytics (or other services you use). //

// When the user clicks "Reject": //

// The localStorage.setItem("cookiesAccepted", "false"); saves their preference to not use cookies. //

// The banner is hidden with banner.style.display = "none";. //

// It triggers disableCookies(), ensuring no tracking or analytics cookies are loaded. //

        //PAY ATTENTION TO THIS LATER ON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// When the user clicks "Reject": //

// The localStorage.setItem("cookiesAccepted", "false"); saves their preference to not use cookies. //

// The banner is hidden with banner.style.display = "none";. //

// It triggers disableCookies(), ensuring no tracking or analytics cookies are loaded. //

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");

  // Show banner only if no cookie preference is saved
  if (!localStorage.getItem("cookiesAccepted")) {
    banner.style.display = "none";
  }

  // Accept cookies: store preference in localStorage and hide the banner
  document.getElementById("accept-cookies").onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";  // Hide the cookie banner
    enableCookies();  // Function to enable cookies (e.g., analytics)
  };

  // Reject cookies: store preference in localStorage and hide the banner
  document.getElementById("reject-cookies").onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    banner.style.display = "none";  // Hide the cookie banner
    disableCookies();  // Function to disable cookies (e.g., no tracking)
  };
});

// Function to enable cookies (e.g., analytics)
function enableCookies() {
  // Example: Load Google Analytics script after acceptance
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID";  // Replace with your Google Analytics ID
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');  // Replace with your Google Analytics ID
  };
}

// Function to disable cookies (no tracking)
function disableCookies() {
  // Example: Do not load any tracking scripts or analytics
  console.log("Cookies rejected. No tracking will be enabled.");
}

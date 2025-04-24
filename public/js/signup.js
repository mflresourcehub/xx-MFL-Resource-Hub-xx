// signup.js
const signupButton = document.getElementById("signup-btn");
const signupForm = document.getElementById("signup-form");

signupButton.addEventListener("click", function() {
    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
    } else {
        signupForm.style.display = "none";
    }
});

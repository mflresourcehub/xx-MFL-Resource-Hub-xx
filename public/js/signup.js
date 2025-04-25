// Get the signup button, signup form, and dropdown menu
const signupButton = document.getElementById("signup-btn");
const signupForm = document.getElementById("signup-form");
const userRoleDropdown = document.getElementById("user-role");
const teacherForm = document.getElementById('teacher-form');
const pupilForm = document.getElementById('pupil-form');

// Initially, hide both forms
teacherForm.style.display = 'none';
pupilForm.style.display = 'none';

// Function to show the corresponding form based on user role selection
function showForm() {
    var userRole = userRoleDropdown.value;

    // Hide both forms initially
    teacherForm.style.display = 'none';
    pupilForm.style.display = 'none';

    // Show the appropriate form based on the selection
    if (userRole === 'teacher') {
        teacherForm.style.display = 'block';
    } else if (userRole === 'pupil') {
        pupilForm.style.display = 'block';
    }
}

// Event listener for signup button to toggle form visibility
signupButton.addEventListener("click", function() {
    if (signupForm.style.display === "none" || signupForm.style.display === "") {
        signupForm.style.display = "block";
    } else {
        signupForm.style.display = "none";
    }
});

// Event listener for the user role dropdown to show the correct form
userRoleDropdown.addEventListener('change', showForm);

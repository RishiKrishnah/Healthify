
// Function to check if the user is a doctor
function checkUserRole() {
    let userRole = localStorage.getItem("userRole"); // Assuming role is stored in localStorage
    let doctorPortalBtn = document.getElementById("doctorPortalBtn");

    if (userRole === "doctor") {
        doctorPortalBtn.style.display = "inline-block";
    }
}
// Function to open Doctor's Portal
function openDoctorPortal() {
    alert("Redirecting to Doctor's Portal...");
    window.location.href = "doctor_portal.html";
}

// Call the function on page load to check user role
checkUserRole();

document.addEventListener("DOMContentLoaded", function () {
    // Simulating a login check using localStorage
    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    let isDoctor = localStorage.getItem("userType") === "doctor";

    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const doctorPortalBtn = document.getElementById("doctorPortalBtn");
    const bookNowBtn = document.getElementById("bookNowBtn");

    if (isLoggedIn) {
        // If logged in, hide login and signup buttons, show logout
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";

        // If the user is a doctor, show the Doctor's Portal button
        if (isDoctor) {
            doctorPortalBtn.style.display = "inline-block";
        }
    } else {
        // If not logged in, hide logout button
        logoutBtn.style.display = "none";
        doctorPortalBtn.style.display = "none";
    }
});

// Function to handle booking
function handleBooking() {
    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        // Redirect to appointment booking page if logged in
        window.location.href = "Homepage.html";
    } else {
        // Redirect to login page if not logged in
        window.location.href = "LoginPage.html";
    }
}

// Function to open Doctor's Portal
function openDoctorPortal() {
    window.location.href = "doctorPortal.html";
}

// Function to log out
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userType");
    window.location.href = "index.html"; // Reload page
}

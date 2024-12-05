function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.getElementById("fullnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("dobError").textContent = "";
    document.getElementById("termsError").textContent = "";

    // Full Name validation
    const fullname = document.getElementById("fullname").value;
    if (fullname === "") {
        document.getElementById("fullnameError").textContent = "Full name is required.";
        valid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        valid = false;
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        valid = false;
    }

    // Date of Birth validation
    const dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        valid = false;
    }

    // Terms and Conditions validation
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
        valid = false;
    }

    return valid;
}

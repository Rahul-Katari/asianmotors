let currentTab = 0; // Start at the first step
showTab(currentTab); // Display the current tab

function showTab(n) {
    const steps = document.getElementsByClassName("step");
    const indicators = document.getElementsByClassName("stepIndicator");

    // Display the current step
    steps[n].style.display = "flex";

    // Handle Previous and Next buttons
    document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline";
    document.getElementById("nextBtn").innerHTML = n === steps.length - 1 ? "Submit" : "Next";

    // Update the progress bar indicators
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active");
        if (i < n) indicators[i].classList.add("finish");
    }
    indicators[n].classList.add("active");
}

function nextPrev(n) {
    const steps = document.getElementsByClassName("step");

    // Validate the form fields before moving forward
    if (n === 1 && !validateForm()) return false;

    // Hide the current step
    steps[currentTab].style.display = "none";

    // Move to the next step
    currentTab += n;

    // If the user reaches the end of the form, submit it
    if (currentTab >= steps.length) {
        document.getElementById("multiStepForm").submit();
        return false;
    }

    // Otherwise, show the next tab
    showTab(currentTab);
}

function validateForm() {
    const inputs = document.getElementsByClassName("step")[currentTab].getElementsByTagName("input");
    const selects = document.getElementsByClassName("step")[currentTab].getElementsByTagName("select");
    let valid = true;

    // Validate inputs
    for (const input of inputs) {
        if (input.value.trim() === "") {
            input.classList.add("is-invalid");
            showError(input.parentNode, "This field is required");
            valid = false;
        } else {
            input.classList.remove("is-invalid");
            hideError(input);
        }
    }

    // Validate selects
    for (const select of selects) {
        if (select.value.trim() === "") {
            select.classList.add("is-invalid");
            showError(select.parentNode, "Please select an option");
            valid = false;
        } else {
            select.classList.remove("is-invalid");
            hideError(select);
        }
    }

    return valid;
}

function showError(element, message) {
    // Create an error message element if it doesn't exist
    let error = element.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("span");
        error.className = "error-message text-danger";
        element.parentNode.appendChild(error);
    }
    error.innerText = message;
}

function hideError(element) {
    const error = element.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
        error.remove();
    }
}

// This file contains JavaScript functionality for the flight class scheduling page.

// Function to validate the scheduling form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !email || !date || !time) {
        alert('Please fill in all fields.');
        return false;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
        // Here you can add code to send the form data to a backend service
        alert('Class scheduled successfully!');
    }
}

// Event listener for the form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scheduling-form');
    form.addEventListener('submit', handleSubmit);
});
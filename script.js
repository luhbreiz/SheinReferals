// script.js

// Function to submit the referral code
function submitReferral() {
    var referralCode = document.getElementById('referralCode').value;
    if (referralCode.trim() === '') {
        // Show error popup if referral code is empty
        showErrorPopup();
    } else {
        // Otherwise, show success popup
        showSuccessPopup();
    }
}

// Function to show the success popup
function showSuccessPopup() {
    // Display the success popup
    document.getElementById('successPopup').style.display = 'block';
}

// Function to close the success popup
function closePopup() {
    // Hide the success popup
    document.getElementById('successPopup').style.display = 'none';
}

// Function to show the error popup
function showErrorPopup() {
    // Display the error popup
    document.getElementById('errorPopup').style.display = 'block';
}

// Function to close the error popup
function closeErrorPopup() {
    // Hide the error popup
    document.getElementById('errorPopup').style.display = 'none';
}

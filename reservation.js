"use strict";

// Function to set the error message for a form input element
const setText = (element, error) => element.next().text(error);

// Function to validate the form data and returns true if all data is valid else returns false
function validateData(emailPattern) {
  let isFormValid = true;

  // Get the user input values and trim them
  const userArrivalDateElement = $("#arrival_date");
  const userArrivalDate = userArrivalDateElement.val().trim();
  userArrivalDateElement.val(userArrivalDate);

  const userNightsElement = $("#nights");
  const userNights = userNightsElement.val().trim();
  userNightsElement.val(userNights);

  const userNameElement = $("#name");
  const userName = userNameElement.val().trim();
  userNameElement.val(userName);

  const userEmailElement = $("#email");
  const userEmail = userEmailElement.val().trim();
  userEmailElement.val(userEmail);

  const userPhoneElement = $("#phone");
  const userPhone = userPhoneElement.val().trim();
  userPhoneElement.val(userPhone);

  // Check the arrival date for empty string
  if (userArrivalDate == "") {
    setText(userArrivalDateElement, "Arrival date is required.");
    isFormValid = false;
  } else {
    setText(userArrivalDateElement, "");
  }

  // Check the nights for empty string and if it is a numeric value
  if (userNights == "") {
    setText(userNightsElement, "Stay nights is required.");
    isFormValid = false;
  } else if (isNaN(userNights)) {
    setText(userNightsElement, "Must be numeric");
    isFormValid = false;
  } else {
    setText(userNightsElement, "");
  }

  // Check the username for empty string
  if (userName == "") {
    setText(userNameElement, "Username is required.");
    isFormValid = false;
  } else {
    setText(userNameElement, "");
  }

  // Check the email for empty string and test against the email pattern given
  if (userEmail == "") {
    setText(userEmailElement, "Email is required.");
    isFormValid = false;
  } else if (!emailPattern.test(userEmail)) {
    setText(userEmailElement, "Must be a valid email address");
    isFormValid = false;
  } else {
    setText(userEmailElement, "");
  }

  // Check the user phone for empty string
  if (userPhone == "") {
    setText(userPhoneElement, "Phone Number is required.");
    isFormValid = false;
  } else {
    setText(userPhoneElement, "");
  }

  // Return true if all data is valid, otherwise return false
  return isFormValid;
}

$(document).ready(() => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  // Focus on the arrival date input box when the page is loaded
  $("#arrival_date").focus();

  // Add a click event listener to the submit button, and prevent the default submit action if the data is not valid
  $("#submit").click((evt) => {
    if (!validateData(emailPattern)) {
      evt.preventDefault();
    }
  });
}); // end ready

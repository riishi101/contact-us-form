const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");

// Show input error message
function showError(input) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error"); // Remove error class on success
  formControl.classList.add("success"); // Add success class (optional)
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email not valid");
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      //console.log(input.id);
      showError(input);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners Shorter version
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([firstName, lastName, email, message]);
  checkEmail(email);
  checkQuery(generalEnquiry);
  checkQuery(supportRequest);
  validateConsent();
  alert("Message Sent! Thanks for completing the form.");
});

////////////////////////// Query container start
function checkQuery() {
  const generalEnquiryRadio = document.getElementById("generalEnquiry");
  const supportRequestRadio = document.getElementById("supportRequest");
  const queryContainer = document.querySelector(".form_control.query"); // Select the container element

  // Check if at least one radio button is selected
  if (!generalEnquiryRadio.checked && !supportRequestRadio.checked) {
    queryContainer.classList.add("error"); // Add error class to the container
  } else {
    queryContainer.classList.remove("error"); // Remove error class if a radio button is selected
  }
}

//////////////////////// Query container end

/////////////////////

// Function to validate consent checkbox
function validateConsent() {
  if (!consentCheckbox.checked) {
    // Add error class to the checkbox container (assuming CSS is set up for styling)
    consentCheckbox.parentElement.classList.add("error");
  } else {
    // Remove error class if checkbox is checked
    consentCheckbox.parentElement.classList.remove("error");
  }
}

///////////////////

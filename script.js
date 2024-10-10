const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dateInput = document.getElementById("dob");
const submitBtn = document.getElementById("submit");
const phoneInput = document.getElementById("phone");
const form = document.getElementById("userForm");
const errors = document.querySelector(".errors");
const nameError = document.querySelector(".nameError");
// regex
const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// localstorage
const nameLocalValue = localStorage.getItem("name");
const emailLocalValue = localStorage.getItem("email");
const phoneLocalValue = localStorage.getItem("phone");
const dateLocalValue = localStorage.getItem("date");
const levelLoacalStorage = localStorage.getItem("levelLoacal");
const succesSvg = document.querySelector(".succes");

console.log(nameLocalValue);

if (nameInput) {
  if (nameLocalValue) {
    nameInput.value = nameLocalValue;
  }
} else {
  console.error("nameInput element not found");
}

if (emailInput) {
  if (emailLocalValue) {
    emailInput.value = emailLocalValue;
  }
}
if (phoneInput) {
  if (phoneLocalValue) {
    phoneInput.value = phoneLocalValue;
  }
}

if (dateInput) {
  if (dateLocalValue) {
    dateInput.value = dateLocalValue;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formNameValue = e.target[0].value;

  const formEmailValue = e.target[1].value;
  const formphoneValue = e.target[2].value;
  const formDateValue = e.target[3].value;

  if (
    validateName(formNameValue) &&
    validateEmail(formEmailValue) &&
    validatePhoneNumber(formphoneValue) &&
    validateDate(formDateValue)
  ) {
    window.location.href = "thirdundex.html";
  } else {
    emailErrorDiv.classList.remove("hidden");
    phoneErrorDiv.classList.remove("hidden");
    dateErrorDiv.classList.remove("hidden");
    errors.classList.remove("hidden");
    nameInput.style.backgroundColor = "red";
    emailInput.style.backgroundColor = "red";
    phoneInput.style.backgroundColor = "red";
    dateInput.style.backgroundColor = "red";
  }
});

nameInput.addEventListener("input", function (e) {
  console.log(e.target.value);
  const nameValue = e.target.value;
  localStorage.setItem("name", nameValue);

  validateName(nameValue);
});
function validateName(name) {
  if (name.length === 0) {
    // errors.classList.add("hidden");
    nameInput.style.backgroundColor = "red";

    return false;
  }
  if (name.length < 2 || !nameRegex.test(name)) {
    // nameError.classList.remove("hidden");
    nameInput.style.backgroundColor = "red";
    return false;
  }

  if (name.length >= 2 && nameRegex.test(name)) {
    // nameError.classList.add("hidden");
    nameInput.style.backgroundColor = "green";
    succesSvg.classList.remove("hidden");

    return true;
  }
}

// console.log("Enter");
console.log(nameInput.textContent);
emailInput.addEventListener("input", function (e) {
  console.log(e.target.value);
  const emailValue = e.target.value;
  localStorage.setItem("email", emailValue);
  validateEmail(emailValue);
});
function validateEmail(email) {
  if (email.length === 0) {
    // errors.classList.add("hidden");
    // emailInput.style.backgroundColor = "red";
    succesSvg.classList.add("hidden");

    return false;
  }
  if (!emailRegex.test(email) || !validateCustomEmail(email)) {
    // nameError.classList.remove("hidden");
    succesSvg.classList.add("hidden");
    // emailInput.style.backgroundColor = "red";
    return false;
  }

  if (emailRegex.test(email) && validateCustomEmail(email)) {
    // nameError.classList.add("hidden");
    // emailInput.style.backgroundColor = "green";
    succesSvg.classList.remove("hidden");

    return true;
  }
}

function validateCustomEmail(email) {
  const domain = email.split("@")[1];
  if (domain == "laragori.ge") {
    succesSvg.classList.remove("hidden");

    return true;
  }
  return false;
}

phoneInput.addEventListener("input", function (e) {
  console.log(e.target.value);
  const phoneValue = e.target.value;
  localStorage.setItem("phone", phoneValue);
  validatePhoneNumber(phoneValue);
});

function validatePhoneNumber(number) {
  let phoneNumber = number.toString();
  if (number === 0) {
    phoneInput.style.backgroundColor = "red";
    nameError.classList.remove("hidden");
    return false;
  }
  if (number[0] === "5" && number.length === 9) {
    // nameError.classList.add("hidden");

    phoneInput.style.backgroundColor = "green";
    return true;
  }
  if (number[0] != "5" && number.length != 9) {
    phoneInput.style.backgroundColor = "red";
    // nameError.classList.remove("hidden");

    return false;
  }
}

const onFocusCloseInput = document.querySelector("#dob");

function validateDate(date) {
  const currentDate = new Date();
  const selectedDate = new Date(date.value);
  if (selectedDate > currentDate) {
    onFocusCloseInput.style.backgroundColor = "red";
    return false;
  }
  dateInput.style.backgroundColor = "green";
  return true;
}
onFocusCloseInput.addEventListener("focus", () => {
  onFocusCloseInput.type = "date";
});

dateInput.addEventListener("input", function (e) {
  console.log(e.target.value);
  const dateValue = e.target.value;
  localStorage.setItem("date", dateValue);
});

const nameErrorDiv = document.getElementById("name-error");
const emailErrorDiv = document.getElementById("email-error");
const phoneErrorDiv = document.getElementById("phone-error");
const dateErrorDiv = document.getElementById("date-error");
const errorsClose1 = document.querySelector(".error-icon1");
const errorsClose2 = document.querySelector(".error-icon2");
const errorsClose3 = document.querySelector(".error-icon3");
const errorsClose4 = document.querySelector(".error-icon4");
errorsClose1.addEventListener("click", (e) => {
  nameErrorDiv.classList.add("hidden");
});

errorsClose2.addEventListener("click", (e) => {
  emailErrorDiv.classList.add("hidden");
});
errorsClose3.addEventListener("click", (e) => {
  phoneErrorDiv.classList.add("hidden");
});
errorsClose4.addEventListener("click", (e) => {
  dateErrorDiv.classList.add("hidden");
});

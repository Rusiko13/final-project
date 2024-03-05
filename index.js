"use strict";
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("email " + email);
    console.log("password" + password);
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
let signupButton = document.getElementById("signupButton");
let signupFormContainer = document.getElementById("signupFormContainer");
signupButton.addEventListener("click", function () {
  if (signupFormContainer.style.display === "none") {
    signupFormContainer.style.display = "block";
    loginFormContainer.style.display = "none";
  } else {
    signupFormContainer.style.display = "none";
  }
});

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log("email " + email);
    console.log("password " + password);
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });

let loginButton = document.getElementById("loginButton");
let loginFormContainer = document.getElementById("loginFormContainer");
loginButton.addEventListener("click", function () {
  if (loginFormContainer.style.display === "none") {
    loginFormContainer.style.display = "block";
    signupFormContainer.style.display = "none";
  } else {
    loginFormContainer.style.display = "none";
  }
});

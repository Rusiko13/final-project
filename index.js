"use strict";
let happinessH1 = document.querySelectorAll(".happiness");
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
    alert`you signed up successfully, Thank you! 
    Now try to log in `;
    signupFormContainer.style.display = "none";
    loginFormContainer.style.display = "block";
    signupButton.remove();
  });
let signupButton = document.getElementById("signupButton");
let signupFormContainer = document.getElementById("signupFormContainer");
signupButton.addEventListener("click", function () {
  if (signupFormContainer.style.display === "none") {
    signupFormContainer.style.display = "block";
    pageBackground.classList.add("background");
    loginFormContainer.style.display = "none";
  } else {
    signupFormContainer.style.display = "none";
    pageBackground.classList.remove("background");
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
    alert`you logged in successfully, Thank you!`;
    loginFormContainer.style.display = "none";
    pageBackground.classList.remove("background");
    signupButton.remove();
    loginButton.remove();

    happinessH1.forEach(function (el) {
      el.remove();
    });
  });

let loginButton = document.getElementById("loginButton");
let loginFormContainer = document.getElementById("loginFormContainer");
let pageBackground = document.getElementById("pageBackground");
loginButton.addEventListener("click", function () {
  if (loginFormContainer.style.display === "none") {
    loginFormContainer.style.display = "block";
    pageBackground.classList.add("background");
    signupFormContainer.style.display = "none";
  } else {
    loginFormContainer.style.display = "none";
    pageBackground.classList.remove("background");
  }
});

// let btn = document.getElementById("groom-btn1");
// btn.addEventListener("click", function () {
//   document.body.classList.toggle("body-class");
// });

// let input = document.getElementById("email");
// input.addEventListener("keyup", function () {
//   input.style.border = "2px solid green";
// });

// let divIcon = document.querySelector(".icon-div");
// divIcon.addEventListener("mouseover", function (e) {
//   e.divIcon.style.backgroundColor = "red";
// });
function bookAppointment() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  alert("Appointment booked for " + date + " at " + time);
}

// let iconDiv = document.querySelector(".icon-div");
// iconDiv.addEventListener("click", function () {
//    this.classList.toggle("active-color");
//   });

let subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.getElementById("email");
  let inputValue = input.value;
  alert`you subscribed successfully, Thank you!`;
  inputValue.value = " ";
  //ინფუთს ვერ ვასუფთავებ
});

let userIcon = document.querySelector(".user-div");
let userUl =  document.querySelector(".user-ul");
userIcon.appendChild(userUl);
userIcon.addEventListener("click", function(){
userUl.classList.toggle("user-ul-active");
});

    // Proceed with form submission if all checks pass
    return true;
}

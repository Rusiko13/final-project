"use strict";
// import {burgerBar} from "./burger.js";
// burgerBar();
let happinessH1 = document.querySelectorAll(".happiness");
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("emailS").value;
    let password = document.getElementById("password1").value;

    document.getElementById("emailS").value = "";
    document.getElementById("password1").value = "";
    alert`you signed up successfully, Thank you!
    Now try to log in `;
    signupForm.style.display = "none";
    loginFormContainer.style.display = "block";
    signupButton.remove();
  });
let signupButton = document.getElementById("signupButton");
let signupForm = document.getElementById("signupFormContainer");

signupButton.addEventListener("click", function () {
  signupForm.classList.toggle("sign-form-visible");
  signupForm.classList.toggle("sign-form");

  let Farda = document.getElementById("farda1");

  Farda.classList.add("farda-visible");
  Farda.classList.remove("farda");

  document.querySelector("body").style.overflow = "hidden";
});
document.querySelector(".x").addEventListener("click", function () {
  signupForm.classList.remove("sign-form-visible");
  signupForm.classList.add("sign-form");

  loginFormContainer.classList.remove("log-form-visible");
  loginFormContainer.classList.add("log-form");
  let Farda = document.getElementById("farda1");

  Farda.classList.remove("farda-visible");
  Farda.classList.add("farda");
  document.querySelector("body").style.overflow = "auto";
});
document.getElementById("x").addEventListener("click", function () {
  signupForm.classList.remove("sign-form-visible");
  signupForm.classList.add("sign-form");

  loginFormContainer.classList.remove("log-form-visible");
  loginFormContainer.classList.add("log-form");
  let Farda = document.getElementById("farda1");

  Farda.classList.remove("farda-visible");
  Farda.classList.add("farda");
  document.querySelector("body").style.overflow = "auto";
});

//password icon signup

let passwInput = document.getElementById("password1");
let passwIcon = document.getElementById("passw-eye");
passwIcon.addEventListener("click", function () {
  if (passwInput.type == "password") {
    passwInput.setAttribute("type", "text");
    passwIcon.classList.add("fa-eye-slash");
    passwIcon.classList.remove("fa-eye");
  } else {
    passwInput.setAttribute("type", "password");
    passwIcon.classList.add("fa-eye");
    passwIcon.classList.remove("fa-eye-slash");
  }
});

//email validation signup
let emailSign = document.getElementById("emailS");
function validationSign() {
  let emailVal = document.getElementById("emailS").value;
  let errorPar = document.getElementById("textError");
  let emailPattern1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailVal.match(emailPattern1)) {
    errorPar.textContent = "your email is valid";
    errorPar.style.color = "green";
  } else {
    errorPar.textContent = "your email is invalid";
    errorPar.style.color = "red";
  }
  if (emailVal == "") {
    textError.innerHTML = " ";
  }
}
emailSign.addEventListener("keyup", validationSign);

//loginform

// let appearedDivs = document.querySelectorAll("hidden-div");

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("passw").value;
    console.log("email " + email);
    console.log("password " + password);
    email = "";
    password = "";
    alert`you logged in successfully, Thank you!`;
    loginFormContainer.style.display = "none";
    pageBackground.classList.remove("background");
    signupButton.remove();
    loginButton.remove();
    // appearedDivs.forEach(function (item)
    // {
    //   item.classList.add("appeared-div");
    //   }
    // )

    happinessH1.forEach(function (el) {
      el.remove();
    });
  });

let loginButton = document.getElementById("loginButton");
let loginFormContainer = document.getElementById("loginFormContainer");
loginButton.addEventListener("click", function () {
  loginFormContainer.classList.toggle("log-form-visible");
  loginFormContainer.classList.toggle("log-form");

  let Farda = document.getElementById("farda1");

  Farda.classList.add("farda-visible");
  Farda.classList.remove("farda");

  document.querySelector("body").style.overflow = "hidden";
});

//password icon login

let passwordInput = document.getElementById("passw");
let passwordEye = document.getElementById("password-eye");
passwordEye.addEventListener("click", function () {
  if (passwordInput.type == "password") {
    passwordInput.setAttribute("type", "text");
    passwordEye.classList.remove("fa-eye");
    passwordEye.classList.add("fa-eye-slash");
  } else {
    passwordInput.setAttribute("type", "password");
    passwordEye.classList.add("fa-eye");
    passwordEye.classList.remove("fa-eye-slash");
  }
});

//email validation login

let emailLogin = document.getElementById("email");
function validation() {
  let emailValue = document.getElementById("email").value;
  let errorP = document.getElementById("error-email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailValue.match(emailPattern)) {
    errorP.textContent = "your email is valid";
    errorP.style.color = "green";
  } else {
    errorP.textContent = "your email is invalid";
    errorP.style.color = "red";
  }
  if (emailValue == "") {
    textError.innerHTML = " ";
  }
}
emailLogin.addEventListener("keyup", validation);

//user icon home page, inside elements

let userIcon = document.querySelector(".user-div");
let userUl = document.querySelector(".user-ul");
userIcon.appendChild(userUl);
userIcon.addEventListener("click", function () {
  userUl.classList.toggle("user-ul-active");
});

//read more
let articles = document.querySelectorAll(".article");
articles.forEach(function (article) {
  let readMoreBtn = article.querySelector(".read-more");
  let hiddenSpan = article.querySelector(".hidden-text");
  let readLessBtn = article.querySelector(".readless");

  readMoreBtn.addEventListener("click", function () {
    this.classList.add("remove-read-more-btn");
    hiddenSpan.classList.add("block-text");
    readLessBtn.classList.add("read-less-block");
  });

  readLessBtn.addEventListener("click", function () {
    hiddenSpan.classList.remove("block-text");
    readMoreBtn.classList.remove("remove-read-more-btn");
    readLessBtn.classList.remove("read-less-block");
  });
});

//subscribtion-footer

// let subscribeForm = document.getElementById("footer-subscribe");
// subscribeForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let input = document.getElementById("email");
//   let inputValue = input.value;
//   alert`you subscribed successfully, Thank you!`;
//   inputValue.value = " ";
//   //ინფუთს ვერ ვასუფთავებ
// });

//scroll-down

// let scrollDown = document.getElementById("scroll-down");
// window.addEventListener("scroll", function(){
//     if(window.scrollDown > 300)
// })

//scroll-down
// document.getElementById('homie-scroll').addEventListener('click', function() {
//   window.scrollBy(0, window.(500)); // Scrolls down by the height of the viewport
// });

// navbar scrollup and down

// let lastScrollTop;
// navbar = document.getElementById('navbar');
// window.addEventListener('scroll',function(){
// var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// if(scrollTop > lastScrollTop){
// navbar.style.top='-80px';
// }
// else{
// navbar.style.top='0';
// }
// lastScrollTop = scrollTop;
// });

//current scroll

window.addEventListener("scroll", function () {
  document.getElementById("showScroll").innerHTML = window.pageYOffset + "px";
});

//homie scroll down
let homieScroll = document.getElementById("homieScroll");
homieScroll.addEventListener("click", function () {
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
});

//burger bar

let navigation = document.getElementById("navEl");
let burger = document.getElementById("burgerBtn");

burger.addEventListener("click", function () {
  navigation.classList.toggle("navigation");
  navigation.classList.toggle("visible");
});

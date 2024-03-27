"use strict";
//scroll down to appointment
let scrollDownVet = document.getElementById("scroll-btn");
scrollDownVet.addEventListener("click", function () {
  window.scrollTo({
    top: 1200,
    behavior: "smooth",
  });
});
// appointment book
let vetBtn = document.getElementById("vetBtn");
function bookAppointment1() {
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const date = dateInput.value;
  const time = timeInput.value;
  if (dateInput.value == "" || timeInput.value == "") {
    alert("Please choose time and date for your booking");
  } else {
    alert("Appointment booked for " + date + " at " + time);
    dateInput.value = "";
    timeInput.value = "";
  }
}
vetBtn.addEventListener("click", bookAppointment1);

let navigation = document.getElementById("navEl");
let burger = document.getElementById("burgerBtn");

burger.addEventListener("click", function () {
  navigation.classList.toggle("navigation");
  navigation.classList.toggle("visible");
});

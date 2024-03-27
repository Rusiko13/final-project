' use strict'

// appointment book
let groomBtn = document.getElementById("groomBtn");
function bookAppointment() {
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const date = dateInput.value;
  const time = timeInput.value;
  if(  dateInput.value == "" ||   timeInput.value == "" 
  ){
    alert("Please choose time and date for your booking");

  }else{
    alert("Appointment booked for " + date + " at " + time);
    dateInput.value = "";
    timeInput.value = "";
  }
  
  
}
groomBtn.addEventListener("click",bookAppointment );

let navigation = document.getElementById("navEl");
let burger = document.getElementById("burgerBtn");

burger.addEventListener("click", function () {

  navigation.classList.toggle("navigation");
  navigation.classList.toggle("visible");
});


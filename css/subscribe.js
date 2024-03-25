let subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.getElementById("email");
  let inputValue = input.value;
  alert`you subscribed successfully, Thank you!`;
  inputValue.value = " ";
  //ინფუთს ვერ ვასუფთავებ
});
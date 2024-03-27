export function burgerMenu() {
    let burgerMenu = document.querySelector(".burger-bar");
    let navigation = document.querySelector(".navigation");
  
    burgerMenu.addEventListener("click", () => {
    //   burgerMenu.classList.toggle("active");
      navigation.classList.toggle("active");
    });
    console.log("hello world");
}
let navigation = document.getElementById("navEl");
let burger = document.getElementById("burgerBtn");

burger.addEventListener("click", function () {

  navigation.classList.toggle("navigation");
  navigation.classList.toggle("visible");
});
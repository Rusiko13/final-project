'use strict'

//axios
axios.get('http://localhost:3000/infos')
  .then(function (response) {
    // handle success
    console.log(response);
    let div = document.createElement("div");
    div.classList.add("ifnos1");
    let ul = document.createElement("ul");
    response.data.forEach((element) => {
      let ul = document.createElement("ul");

      //liName
      let liName = document.createElement("li");
      liName.innerHTML = `<span>Name:</span> ${element.name}`;
      ul.appendChild(liName);
      //liSex
      let liSex = document.createElement("li");
      liSex.innerHTML = `<span>Sex:</span> ${element.sex}`;
      ul.appendChild(liSex);
      //liAge
      let liAge = document.createElement("li");
      liAge.innerHTML = `<span>Age:</span> ${element.age} years`;
      ul.appendChild(liAge);
      //liBreed
      let liBreed = document.createElement("li");
      liAge.innerHTML = `<span>Breed:</span> ${element.breed}`;
      ul.appendChild(liBreed);
      div.appendChild(ul);
    });
    document.getElementById("Api").appendChild(div);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


//adopt page loved icons paw in a heart

let iconsActive = document.querySelectorAll(".icons-active");
iconsActive.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("active-red");
  });
});


//scroll top

let scrollTop = document.getElementById("scrollTop");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 30,
    behavior: "smooth",
  });
});

//scroll down
let scrollDown = document.getElementById("scrollDown");
scrollDown.addEventListener("click", function () {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
});


let navigation = document.getElementById("navEl");
let burger = document.getElementById("burgerBtn");

burger.addEventListener("click", function () {

  navigation.classList.toggle("navigation");
  navigation.classList.toggle("visible");
});
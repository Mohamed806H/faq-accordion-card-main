//Sellectors
const arrowone = document.querySelector(".arrow-one");
const answerone = document.querySelector(".Answer-one");
const arrowtwo = document.querySelector(".arrow-two");
const answertwo = document.querySelector(".Answer-two");
const arrowthree = document.querySelector(".arrow-three");
const answerthree = document.querySelector(".Answer-three");
const arrowfour = document.querySelector(".arrow-four");
const answerfour = document.querySelector(".Answer-four");
const arrowfive = document.querySelector(".arrow-five");
const answerfive = document.querySelector(".Answer-five");
//event listner

//functions
function arrowOne() {
  arrowone.classList.toggle("change-arrowone");
  answerone.classList.toggle("show-answerone");
  arrowtwo.classList.toggle("add-Margin");
  arrowthree.classList.toggle("add-Margin");
  arrowfour.classList.toggle("add-Margin");
  arrowfive.classList.toggle("add-Margin");
}

function arrowTwo() {
  arrowtwo.classList.toggle("change-arrowtwo");
  answertwo.classList.toggle("show-answertwo");
  arrowthree.classList.toggle("add-Margin");
  arrowfour.classList.toggle("add-Margin");
  arrowfive.classList.toggle("add-Margin");
}

function arrowThree() {
  arrowthree.classList.toggle("change-arrowthree");
  answerthree.classList.toggle("show-answerthree");
  arrowfour.classList.toggle("add-Margin-four");
  arrowfive.classList.toggle("add-Margin-four");
}

function arrowFour() {
  arrowfour.classList.toggle("change-arrowfour");
  answerfour.classList.toggle("show-answerfour");
  arrowfive.classList.toggle("add-Margin");
}

function arrowFive() {
  arrowfive.classList.toggle("change-arrowfive");
  answerfive.classList.toggle("show-answerfive");
}

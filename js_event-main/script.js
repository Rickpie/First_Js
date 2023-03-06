// Fonctionnalité 1

const clickFooter = document.querySelector("footer");

clickFooter.addEventListener("click", () => {
  console.log("clique");
});

// Fonctionnalité 1-bis

const clickFooterbis = document.querySelector("footer");
let count = 0;

clickFooterbis.addEventListener("click", () => {
  count++;
  console.log(`clique ${count}`);
});

// Fonctionnalité 2

const navbarHeader = document.getElementById("navbarHeader");
const navbarToggle = document.querySelector(".navbar-toggler");

navbarToggle.addEventListener("click", () => {
  navbarHeader.classList.toggle("collapse");
});
// Fonctionnalité 3

const editCard = document.querySelector(".btn-outline-secondary");
const cardText = document.querySelector(".card-text");

editCard.addEventListener("click", () => {
  cardText.style.color = "red";
});

// Fonctionnalité 4, condition ternaire

const editCard2 = document.querySelectorAll(".btn-outline-secondary")[1];
const cardText2 = document.querySelectorAll(".card-text")[1];

editCard2.addEventListener("click", () => {
  cardText2.style.color === "green"
    ? (cardText2.style.color = "black")
    : (cardText2.style.color = "green");
});

// Fonctionnalité 5, condition ternaire

const navbar = document.querySelector("header");
const link = document.querySelector("link");

navbar.addEventListener("dblclick", () => {
  link.disabled ? (link.disabled = false) : (link.disabled = true);
});

// Fonctionnalité 6

const viewButton = document.querySelectorAll(".btn-success");
const cardText3 = document.querySelectorAll(".card-text");
const cardImage = document.querySelectorAll(".card-img-top");

viewButton.forEach((button, index) => {
  button.addEventListener("mouseover", () => {
    cardText3[index].classList.toggle("d-none");
    cardImage[index].classList.toggle("w-25");
  });
});

// Fonctionnalité 7

const rightButton = document.querySelector(".btn-secondary");
const cardOrder = document.querySelector(".album .container .row");

rightButton.addEventListener("click", () => {
  cardOrder.insertBefore(
    cardOrder.lastElementChild,
    cardOrder.firstElementChild
  );
});

// Fonctionnalité 8

const leftButton = document.querySelector(".btn-primary");
const cardOrder2 = document.querySelector(".album .container .row");

leftButton.addEventListener("click", () => {
  leftButton.removeAttribute("href");
  cardOrder2.insertBefore(
    cardOrder2.firstElementChild,
    cardOrder2.lastElementChild.nextSibling
  );
});

// Fonctionnalité 9

const jsEvents = document.querySelector("body > header > div > div > a");

jsEvents.addEventListener("keypress", (e) => {
  if (e.key === "a") {
    document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");
    document.body.classList.add("col-4");
  } else if (e.key === "y") {
    document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");
    document.body.classList.add("col-4", "offset-md-4");
  } else if (e.key === "p") {
    document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");
    document.body.classList.add("col-4", "offset-md-8");
  } else if (e.key === "b") {
    document.body.classList.remove("col-4", "offset-md-8", "offset-md-4");
  }
});

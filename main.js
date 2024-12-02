// Select the hamburger button and nav links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Add a click event listener to toggle the menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

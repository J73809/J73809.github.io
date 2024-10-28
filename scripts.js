// Array of fun facts
const funFacts = [
  "The first computer programmer was Ada Lovelace.",
  "Python was named after Monty Python, not the snake!",
  "JavaScript was created in just 10 days.",
  "The first computer virus was called 'Creeper' and was created in 1971.",
  "Over 700 different programming languages exist!"
];

// Function to display a new random fun fact
function newFunFact() {
  const factElement = document.getElementById("fun-fact");
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  factElement.textContent = randomFact;
}
// JavaScript for collapsible sections
document.addEventListener("DOMContentLoaded", function() {
  const collapsibles = document.querySelectorAll(".collapsible");
  
  collapsibles.forEach(button => {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

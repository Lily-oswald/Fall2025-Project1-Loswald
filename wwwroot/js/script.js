const rating = document.getElementById("Rating");
let score = parseFloat(rating.textContent.match(/\d+(\.\d+)?/)[0]);

if (score >= 8) {
  rating.style.color = "limegreen";
} else if (score >= 5) {
  rating.style.color = "gold";
} else {
  rating.style.color = "red";
}
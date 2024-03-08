const clickHere = document.querySelector(".click-here");
let score = localStorage.getItem("score") || 0;
document.querySelector(".score").innerHTML = score;

clickHere.addEventListener("click", () => {
  clickHere.classList.toggle("ch-nondefault");

  localStorage.setItem("score", ++score);
  document.querySelector(".score").innerHTML = score;
});

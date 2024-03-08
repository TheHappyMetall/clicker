const clickHere = document.querySelector(".click-here");
let score = localStorage.getItem("score") || 0;
document.querySelector(".score").innerHTML = score;

clickHere.addEventListener("click", () => {
  clickHere.classList.toggle("ch-nondefault");

  localStorage.setItem("score", ++score);
  document.querySelector(".score").innerHTML = score;

  switch (score) {
    case 10:
      alert("Первая десятка!");
      break;

    case 50:
      alert("Ничего себе! 50 очков!");
      break;

    case 100:
      alert("Вау! Сотка!");
      break;

    case 500:
      alert("Кто ты? 0.о ЭТО ЖЕ 500 ОЧКОВ!");
      break;
  }
});
// ссылка на новости где умерло столько челоек, сколько накликано

// Меню
document.querySelector(".open-menu-btn").addEventListener("click", () => {
  document.querySelector(".menu-wrap").classList.add("opened-menu");
});
document.querySelector(".close-menu-btn").addEventListener("click", () => {
  document.querySelector(".menu-wrap").classList.remove("opened-menu");
});

// Внутри меню
document.querySelector(".new-game-btn").addEventListener("click", () => {
  if (confirm("Вы действительно хотите начать сначала?")) {
    localStorage.removeItem("score");
    window.location.reload();
  }
});

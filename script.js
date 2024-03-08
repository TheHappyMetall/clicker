const clickHere = document.querySelector(".click-here");
let score = localStorage.getItem("score") || 0;
document.querySelector(".score").innerHTML = score;
// 	&#9773; серп и молот
// &#9730; зонтик
// &#9672; алмаз
// 	&#9875; якорь
// &#9883; атом
let storeColors = ["#ffffff"];

// куб
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

// Магазин
document.querySelector(".open-store-btn").addEventListener("click", () => {
  document.querySelector(".store-wrap").classList.add("opened-store");
});
document.querySelector(".close-store-btn").addEventListener("click", () => {
  document.querySelector(".store-wrap").classList.remove("opened-store");
});

// Внутри магаизна
document.querySelector(".store-colors-btn").addEventListener("click", () => {});

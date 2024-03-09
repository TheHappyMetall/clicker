const clickHere = document.querySelector(".click-here");
let score = localStorage.getItem("score") || 0;
document.querySelector(".score").innerHTML = score;
// 	&#9773; серп и молот
// &#9730; зонтик
// &#9672; алмаз
// 	&#9875; якорь
// &#9883; атом

let colorsInTheStore = JSON.parse(localStorage.getItem("colorsInTheStore")) || [
  {
    color: "rgb(0, 173, 181)",
    isSelected: true,
  },
  {
    color: "rgb(0, 55, 194)",
    isSelected: false,
  },
  {
    color: "rgb(0, 215, 14)",
    isSelected: false,
  },
];

// куб
clickHere.addEventListener("click", () => {
  clickHere.classList.toggle("ch-nondefault");

  localStorage.setItem("score", ++score);
  document.querySelector(".score").innerHTML = score;

  switch (score) {
    case 0:
      openModalDialog(
        "Сообщение, содержащее частичку умопомрачительного сюжета..."
      );
      break;

    case 5:
      openModalDialog(
        "Сообщение, содержащее частичку умопомрачительного сюжета..."
      );
      break;

    case 15:
      openModalDialog(
        "Сообщение, содержащее частичку умопомрачительного сюжета..."
      );
      break;

    case 20:
      openModalDialog(
        "Сообщение, содержащее частичку умопомрачительного сюжета..."
      );
      break;

    case 30:
      openModalDialog(
        "Сообщение, содержащее частичку умопомрачительного сюжета..."
      );
      break;

    case 45:
      openModalDialog(
        "Сообщение, содержащее частичку умопомрачительного сюжета..."
      );
      break;

    case 47:
      openModalDialog("Три...");
      break;

    case 48:
      openModalDialog("Два...");
      break;

    case 49:
      openModalDialog("Один...");
      break;

    case 50:
      chAnimation("click-here-action");
      clickHere.addEventListener("animationend", () => {
        openModalDialog("...");
      });
      break;
  }
});

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
document.querySelector(".store-colors-btn").addEventListener("click", () => {
  openModalDialog(colorStoreCode());
});

// Покупка цветов
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("color-store-color")) {
    colorsInTheStore.forEach((element) => {
      // отмена всех выбранных цветов
      if (element.isSelected === true) {
        element.isSelected = false;
      }
      // выбор кликнутого цвета
      if (e.target.style.backgroundColor === element.color) {
        element.isSelected = true;
      }
      openModalDialog(colorStoreCode());

      // использвание цвета, сохранение...
    });
  }
});

// CH Анимации
function chAnimation(animName) {
  clickHere.classList.add(`${animName}`);
  clickHere.addEventListener("animationend", () => {
    clickHere.classList.remove(`${animName}`);
  });
}

// Модальное окно
function openModalDialog(dialogText) {
  if (!dialogText) {
    return;
  }
  const modalWrapper = document.querySelector(".modal-wrapper");
  const modalText = modalWrapper.querySelector(".modal-text");

  modalText.innerHTML = dialogText;
  modalWrapper.classList.add("modal-open");
}

document.querySelector(".modal-continue").addEventListener("click", (e) => {
  setTimeout(() => {
    document.querySelector(".modal-wrapper").classList.remove("modal-open");
  }, 300);
});

// Шаблоны магазинов
function colorStoreCode() {
  let output = "";
  colorsInTheStore.forEach((color) => {
    output += `
    <div class="color-store-item">
      <div style="background: ${color.color}" class="color-store-color ${
      color.isSelected ? "color-store-selected" : ""
    }"></div>    
    </div>`;
  });
  return `<div class="color-store-wrapper">${output}</div>`;
}

console.log();

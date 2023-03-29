// Масив об'єктів із зображеннями та описом
const images = [
  {
    src: "./Photos/evolve-cyberpart-gold-h-evcp-ghr410n305-16s480h1tbk-black.png",
    alt: "Товар 1",
    description:
      "Процесор: Intel Core i5-11400F (2.6–4.4 ГГц), 6 ядер\nМатеринська плата: Asus Prime H510\nВідеокарта: RTX 3060, 12 ГБ\nВнутрішній накопичувач: 500 ГБ (SSD) + 1000 ГБ (HDD)\nВнутрішній накопичувач: Накопичувач PCI-E з підтримкою NVMe\nОперативна память: 16 ГБ, 3200 МГц (DDR4)\nБлок живлення: Chieftec Proton 600 Вт\nСертифікат блока живлення: Bronze",
  },

  {
    src: "./Photos/evolve-optipart-silver-3h-evop-s3hi114fn306-32s500h1tbk-black.png",
    alt: "Товар 2",
    description: "AMD",
  },

  {
    src: "./Photos/evolve-starterpart-bronze-b-evsp-bbr560g-16s500hbk-black.png",
    alt: "Товар 3",
    description: "Intel",
  },

  {
    src: "./Photos/t-computer-gaming-gtx1660s-base-tcgb-10100n1660s-16s480bk-black.png",
    alt: "Товар 4",
    description: "AMD",
  },

  {
    src: "./Photos/Photo-3.jpeg",
    alt: "Товар 3",
    description: "Опис зображення 3",
  },

  {
    src: "./Photos/Photo-3.jpeg",
    alt: "Товар 3",
    description: "Опис зображення 3",
  },

  {
    src: "./Photos/Photo-3.jpeg",
    alt: "Товар 3",
    description: "Опис зображення 3",
  },
];

// NODES

const imagesContainer = document.getElementById("images-container");
const showImagesBtn = document.getElementById("show-images-btn");

let item_limit = 2;

function addImageToContainer() {
  if (item_limit != 2) {
    document.querySelector("#arrow").remove();
  }

  let div = document.getElementById("images-container");
  let str_images = "";

  for (let i = item_limit - 2; i < item_limit; i++) {
    str_images += `<div class='node'><img src='${images[i].src}' class='photo'><div class='text-on-photo'>${images[i].description}</div><p class='price'>300 UAH</p></div>`;
  }

  let arrow =
    "<div id='arrow' class='node'><img src='./kisspng-arrow-icon-right-arrow-png-image-5a7589d1736ad5.3965963915176524334728.png' class='arrow' onclick='addImageToContainer()'><div style='display: none'>AMD Intel</div></div>";

  div.innerHTML += str_images + arrow;

  item_limit += 2;
}

// AD
setTimeout(function () {
  let modal = document.getElementById("modal");
  let span = document.getElementById("close");
  let timer = document.getElementById("timer");
  let count = 5;

  modal.style.display = "block";
  const interval = setInterval(function () {
    count--;

    if (count >= 0) {
      timer.innerHTML = "Зачекайте " + count + " секунд, щоб закрити рекламу";
    } else {
      ///clearInterval(interval);
      timer.innerHTML = "Ви можете закрити рекламу";

      span.classList.add("close-hover");
      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, 1000);
}, 10000);

// SUBSCRIBE
setTimeout(function () {
  let modal = document.getElementById("subcribe");
  let span = document.getElementById("close-sub");
  let sub_span = document.getElementById("sub-span");
  let reject_span = document.getElementById("reject-span");

  if (localStorage.getItem("subscribed") === "true") {
    return;
  }

  modal.style.display = "block";
  span.classList.add("close-hover");

  //SUB
  sub_span.onclick = function () {
    localStorage.setItem("subscribed", "true");
    modal.style.display = "none";
    alert("Дякуємо за підписку!");
  };

  // CLOSE
  reject_span.onclick = function () {
    modal.style.display = "none";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}, 5000);

// TODO filter subscribe
// START

addImageToContainer();

//FIlTER
function Filter(option) {
  const nodes = document.querySelectorAll(".node");

  nodes.forEach((element) => {
    const text = element.textContent;

    if (!text.includes(option)) {
      if (element.classList.contains("view")) {
        element.classList.remove("view");
      }
      element.classList.add("hide");
      return;
    }

    element.classList.remove("hide");
    element.classList.add("view");
  });
}

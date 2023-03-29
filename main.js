// Масив об'єктів із зображеннями та описом
const images = [
  {
    src: "./Photos/1.png",
    alt: "Товар 1",
    description:
      "Процесор: Intel Core i5-11400F (2.6–4.4 ГГц), 6 ядер\nМатеринська плата: Asus Prime H510\nВідеокарта: RTX 3060, 12 ГБ\nВнутрішній накопичувач: 500 ГБ (SSD) + 1000 ГБ (HDD)\nВнутрішній накопичувач: Накопичувач PCI-E з підтримкою NVMe\nОперативна память: 16 ГБ, 3200 МГц (DDR4)\nБлок живлення: Chieftec Proton 600 Вт\nСертифікат блока живлення: Bronze",
    price: 1000,
    filter_setting: "Intel",
  },

  {
    src: "./Photos/2.png",
    alt: "Товар 2",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/3.png",
    alt: "Товар 3",
    description: "Intel",
    price: 300,
    filter_setting: "Intel",
  },

  {
    src: "./Photos/4.png",
    alt: "Товар 4",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/5.jpg",
    alt: "Товар 3",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/6.png",
    alt: "Товар 3",
    description: "Intel",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/7.png",
    alt: "Товар 3",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/8.png",
    alt: "Товар 3",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/9.png",
    alt: "Товар 3",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/10.png",
    alt: "Товар 3",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },
];

const settings_list = [];
images.forEach((item) => {
  if (!settings_list.includes(item.filter_setting)) {
    settings_list.push(item.filter_setting);
  }
});
console.log(settings_list);

// * FILTER BUTTONS
const buttons = document.getElementById("buttons");
let str_buttons = "";

for(let i = 0; i < settings_list.length; i++) {
  str_buttons += `<button class="filter-button text" id="${settings_list[i]}" onclick="GetNodes('${settings_list[i]}')">${settings_list[i]}</button>`;
}

buttons.innerHTML += str_buttons;


// * NODES
let filter_setting = "";
const imagesContainer = document.getElementById("images-container");

function GetNodes(filter_setting) {
  let div = document.getElementById("images-container");
  div.innerHTML = "";
  let str_images = "";

  for (let i = 0; i < images.length; i++) {
    if (!images[i].description.includes(filter_setting)) {
      continue;
    }

    str_images += `<div class='node'><img src='${images[i].src}' class='photo'><div class='text-on-photo text'>${images[i].description}</div><span class='price text'>${images[i].price} UAH</span></div>`;
  }

  div.innerHTML += str_images;
}

// TODO фільтр і підгрузку зробити в одну функцію

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
}, 1000000000);

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

GetNodes("");

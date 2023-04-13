// Масив об'єктів із зображеннями та описом
const nodes = [
  {
    src: "./Photos/11.png",
    alt: "Товар 1",
    description:
      "Процесор: Intel Core i5-11400F (2.6–4.4 ГГц), 6 ядер\nМатеринська плата: Asus Prime H510\nВідеокарта: RTX 3060, 12 ГБ\nВнутрішній накопичувач: 500 ГБ (SSD) + 1000 ГБ (HDD)\nВнутрішній накопичувач: Накопичувач PCI-E з підтримкою NVMe\nОперативна память: 16 ГБ, 3200 МГц (DDR4)\nБлок живлення: Chieftec Proton 600 Вт\nСертифікат блока живлення: Bronze",
    price: 1000,
    filter_setting: "Intel",
  },

  {
    src: "./Photos/6.png",
    alt: "Товар 2",
    description: "AMD",
    price: 300,
    filter_setting: "AMD",
  },

  {
    src: "./Photos/12.png",
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
    src: "./Photos/2.png",
    alt: "Товар 3",
    description: "Intel",
    price: 300,
    filter_setting: "Intel",
  },

  {
    src: "./Photos/7.png",
    alt: "Товар 3",
    description: "AMIntelD",
    price: 300,
    filter_setting: "Intel",
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
    description: "Intel",
    price: 300,
    filter_setting: "Intel",
  },

  {
    src: "./Photos/1.png",
    alt: "Товар 3",
    description: "Intel",
    price: 300,
    filter_setting: "Intel",
  },

  {
    src: "./Photos/3.png",
    alt: "Товар 3",
    description: "Intel",
    price: 300,
    filter_setting: "Intel",
  },
];

//
//
//
//
// * NODES
let filter_setting = "",
  i = 0;
let global_filter_setting = "";
const arrow = `<div id='arrow' class='node-arrow'><img src='./kisspng-arrow-icon-right-arrow-png-image-5a7589d1736ad5.3965963915176524334728.png' class='arrow' onclick='GetNodes("", false)'></div>`;
const imagesContainer = document.getElementById("images-container");

function GetNodes(filter_setting, delete_nodes = true) {
  let div = document.getElementById("images-container");
  let arrow_DOM = document.getElementById("arrow");
  let str_images = "";

  if (delete_nodes) {
    div.innerHTML = "";
    global_filter_setting = filter_setting;
    i = 0;
  }
  if (arrow_DOM) {
    arrow_DOM.remove();
  }

  for (let j = 0; i < nodes.length && j < 3; i++) {
    if (!nodes[i].filter_setting.includes(global_filter_setting)) {
      continue;
    }

    str_images += `<div class='node ${i}'>
    <img src='${nodes[i].src}' class='photo'>
      

      <div class="btn-cont font-size-24">
        <div class="margin-left-rigtt-20">
          <label class='sticky Reem-Kufi main-color bold'>${nodes[i].price}</label>
          <label class='sticky Reem-Kufi main-color'>грн</label>
        </div>
        
        <i class='fa fa-shopping-basket sticky hover-pointer bck-button-color font-size-21 margin-left-rigtt-20 bck-button-color padding-for-cart main-color' onclick="AddToCart(${i})"></i>
      </div>

      <div class='text-on-photo'>
        <h class=' text font-size-18 grey-color bold'>Короткі характеристики</h>
        <p class=' text font-size-14 main-color'> ${nodes[i].description}</p>
      </div>

    </div>`;
    j++;
  }

  div.innerHTML += str_images + arrow;
}

// ADDTOCART
let cart = [];
if (localStorage.getItem("cart") != null) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

function AddToCart(index) {
  added_node = nodes[Number(index)];

  if (cart.includes(added_node)) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] == added_node) {
        cart[i].amount++;
        break;
      }
    }
  } else {
    added_node.amount = 1;
    cart.push(added_node);
    console.log(cart);

    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
  }

  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
}

//
//
//
//
//
///
//
//
//
//
//
//
//
///

// * AD
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

// * SUBSCRIBE
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

// * START
let current_page = window.location.href;

if (current_page.includes("index.html")) {
  GetNodes("", false);

  // * FILTER BUTTONS
  const settings_list = [];
  const buttons = document.getElementById("buttons");

  if (buttons != null) {
    nodes.forEach((item) => {
      if (!settings_list.includes(item.filter_setting)) {
        settings_list.push(item.filter_setting);
      }
    });

    let str_buttons = "";

    for (let i = 0; i < settings_list.length; i++) {
      str_buttons += `<label class="filter-button text hover-pointer underline black-color" id="${settings_list[i]}" onclick="GetNodes('${settings_list[i]}')">${settings_list[i]}</label>`;
    }

    buttons.innerHTML += str_buttons;
  }
}

if (current_page.includes("cart.html")) {
  GetNodesForCart("", false);
}

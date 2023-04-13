function GetNodesForCart(filter_setting, delete_nodes = true) {
  let div = document.getElementById("images-container");
  let sum_cart = document.getElementById("sum-cart");
  let str_images = "",
    sum_str = "";
  let sum = 0;

  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
  } else {
    cart = [];
  }

  if (delete_nodes) {
    div.innerHTML = "";
    global_filter_setting = filter_setting;
    i = 0;
  }

  for (let i = 0; i < cart.length; i++) {
    if (!cart[i].filter_setting.includes(global_filter_setting)) {
      continue;
    }

    str_images += `<div class='node ${i}'><img src='${cart[i].src}' class='photo'>

    <div class="btn-cont">

        <div> 
        <label class='sticky Reem-Kufi margin0 font-size-24 main-color bold'>${cart[i].price}</label>
        <label class='sticky Reem-Kufi margin0 font-size-24 main-color '>грн</label>
        </div>

        <label class='sticky text margin0 hover-pointer padding-for-x font-size-24 delete-color bold' onclick="DeleteNodeFromCart(${i})" title="Видалити">&#x2715</label>

        <div class="row">

        <div class="up-down-arrows sticky">
        <label class="sticky hover-pointer main-color bold" onclick="AddAmount(${i})"><img src="up-arrowhead-in-a-circle.png" alt=""></label>
        <label class="sticky hover-pointer main-color bold" onclick="SubAmount(${i})"><img src="down-arrowhead-in-a-circle.png" alt=""></label>
        </div>

        <label class='sticky Reem-Kufi margin0 font-size-24 main-color amount-cont bold'> ${cart[i].amount}</label>

        </div>

        
      </div> 

      <div class='text-on-photo margin-top-3 bck-white'>

        <h class=' text font-size-18 grey-color bold'>Короткі характеристики</h>
        <p class=' text font-size-14 main-color'> ${cart[i].description}</p>

      </div>
    </div>
    `;
    sum += cart[i].price * cart[i].amount;
  }

  if (sum === 0) {
    str_images += `<div class="sum-cont sum-cart">
    <div class="border bck-button-color padding-5"> 
    <label class="Reem-Kufi margin0 font-size-30 main-color">Кошик   порожній</label>
    </div>
    </div>`;
  } else {
    sum_str = `<div class="sum-cont sum-cart">
    <div class="border bck-button-color padding-5"> 
    
    <label class="Reem-Kufi margin0 font-size-30 main-color">Сума: </label>
    <label class="Reem-Kufi margin0 font-size-30 main-color bold">${sum} </label>
    <label class="Reem-Kufi margin0 font-size-30 main-color">грн</label>
    </div>
  
    </div>`;
  }

  div.innerHTML += str_images;
  sum_cart.innerHTML = sum_str;
}

function DeleteNodeFromCart(index) {
  cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);

  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
  GetNodesForCart("");
}

function DeleteAllFromCart() {
  localStorage.removeItem("cart");
  GetNodesForCart("");
}

function AddAmount(index) {
  cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].amount++;
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
  GetNodesForCart("");
}

function SubAmount(index) {
  cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].amount--;
  if (cart[index].amount == 0) {
    cart.splice(index, 1);
  }
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
  GetNodesForCart("");
}

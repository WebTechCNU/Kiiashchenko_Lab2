function GetNodesForCart(filter_setting, delete_nodes = true) {
  let div = document.getElementById("images-container");
  cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  let str_images = "";

  if (delete_nodes) {
    div.innerHTML = "";
    global_filter_setting = filter_setting;
    i = 0;
  }

  for (let i = 0; i < cart.length; i++) {
    if (!cart[i].filter_setting.includes(global_filter_setting)) {
      continue;
    }

    str_images += `<div class='node ${i}'><img src='${cart[i].src}' class='photo'><div class='text-on-photo text'>${cart[i].description}</div>
    <div class="btn-cont font-size-14">
        <label class='price text margin0 bck-button-color'>${cart[i].price} UAH</label> 
        <button class='price text margin0 bck-delete-color hover-pointer' onclick="DeleteNodeFromCart(${i})">Х</button>
        <label class='price text margin0 bck-button-color'>К-сть ${cart[i].amount}</label>
    </div> 
    </div>
    `;
  }

  div.innerHTML += str_images;
}

function DeleteNodeFromCart(index) {
  cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);

  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
  GetNodesForCart("");
}

function DeleteAllFromCart()
{
    localStorage.removeItem("cart");
    GetNodesForCart("");
}



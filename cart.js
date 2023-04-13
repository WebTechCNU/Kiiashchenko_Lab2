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
    <div class="btn-cont">
        <label class='sticky Reem-Kufi margin0 font-size-24 main-color'>${cart[i].price} грн</label>
        <label class='sticky text margin0 hover-pointer padding-for-x font-size-24 delete-color bold' onclick="DeleteNodeFromCart(${i})" title="Видалити">&#x2715</label>

        <div class="row">

        <div class="up-down-arrows sticky">
        <label class="sticky hover-pointer main-color bold" onclick="AddAmount(${i})"><img src="up-arrowhead-in-a-circle.png" alt=""></label>
        <label class="sticky hover-pointer main-color bold" onclick="SubAmount(${i})"><img src="down-arrowhead-in-a-circle.png" alt=""></label>
        </div>

        <label class='sticky Reem-Kufi margin0 font-size-24 main-color amount-cont'> ${cart[i].amount}</label>

        </div>

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

function AddAmount(index)
{
    cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].amount++;
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
    GetNodesForCart("");
}

function SubAmount(index)
{
    cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].amount--;
    if (cart[index].amount == 0)
    {
        cart.splice(index, 1);
    }
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
    GetNodesForCart("");
}

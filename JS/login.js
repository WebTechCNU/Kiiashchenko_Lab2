function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
}

function signin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password_confirm = document.getElementById("password_confirm").value;

  if (password != password_confirm) {
    alert("Паролі не співпадають!");
    return;
  }

  let email_local = localStorage.getItem("email");
  let password_local = localStorage.getItem("password");

  if (email == email_local && password == password_local) {
    alert("Ви вже зареєстровані!");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
}
// let email = document.getElementById("email");
// let password = document.getElementById("password");

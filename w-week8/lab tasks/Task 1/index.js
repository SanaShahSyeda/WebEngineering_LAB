localStorage.setItem("username", "sana gul");
localStorage.setItem("password", "123");

window.onload = checkIfUserLoggedIn();

function checkIfUserLoggedIn() {
  console.log(localStorage.getItem("isLoggedIn"));
  if (localStorage.getItem("isLoggedIn")) {
    window.location.href = "./home.html";
  }
}

function isLoggedIn() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  logIn(username.value, password.value);
}

function logIn(username, password) {
  let u = localStorage.getItem("username");
  let p = localStorage.getItem("password");
  if (u === username && p === password) {
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "./home.html";
  }
}

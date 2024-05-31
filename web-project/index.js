const username = document.querySelector("input[name=username]");
const email = document.querySelector("input[name=email]");
const password = document.querySelector("input[name=password]");
const confirm_password = document.querySelector("input[name=confirm]");
const terms = document.querySelector("input[name=terms]");

var matched = false;

function checkSessionStorage() {
  if (
    sessionStorage.getItem("username") &&
    sessionStorage.getItem("email") &&
    sessionStorage.getItem("password") &&
    sessionStorage.getItem("confirm_password")
  ) {
    username.value = sessionStorage.getItem("username");
    email.value = sessionStorage.getItem("email");
    password.value = sessionStorage.getItem("password");
    confirm_password.value = sessionStorage.getItem("confirm_password");
  }
}

function toggleUserAuthDivs() {
  checkSessionStorage();
  let signInDiv = document.getElementById("user_signin");
  let signUpDiv = document.getElementById("user_signup");

  if (signUpDiv.style.display === "none") {
    signInDiv.style.display = "none";
    signUpDiv.style.display = "flex";
    signUpDiv.className = "user_signup";
  } else {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "flex";
  }
}

confirm_password.addEventListener("input", function () {
  if (confirm_password.value === password.value) {
    matched = true;
    confirm_password.style.border = "0.1em solid green";
  } else {
    matched = false;
    confirm_password.style.border = "0.1em solid red";
  }
});

username.addEventListener("input", function () {
  sessionStorage.setItem("username", username.value);
});
email.addEventListener("input", function () {
  sessionStorage.setItem("email", email.value);
});
password.addEventListener("input", function () {
  sessionStorage.setItem("password", password.value);
});
confirm_password.addEventListener("input", function () {
  sessionStorage.setItem("confirm_password", confirm_password.value);
});

document.getElementById("sign_up").addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  if (matched) {
    localStorage.setItem("u", username.value);
    localStorage.setItem("e", email.value);
    localStorage.setItem("p", password.value);
  }
});

document.getElementById("sign_in").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  const user = document.querySelector("input[name=user]");
  const pass = document.querySelector("input[name=pass]");

  if (
    user.value === localStorage.getItem("u") &&
    pass.value === localStorage.getItem("p")
  ) {
    console.log("hello");
    window.location.href = "to_do.html";
  } else {
    alert("Invalid username or password");
  }
});

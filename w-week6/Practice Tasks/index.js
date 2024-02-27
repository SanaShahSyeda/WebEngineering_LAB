const myID = document.getElementById("h1");
// alert(myID.innerText);
myID.style.color = "green";
myID.innerText = "Hellooooo";
myButton.innerText = "Submit";

function sayHi() {
  alert("Button clicked");
}

myButton.onClick = sayHi;

function getAlert() {
  const ball = document.createElement("div");
  ball.className = "ball";
  const container = document.getElementById("container");
  container.appendChild(ball);
}

my_btn.onclick = getAlert;

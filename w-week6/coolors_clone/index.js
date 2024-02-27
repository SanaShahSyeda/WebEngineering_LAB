function createColorPallete() {
  const color_pallete = document.createElement("div");
  color_pallete.className = "color_pallete";
  color_pallete.style.backgroundColor = getRandomHexColor();
  const content = document.getElementById("content");
  content.appendChild(color_pallete);
}

plus.onclick = createColorPallete;

function generateDifferentColors() {
  const arr = document.getElementsByClassName("color_pallete");
  Array.from(arr).forEach((item) => {
    item.style.backgroundColor = getRandomHexColor();
  });
}

generate.onclick = generateDifferentColors;

function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Pad the string with zeros if necessary to ensure it is exactly 6 characters long
  while (randomColor.length < 6) {
    randomColor = "0" + randomColor;
  }

  // Return the random hex color preceded by a hash symbol
  return "#" + randomColor;
}

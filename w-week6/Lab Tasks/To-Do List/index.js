function create_ToDo() {
  const content = document.getElementById("content_container");

  // get input value
  var inputElement = document.getElementById("list");
  var inputValue = inputElement.value;

  // create new div
  const to_do_container = document.createElement("div");
  to_do_container.className = "to-do";

  // create element label
  const to_do_label = document.createElement("label");
  to_do_label.style.backgroundColor = getRandomLightHexColor();
  to_do_label.className = "to-do-label";

  //   set input value to label's text
  to_do_label.textContent = inputValue;

  // create element button
  const to_do_button = document.createElement("button");
  to_do_button.className = "delete_button";
  to_do_button.textContent = "Delete";

  // delete to-do item
  to_do_button.onclick = function () {
    content.removeChild(to_do_container);
  };

  // add label and button to div
  to_do_container.appendChild(to_do_label);
  to_do_container.appendChild(to_do_button);

  //   add div to container
  content.appendChild(to_do_container);
}

add_button.onclick = create_ToDo;

function getRandomLightHexColor() {
  // Generate random values for RGB components within a specific range
  var red = Math.floor(Math.random() * 128) + 128; // R: 128-255 (lighter)
  var green = Math.floor(Math.random() * 128) + 128; // G: 128-255 (lighter)
  var blue = Math.floor(Math.random() * 128) + 128; // B: 128-255 (lighter)

  // Convert RGB components to hexadecimal and concatenate them
  var randomColor = red.toString(16) + green.toString(16) + blue.toString(16);

  // Return the random hex color preceded by a hash symbol
  return "#" + randomColor;
}

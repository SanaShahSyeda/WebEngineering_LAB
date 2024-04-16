function checkDisplayProperty() {
  const flex_property = document.getElementById("flex");
  if (flex_property.checked) {
    var allFlexSelects = document.querySelectorAll(
      'select[name="flexproperty"]'
    );
    allFlexSelects.forEach(function (flexSelect) {
      flexSelect.disabled = false;
    });
  } else {
    var allFlexSelects = document.querySelectorAll(
      'select[name="flexproperty"]'
    );
    allFlexSelects.forEach(function (flexSelect) {
      flexSelect.disabled = true;
    });
  }

  const grid_property = document.getElementById("grid");
  if (grid_property.checked) {
    var allGridSelects = document.querySelectorAll(
      'select[name="gridproperty"]'
    );
    allGridSelects.forEach(function (gridSelect) {
      gridSelect.disabled = false;
    });

    var allGridInputs = document.querySelectorAll(
      'input[name="grid_template"]'
    );
    allGridInputs.forEach(function (gridInput) {
      gridInput.disabled = false;
    });
  } else {
    var allGridSelects = document.querySelectorAll(
      'select[name="grid_template"]'
    );
    allGridSelects.forEach(function (gridSelect) {
      gridSelect.disabled = true;
    });

    var allGridInputs = document.querySelectorAll(
      'input[name="grid_template"]'
    );
    allGridInputs.forEach(function (gridInput) {
      gridInput.disabled = true;
    });
  }
}

// add balls to container
function addBallToContainer() {
  const ball_container = document.createElement("div");
  ball_container.className = "ball";
  const content = document.getElementById("body_container");
  content.appendChild(ball_container);
}
add_button.onclick = addBallToContainer;

// delete balls from container
function deleteBalls() {
  const content = document.getElementById("body_container");
  content.innerHTML = "";
}
delete_button.onclick = deleteBalls;

function applyFlexProperties() {
  const content = document.getElementById("body_container");

  // flex-direction
  let selectedOption = flex_direction.options[flex_direction.selectedIndex];
  const selectedText = selectedOption.value;
  content.style.flexDirection = selectedText;

  // justify-content
  let selectedOption2 = justify_content.options[justify_content.selectedIndex];
  let selectedText2 = selectedOption2.value;
  content.style.justifyContent = selectedText2;

  // align-items
  let selectedOption3 = align_items.options[align_items.selectedIndex];
  let selectedText3 = selectedOption3.value;
  content.style.alignItems = selectedText3;

  // wrap
  let selectedOption4 = flex_wrap.options[flex_wrap.selectedIndex];
  let selectedText4 = selectedOption4.value;
  content.style.flexWrap = selectedText4;
}

function applyGridProperties() {
  const content = document.getElementById("body_container");

  // grid-template-rows
  let template_rows = document.getElementById("grid_template_rows");
  let rows = template_rows.value;
  content.style.gridTemplateRows = rows;

  // grid-template-columns
  let template_columns = document.getElementById("grid_template_columns");
  let columns = template_columns.value;
  content.style.gridTemplateColumns = columns;

  // justify-items
  let selectedOption = justify_items.options[justify_items.selectedIndex];
  let selectedText = selectedOption.value;
  content.style.justifyItems = selectedText;

  // align-items
  let selectedOption2 = align__items.options[align__items.selectedIndex];
  let selectedText2 = selectedOption2.value;
  content.style.alignItems = selectedText2;
}

// ensures only 1 display property is selected(flex or grid)
function handleRadioSelection(selectedValue) {
  checkDisplayProperty();
  var allRadios = document.querySelectorAll('input[type="radio"]');
  allRadios.forEach(function (radio) {
    if (radio.value !== selectedValue) {
      radio.checked = false; // Uncheck other radio buttons
    }
  });
  checkDisplayProperty();
  const content = document.getElementById("body_container");
  content.style.display = selectedValue;
}

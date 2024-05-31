let sidebar = document.getElementById("sidebar");
let collapse_icon = document.getElementById("collapse_sidebar");
let workspace = document.getElementById("workspace");
let collapsed_sidebar = document.getElementById("collapsed_sidebar");
let addCard = document.querySelector("input[name=addCard]");

let to_do_cards = [];
let favourites = [];
let completed_cards = [];

let task_actions = [
  "Add Task",
  "Delete Card",
  "Add to Favourites",
  "Mark Completed",
];

document.addEventListener("DOMContentLoaded", function () {
  // Load completed cards from local storage
  let storedCompletedCards = JSON.parse(
    localStorage.getItem("completed_cards")
  );
  if (storedCompletedCards) {
    completed_cards = storedCompletedCards;
  }
  let storedToDoCards = JSON.parse(localStorage.getItem("to_do_cards"));
  if (storedToDoCards) {
    to_do_cards = storedToDoCards;
  }

  // Load favourite cards from local storage
  let storedFavouriteCards = JSON.parse(
    localStorage.getItem("favourite_cards")
  );

  if (storedFavouriteCards) {
    favourites = storedFavouriteCards;
  }

  // Display all cards including completed cards
  displayAllCards();
});

function displayAllCards() {
  displayToDoCards();
  displayFavouriteCards();
  // displayCompletedCards();
}

function displayToDoCards() {
  // workspace.innerHTML = ""; // Clear existing cards
  to_do_cards.forEach((to_do_card) => {
    let [card, card_three_dots] = addCardDiv(to_do_card.card_name);
    addThreeDotsMenu(card, to_do_card.card_name, card_three_dots);
    addActions(card, to_do_card.card_name);
    to_do_card.task_names.forEach((task_name) => {
      addTaskElement(card, to_do_card.card_name, task_name);
    });
  });
}

function displayFavouriteCards() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let card_title = card.querySelector(".card_title_heading").textContent;
    let isFavourite = favourites.some(
      (favouriteCard) => favouriteCard.card_name === card_title
    );
    card.style.display = isFavourite ? "flex" : "none";
  });
}

function displayFavouriteCards() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let card_title = card.querySelector(".card_title_heading").textContent;
    let isFavourite = favourites.some(
      (favouriteCard) => favouriteCard.card_name === card_title
    );
    if (!isFavourite) {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  });
}

function displayToDoCards() {
  workspace.innerHTML = ""; // Clear existing cards
  to_do_cards.forEach((to_do_card) => {
    let [card, card_three_dots] = addCardDiv(to_do_card.card_name);
    addThreeDotsMenu(card, to_do_card.card_name, card_three_dots);
    addActions(card, to_do_card.card_name);
    to_do_card.task_names.forEach((task_name) => {
      addTaskElement(card, to_do_card.card_name, task_name);
    });
    workspace.appendChild(card); // Add card to the workspace
  });
}

document
  .getElementById("completedCards")
  .addEventListener("click", function () {
    let completedContainer = document.getElementById("completedCardsContainer");
    let icon = document.getElementById("completedCards");

    if (completedContainer.style.display === "none") {
      completedContainer.style.display = "block";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
      displayCompletedCards();
    } else {
      completedContainer.style.display = "none";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    }
  });

function displayCompletedCards() {
  let completedContainer = document.getElementById("completedCardsContainer");
  completedContainer.innerHTML = ""; // Clear existing cards

  completed_cards.forEach((completed_card) => {
    let card = document.createElement("div");
    card.className = "card";

    let title_div = document.createElement("div");
    title_div.className = "card_title_div";

    let h3 = document.createElement("h3");
    h3.className = "card_title_heading";
    h3.textContent = completed_card.card_name;

    title_div.appendChild(h3);
    card.appendChild(title_div);

    completed_card.task_names.forEach((task_name) => {
      let task = document.createElement("div");
      task.className = "task";

      let title_input = document.createElement("input");
      title_input.className = "task_title_input";
      title_input.value = task_name;
      title_input.readOnly = true;

      task.appendChild(title_input);
      card.appendChild(task);
    });

    let delete_icon = document.createElement("div");
    delete_icon.className = "delete_icon";
    delete_icon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    delete_icon.addEventListener("click", function () {
      deleteCompletedCard(completed_card.card_name);
      displayCompletedCards(); // Refresh display after deletion
    });

    title_div.appendChild(delete_icon);
    completedContainer.appendChild(card);
  });
}

function markCardAsCompleted(card_name) {
  // Find the card in to_do_cards and move it to completed_cards
  let index = to_do_cards.findIndex((card) => card.card_name === card_name);
  if (index !== -1) {
    let completedCard = to_do_cards.splice(index, 1)[0];
    completed_cards.push(completedCard);
    localStorage.setItem("completed_cards", JSON.stringify(completed_cards));
    console.log("Card marked as completed:", completedCard);
    console.log("Completed cards array:", completed_cards);
    displayCompleted();
  }
}

function displayCompleted() {
  window.location.href = "./completed.html";
}

function deleteCompletedCard(card_name) {
  let cardIndex = completed_cards.findIndex(
    (card) => card.card_name === card_name
  );
  if (cardIndex !== -1) {
    completed_cards.splice(cardIndex, 1);
    localStorage.setItem("completed_cards", JSON.stringify(completed_cards));
  }
}

function toggleSidebar() {
  if (collapsed_sidebar.style.display === "none") {
    sidebar.style.display = "none";
    collapsed_sidebar.style.display = "flex";
  } else if (sidebar.style.display === "none") {
    sidebar.style.display = "flex";
    collapsed_sidebar.style.display = "none";
  }
}

function addCardObject(card_name, task_names) {
  let to_do = {
    card_name: card_name,
    task_names: [...task_names],
  };
  to_do_cards.push(to_do);
}

function addTaskNamesToExistingCard(index, task_name) {
  // Check if the index is valid
  if (index >= 0 && index < to_do_cards.length) {
    console.log(index + task_name);
    // Push the new string into the array of strings in the specified object
    to_do_cards[index].task_names.push(task_name);
  }
}

function addCardsToLocalStorage(to_do_cards) {
  // Save card data to localStorage
  localStorage.setItem("to_do_cards", JSON.stringify(to_do_cards));
}

document.getElementById("add_card").addEventListener("click", function () {
  //Take input value
  let card_name = addCard.value;
  let task_names = [];
  let [card, card_three_dots] = addCardDiv(card_name);
  addThreeDotsMenu(card, card_name, card_three_dots);
  addCardObject(card_name, task_names);
  addCardsToLocalStorage(to_do_cards);
});

function addCardDiv(card_name) {
  // create card div
  let card = document.createElement("div");
  card.className = "card";

  // create title div
  let title_div = document.createElement("div");
  title_div.className = "card_title_div";

  // create heading element
  let h3 = document.createElement("h3");
  h3.className = "card_title_heading";
  h3.textContent = card_name;

  // create three_dots div
  let card_three_dots = document.createElement("div");
  card_three_dots.className = "card_three_dots";
  card_three_dots.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;

  // add heading and three_dots menu to title div
  title_div.appendChild(h3);
  title_div.appendChild(card_three_dots);

  // add title div to card
  card.appendChild(title_div);
  workspace.appendChild(card);

  return [card, card_three_dots];
}

function addThreeDotsMenu(card, card_name, card_three_dots) {
  card_three_dots.addEventListener("click", function () {
    let three_dots_menu = document.createElement("div");
    three_dots_menu.className = "three_dots_menu";

    // create title div
    let three_dots_title_div = document.createElement("div");
    three_dots_title_div.className = "three_dots_title_div";

    // create heading element
    let h4 = document.createElement("h4");
    h4.className = "menu_title_heading";
    h4.textContent = "List of Actions";

    // create cross-icon div
    let three_dots_cross = document.createElement("div");
    three_dots_cross.className = "three_dots_cross";
    three_dots_cross.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    // add heading and cross to three_dots_title div
    three_dots_title_div.appendChild(h4);
    three_dots_title_div.appendChild(three_dots_cross);

    // add three_dots_title div to three_dots_menu
    three_dots_menu.appendChild(three_dots_title_div);

    actions = addActions(card, card_name);

    // add actions div to three_dots_menu
    three_dots_menu.appendChild(actions);

    // add three_dots_menu div to card
    card.appendChild(three_dots_menu);

    closeActionsMenu(card, three_dots_cross, three_dots_menu);
  });
}

function addActions(card, card_name) {
  // create actions menu
  let actions = document.createElement("div");
  actions.className = "actions";

  task_actions.forEach((element) => {
    let action = document.createElement("div");
    action.textContent = element;
    actions.appendChild(action);
    checkCardActionAndPerform(card, card_name, action, element);
  });
  return actions;
}

function closeActionsMenu(card, three_dots_cross, three_dots_menu) {
  three_dots_cross.addEventListener("click", function () {
    card.removeChild(three_dots_menu);
  });
}

function checkCardActionAndPerform(card, card_name, action, element) {
  if (element === "Delete Card") {
    action.addEventListener("click", function () {
      workspace.removeChild(card);

      let to_do_index = to_do_cards.findIndex(
        (to_do) => to_do.card_name === card_name
      );
      if (to_do_index !== -1) {
        to_do_cards.splice(to_do_index, 1);
        addCardsToLocalStorage(to_do_cards);
      }

      let favourite_index = favourites.findIndex(
        (favourite) => favourite.card_name === card_name
      );
      if (favourite_index !== -1) {
        favourites.splice(favourite_index, 1);
        localStorage.setItem("favourite_cards", JSON.stringify(favourites));
      }
    });
  }
  if (element === "Add to Favourites") {
    action.addEventListener("click", function () {
      let index = to_do_cards.findIndex(
        (to_do) => to_do.card_name === card_name
      );
      if (index !== -1) {
        favourites.push(to_do_cards[index]);
        localStorage.setItem("favourite_cards", JSON.stringify(favourites));
        addStarAnimation(card);
        addHighlightAnimation(card);
      }
    });
  }
  if (element === "Add Task") {
    addTask(card, card_name, action);
  }
  if (element === "Mark Completed") {
    action.addEventListener("click", function () {
      markCardAsCompleted(card_name);
      workspace.removeChild(card);
    });
  }
}

function addStarAnimation(card) {
  let star = document.createElement("div");
  star.className = "star";
  star.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  card.appendChild(star);

  setTimeout(() => {
    star.classList.add("hidden");
    card.removeChild(star);
  }, 1000);
}

function addHighlightAnimation(card) {
  card.classList.add("highlight");
  setTimeout(() => {
    card.classList.remove("highlight");
  }, 3000);
}

function addTask(card, card_name, action) {
  action.addEventListener("click", function () {
    let task = document.createElement("div");
    task.className = "task";

    let title_input = document.createElement("input");
    title_input.className = "task_title_input";
    title_input.setAttribute("placeholder", "Add task");

    let delete_icon = document.createElement("div");
    delete_icon.className = "delete_icon";
    delete_icon.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    task.appendChild(title_input);
    task.appendChild(delete_icon);

    card.appendChild(task);

    title_input.addEventListener("change", function () {
      let task_name = title_input.value;

      // Add the task to the to_do_cards array
      let cardIndex = to_do_cards.findIndex(
        (to_do) => to_do.card_name === card_name
      );
      if (cardIndex !== -1) {
        let taskIndex = to_do_cards[cardIndex].task_names.indexOf(task_name);
        if (taskIndex === -1) {
          to_do_cards[cardIndex].task_names.push(task_name);
        }
      }

      // Add the task to the favourites array if the card is in favourites
      let favCardIndex = favourites.findIndex(
        (favourite_card) => favourite_card.card_name === card_name
      );
      if (favCardIndex !== -1) {
        let favTaskIndex =
          favourites[favCardIndex].task_names.indexOf(task_name);
        if (favTaskIndex === -1) {
          favourites[favCardIndex].task_names.push(task_name);
        }
      }

      addCardsToLocalStorage(to_do_cards);
      localStorage.setItem("favourite_cards", JSON.stringify(favourites));
    });

    delete_icon.addEventListener("click", function () {
      deleteTaskFromCard(task, card, card_name, title_input.value);
    });
  });
}

function addTaskElement(card, card_name, task_name) {
  let task = document.createElement("div");
  task.className = "task";

  let title_input = document.createElement("input");
  title_input.className = "task_title_input";
  title_input.value = task_name;
  title_input.readOnly = true; // Make it read-only initially

  let delete_icon = document.createElement("div");
  delete_icon.className = "delete_icon";
  delete_icon.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  task.appendChild(title_input);
  task.appendChild(delete_icon);

  card.appendChild(task);

  delete_icon.addEventListener("click", function () {
    deleteTaskFromCard(task, card, card_name, task_name);
  });
}

function deleteTaskFromCard(task, card, card_name, task_name) {
  card.removeChild(task);

  // Remove task from to_do_cards array
  let cardIndex = to_do_cards.findIndex(
    (to_do) => to_do.card_name === card_name
  );
  if (cardIndex !== -1) {
    let taskIndex = to_do_cards[cardIndex].task_names.indexOf(task_name);
    if (taskIndex !== -1) {
      to_do_cards[cardIndex].task_names.splice(taskIndex, 1);
      localStorage.setItem("to_do_cards", JSON.stringify(to_do_cards));
    }
  }

  // Remove task from favourites array if the card is a favourite
  let favCardIndex = favourites.findIndex(
    (fav_card) => fav_card.card_name === card_name
  );
  if (favCardIndex !== -1) {
    let favTaskIndex = favourites[favCardIndex].task_names.indexOf(task_name);
    if (favTaskIndex !== -1) {
      favourites[favCardIndex].task_names.splice(favTaskIndex, 1);
      localStorage.setItem("favourite_cards", JSON.stringify(favourites));
    }
  }
}

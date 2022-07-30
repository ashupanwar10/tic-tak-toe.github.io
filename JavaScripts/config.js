function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error-input");
  successErrorMessage.textContent = "";
  validateText.value = "";
}

function validateInputText(event) {
  const textValue = event.target.value.trim();
  if (textValue && textValue.length >= 3) {
    successErrorMessage.textContent = "Looks OK";
    successErrorMessage.classList.remove("error");
    successErrorMessage.classList.add("success");
    formElement.firstElementChild.classList.remove("error-input");
  } else {
    successErrorMessage.textContent = "Please enter a valid name!";
    successErrorMessage.classList.remove("success");
    successErrorMessage.classList.add("error");
  }
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();

  if (!enteredPlayerName || enteredPlayerName.length < 3) {
    event.target.firstElementChild.classList.add("error-input");
    successErrorMessage.textContent = "Please enter a valid name!";
    successErrorMessage.classList.remove("success");
    successErrorMessage.classList.add("error");
    return;
  }

  const updatedPlayerDataElement = document.querySelector(
    `#player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}

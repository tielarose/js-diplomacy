"use strict";

function changeColor() {
  const itemsWithClassColorChange = document.querySelectorAll(".color-change");

  for (const item of itemsWithClassColorChange) {
    item.classList.add("red");
  }
}

function validateInput(evt) {
  evt.preventDefault();

  const numInput = document.querySelector("#number-input");
  const userInput = Number(numInput.value);

  const validationMsg = document.querySelector("#formFeedback");
  if (isNaN(userInput || userInput >= 10)) {
    validationMsg.innerHTML = "Please enter a small number";
  } else {
    validationMsg.innerHTML = "You are good to go!";
  }
}

document.querySelector(".color-changer").addEventListener("click", changeColor);
document
  .querySelector("[type='submit']")
  .addEventListener("click", validateInput);

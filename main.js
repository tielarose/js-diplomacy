"use strict";

function changeColor() {
  const itemsWithClassColorChange = document.querySelectorAll(".color-change");

  for (const item of itemsWithClassColorChange) {
    item.classList.add("red");
  }
}

document.querySelector(".color-changer").addEventListener("click", changeColor);

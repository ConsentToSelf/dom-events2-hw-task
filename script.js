/*
Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик.
При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.
*/

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
let check = null;

function toggleFunc(e) {
  const dropdownMenu = e.currentTarget.querySelector(".dropdown-menu");
  const isAdded = dropdownMenu.classList.toggle("d-none");
  if (check && check !== dropdownMenu) check.classList.add("d-none");
  if (!isAdded) check = dropdownMenu;
}
dropdownItems.forEach((e) => e.addEventListener("click", toggleFunc));

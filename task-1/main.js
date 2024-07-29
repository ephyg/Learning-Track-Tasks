let item = document.getElementById("item");
let itemsList = document.getElementById("items");

let inputField = document.getElementById("input-field");
let addButton = document.getElementById("add-button");

let items = ["Apple","Orange"];

// show items
function showItems() {
  itemsList.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    itemsList.innerHTML += `<li id="item">
        <span id="item-number">${i + 1} </span>
        <span id="item-name">${items[i]}</span>
        <button id="delete-button">Delete</button>
      </li>`;
  }
}
showItems();

// delete item
itemsList.addEventListener("click", function (e) {
  if (e.target.id === "delete-button") {
    // console.log(e.target.parentElement.children[0].textContent);
    items.splice(e.target.parentElement.children[0].textContent - 1, 1);
    showItems();
  }
});


// add items
addButton.addEventListener("click", function () {
  if (inputField.value !== "") {
    items.push(inputField.value);
    showItems();
    inputField.value = "";
  }
});

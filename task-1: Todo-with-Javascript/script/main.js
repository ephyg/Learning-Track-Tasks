let item = document.getElementById("item");
let itemsList = document.getElementById("items");

let inputField = document.getElementById("input-field");
let addButton = document.getElementById("add-button");

let items = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let taskTitle = document.getElementById("task-title")
// show items
function showItems() {
  itemsList.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    itemsList.innerHTML += `<li id="item">
        <span id="item-number">${i + 1} </span>
        <span id="item-name">${items[i]}</span>
        <div class="">
          <button id="edit-button" class="edit-button">Edit</button>
          <button id="delete-button" class="delete-button">Delete</button

        </div>
      </li>`;
  }
}
showItems();



// edit item
let editIndex = null;
itemsList.addEventListener("click", function (e) {
  if (e.target.id === "edit-button") {
    let index = e.target.parentElement.parentElement.children[0];
    editIndex = index.textContent - 1;
    inputField.value = items[editIndex];
    addButton.innerHTML = "Update";
    taskTitle.innerHTML = "Edit Item"

  }
});

// add items
addButton.addEventListener("click", function () {
  if (inputField.value !== "") {
    if (editIndex !== null) {
      items[editIndex] = inputField.value;
      editIndex = null;
      addButton.innerHTML = "Add";
    } else {
      items.push(inputField.value);
    }
    showItems();
    inputField.value = "";
  }
});


// delete item
itemsList.addEventListener("click", function (e) {
  console.log(e.target.id);
  if (e.target.id === "delete-button") {
    console.log(e.target.parentElement.parentElement.children[0].textContent);
    items.splice(
      e.target.parentElement.parentElement.children[0].textContent - 1,
      1
    );
    showItems();
    editIndex = null
  }
});
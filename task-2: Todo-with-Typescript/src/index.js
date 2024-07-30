"use strict";
let itemsList = document.getElementById("items");
let items = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Mango" },
    { name: "Orange" },
    { name: "Pineapple" },
];
// show item
function showItem() {
    itemsList.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        itemsList.innerHTML += `<li id="item">
        <span id="item-number">${i + 1} </span>
        <span id="item-name">${items[i].name}</span>
        <div class="">
          <button id="edit-button" class="edit-button">Edit</button>
          <button id="delete-button" class="delete-button">Delete</button
        </div>
      </li>`;
    }
}
showItem();
let editIndex = null;
let taskTitle = document.getElementById("task-title");
// Edit Item
itemsList.addEventListener("click", (e) => {
    var _a;
    let target = e.target;
    if (target.id === "edit-button") {
        let li = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        editIndex = li.children[0].textContent;
        inputField.value = items[editIndex - 1].name;
        addButton.innerHTML = "Update";
        taskTitle.innerHTML = "Edit Item";
    }
});
let addButton = document.getElementById("add-button");
let inputField = document.getElementById("input-field");
// Add item
addButton.addEventListener("click", () => {
    if (inputField.value !== "") {
        if (editIndex !== null) {
            items[editIndex - 1]["name"] = inputField.value;
            editIndex = null;
            addButton.innerHTML = "Add";
        }
        else {
            items.push({ name: inputField.value });
        }
        showItem();
        inputField.value = "";
        taskTitle.innerHTML = "Add Item";
    }
});
// Delete item
itemsList.addEventListener("click", (e) => {
    var _a;
    let target = e.target;
    if (target.id === "delete-button") {
        let li = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        let index = Number(li.children[0].textContent);
        console.log(index);
        items.splice(index - 1, 1);
        showItem();
        editIndex = null;
    }
});

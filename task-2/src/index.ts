interface ToDoItem {
  name: string;
}

let itemsList = document.getElementById("items") as HTMLUListElement;
let items: ToDoItem[] = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Mango" },
  { name: "Orange" },
  { name: "Pineapple" },
];

// show item
function showItem(): void {
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

let editIndex: any = null;
let taskTitle = document.getElementById("task-title") as HTMLHRElement;
// Edit Item
itemsList.addEventListener("click", (e) => {
  let target = e.target as HTMLUListElement;
  if (target.id === "edit-button") {
    let li = target.parentElement?.parentElement as HTMLLIElement;
    editIndex = li.children[0].textContent;
    inputField.value = items[editIndex - 1].name;
    addButton.innerHTML = "Update";
    taskTitle.innerHTML = "Edit Item";
  }
});

let addButton = document.getElementById("add-button") as HTMLButtonElement;
let inputField = document.getElementById("input-field") as HTMLInputElement;

// Add item
addButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    if (editIndex !== null) {
      items[editIndex - 1]["name"] = inputField.value;
      editIndex = null;
      addButton.innerHTML = "Add";
    } else {
      items.push({ name: inputField.value });
    }
    showItem();
    inputField.value = "";
    taskTitle.innerHTML = "Add Item";
  }
});

// Delete item
itemsList.addEventListener("click", (e) => {
  let target = e.target as HTMLUListElement;
  if (target.id === "delete-button") {
    let li = target.parentElement?.parentElement as HTMLLIElement;
    let index = Number(li.children[0].textContent);
    console.log(index);
    items.splice(index - 1, 1);
    showItem();
    editIndex = null;
  }
});

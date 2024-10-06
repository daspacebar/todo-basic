// TODO: Let's code this baby up from scratch!

// Initialising all the variables from the element IDs
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const deleteButton = document.getElementById("deleteButton");
const addButton = document.querySelector(".btn");

// Function to add a new todo item to the list

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    // function call to update the todo count
    updateTodoCount();
    todoInput.value = "";
  }
}

// Function to update todo count

function updateTodoCount() {
  const items = todoList.querySelector("li");
  todoCount.textContent = items.length;
}

// Function to delete all todos

function deleteAllTodos() {
  todoList.innerHTML = "";
  updateTodoCount();
}

// All event listeners

addButton.addEventListener("click", addTodo);
deleteButton.addEventListener("click", deleteAllTodos);

// Add todo on Enter key press

todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

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
    // fucntion to edit the todo item
    li.addEventListener("click", editTodo);
    todoList.appendChild(li);
    // function call to update the todo count
    updateTodoCount();
    todoInput.value = "";
  }
}

// Function to update todo count

function updateTodoCount() {
  const items = todoList.querySelectorAll("li");
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

// Function to edit the todo list item

function editTodo(event) {
  const li = event.target;
  const originalText = li.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = originalText;
  li.textContent = "";
  li.appendChild(input);

  // editing the todo on clicking Enter or focusing out state
  input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      li.textContent = input.value;
      li.addEventListener("click", editTodo);
      updateTodoCount();
    }
  });

  input.addEventListener("blur", function () {
    li.textContent = input.value;
    li.addEventListener("click", editTodo);
    updateTodoCount();
  });
  input.focus();
}

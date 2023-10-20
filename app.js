// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;
    if (taskText.trim() === "") return;

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-button button" onclick="editTask(this)">Edit</button>
        <button class="delete-button button" onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
}

// Function to remove a task
function removeTask(button) {
    var taskList = document.getElementById("taskList");
    var li = button.parentElement;
    taskList.removeChild(li);
}

// Function to edit a task
function editTask(button) {
    var taskText = button.parentElement.querySelector("span");
    var newText = prompt("Edit task:", taskText.innerText);
    if (newText !== null && newText.trim() !== "") {
        taskText.innerText = newText;
    }
}

// Function to delete all tasks
function deleteAllTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("deleteAllButton").addEventListener("click", deleteAllTasks);

// Use DOM properties, methods, and techniques to create a web application that provides a dynamic user experience.
// Use BOM properties, methods, and techniques to facilitate creation of a dynamic web application.
// Demonstrate proficiency with event-driven programming and DOM events.
// Implement basic form validation using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validation.

var defaultTasks = ["Task 1", "Task 2", "Task 3"];

var h1 = document.querySelector("h1");
h1.style.color = "#372104";

h1.parentNode.style.color = "#333"; // this changes the body text color


// Load tasks from localStorage or use predefined tasks
window.onload = function() { //BOM 
    localStorage.clear(); //What this does is resets the localStorage data when the window reloads, for the purposes of this demo I chose not to allow tasks to be stored indefinitely as it was causing issues
    var todoList = document.getElementById("todo-list");
    if (localStorage.getItem("tasks")) {
        todoList.innerHTML = localStorage.getItem("tasks");
    
    } else {
        // Add predefined tasks to the list
        defaultTasks.forEach(function(taskText) {
            addTaskToList(taskText);
        });
    }
};

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    //this prevents blank items from being added
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    addTaskToList(taskText);
    
    taskInput.value = ""; // Clear input field
    
    // Save tasks to localStorage after adding new task
    localStorage.setItem("tasks", document.getElementById("todo-list").innerHTML);
}

function addTaskToList(taskText) {
    var todoList = document.getElementById("todo-list");
    
    var todoItem = document.createElement("div"); // each to-do item is created in a new div
    todoItem.classList.add("todo-item");
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) { // I learned about using "this" from stack overflow/MDN website
            todoItem.style.textDecoration = "line-through"; //modifies the element attribute based on user interaction
        } else {
            todoItem.style.textDecoration = "none";
        }
        // Save tasks to localStorage when checkbox state changes
        localStorage.setItem("tasks", todoList.innerHTML);
    });
    
    var taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        if (window.confirm("Are you sure you want to delete this task?")) {
            todoItem.remove(); //deletes task
           
        }
    });
    
    todoItem.appendChild(checkbox); // These add all of the elements to the todo-list div
    todoItem.appendChild(taskLabel);
    todoItem.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
}
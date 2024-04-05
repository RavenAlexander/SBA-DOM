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
    
    var todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
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
            todoItem.remove();
           
        }
    });
    
    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskLabel);
    todoItem.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
}

//Note: I noticed that sometimes when I refresh the page, the "Delete" button will stop working on previously saved tasks but I'm not sure why? Sometimes it works just fine and other times it doesn't. Weird. 
//I've tried to console.log to see what might be causing it but I can't find the error. I am new to using localStorage so that may have something to do with it.
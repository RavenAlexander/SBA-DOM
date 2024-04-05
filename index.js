// Use DOM properties, methods, and techniques to create a web application that provides a dynamic user experience.
// Use BOM properties, methods, and techniques to facilitate creation of a dynamic web application.
// Demonstrate proficiency with event-driven programming and DOM events.
// Implement basic form validation using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validation.

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    var todoList = document.getElementById("todo-list");
    
    var todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    
    
    
    
}
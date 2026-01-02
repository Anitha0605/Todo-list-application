function addTask() {
    const input = document.getElementById('todo-input');
    const taskValue = input.value;

    if (taskValue.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const ul = document.getElementById('todo-list');
    
    // Create the list item
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskValue} 
        <span class="delete-btn" onclick="this.parentElement.remove()">×</span>
    `;

    ul.appendChild(li);
    input.value = ""; 
}
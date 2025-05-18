let todos = [
    { text: "NOTE #1", completed: false },
    { text: "NOTE #2", completed: true },
    { text: "NOTE #3", completed: false },
  ];
  
  const todoList = document.getElementById("todoList");
  const themeToggle = document.getElementById("themeToggle");
  
  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "todo-item" + (todo.completed ? " completed" : "");
  
      const left = document.createElement("div");
      left.className = "todo-left";
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        renderTodos();
      });
  
      const span = document.createElement("span");
      span.textContent = todo.text;
      span.contentEditable = false;
  
      const right = document.createElement("div");
      right.className = "todo-actions";
  
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏️";
      editBtn.title = "Edit";
      editBtn.onclick = () => {
        const newText = prompt("Edit note:", todo.text);
        if (newText !== null && newText.trim() !== "") {
          todo.text = newText.trim();
          renderTodos();
        }
      };
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑";
      deleteBtn.title = "Delete";
      deleteBtn.onclick = () => {
        if (confirm("Delete this note?")) {
          todos.splice(index, 1);
          renderTodos();
        }
      };
  
      left.appendChild(checkbox);
      left.appendChild(span);
      right.appendChild(editBtn);
      right.appendChild(deleteBtn);
      li.appendChild(left);
      li.appendChild(right);
      todoList.appendChild(li);
    });
  }
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  renderTodos();
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Cargar tareas desde localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Guardar tareas en localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Mostrar las tareas en la interfaz
    function renderTasks() {
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.textContent = task.text;
            if (task.completed) {
                taskSpan.classList.add("completed");
            }

            li.appendChild(taskSpan);

            // ✔ Botón de completar
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "✔";
            completeBtn.classList.add("complete-btn");
            completeBtn.addEventListener("click", () => {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks();
            });
            li.appendChild(completeBtn);

            // ✏️ Botón de editar
            const editBtn = document.createElement("button");
            editBtn.textContent = "Editar";
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click", () => {
                const newText = prompt("Editar tarea:", task.text);
                if (newText) {
                    tasks[index].text = newText;
                    saveTasks();
                    renderTasks();
                }
            });
            li.appendChild(editBtn);

            // ❌ Botón de eliminar
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
        });
    }

    // Agregar tarea al hacer clic
    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text === "") return;

        tasks.push({ text: text, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = "";
    });

    // Agregar tarea al presionar Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });

    // Mostrar las tareas guardadas al cargar
    renderTasks();
});



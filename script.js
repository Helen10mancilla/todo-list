document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; // Evitar agregar tareas vacías

        const li = document.createElement("li");
        li.textContent = taskText;

        // Botón de editar
        const editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.classList.add("edit");
        li.appendChild(editBtn);

        // Botón de eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add("delete");
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = "";

        // Evento para editar la tarea
        editBtn.addEventListener("click", () => {
            const newText = prompt("Editar tarea:", li.firstChild.textContent);
            if (newText) li.firstChild.textContent = newText;
        });

        // Evento para eliminar la tarea
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    });
});


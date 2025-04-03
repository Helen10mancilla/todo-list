//funcionalidad para agregar,editar y borrar tareas
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
//Funcion del boton agregar tarea y el texto de ella
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; 

        const li = document.createElement("li");
        li.textContent = taskText;

        // Funcion del boton editar las tareas ya agregadas
        const editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.classList.add("edit");
        li.appendChild(editBtn);

        // funcion del boton eliminar tareas
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add("delete");
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = "";

        // funcion del cuadro de texto para la edicion de las tareas
        editBtn.addEventListener("click", () => {
            const newText = prompt("Editar tarea:", li.firstChild.textContent);
            if (newText) li.firstChild.textContent = newText;
        });

        // evento para la eliminacion de tareas
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    });
});


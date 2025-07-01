document.addEventListener('DOMContentLoaded', () => {
    const botonAgregar = document.querySelector('.agregar-tarea');
    const inputTarea = document.querySelector('input.tarea');
    const listaTareas = document.querySelector('.lista-tareas');

    botonAgregar.addEventListener('click', () => {
        const nombreTarea = inputTarea.value.trim();
        if (nombreTarea === '') return;

        // Crear nuevo div.tarea
        const nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('tarea');

        // Agregar contenido
        nuevaTarea.innerHTML = `
            <h4>${nombreTarea}</h4>
            <button class="eliminar-tarea">Eliminar</button>
            <button class="editar-tarea">Editar</button>
        `;

        // Agregar a la lista
        listaTareas.appendChild(nuevaTarea);

        // Limpiar input
        inputTarea.value = '';

        // Funcionalidad para eliminar
        nuevaTarea.querySelector('.eliminar-tarea').addEventListener('click', () => {
            nuevaTarea.remove();
        });

        // (Opcional) Funcionalidad para editar
        nuevaTarea.querySelector('.editar-tarea').addEventListener('click', () => {
            const nuevoNombre = prompt('Editar tarea:', nombreTarea);
            if (nuevoNombre && nuevoNombre.trim() !== '') {
                nuevaTarea.querySelector('h4').textContent = nuevoNombre;
            }
        });
    });
});
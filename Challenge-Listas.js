class Todo {
    constructor(title, description, pointsToNext) {
        this.title = title;
        this.description = description;
        this.pointsToNext = pointsToNext;
    }
}

const todos = [];

todos.push(new Todo("Comprar alimentos", "Comprar leche, pan y huevos", 1));
todos.push(new Todo("Preparar desayuno", "Usar los ingredientes comprados para hacer un desayuno saludable", 2));
todos.push(new Todo("Revisar emails", "Responder a los correos importantes y archivar el resto", null));

function printTodos(todoList) {
    todoList.forEach((todo, index) => {
        console.log(`Tarea ${index + 1}:`);
        console.log(`Título: ${todo.title}`);
        console.log(`Descripción: ${todo.description}`);
        if (todo.pointsToNext !== null) {
            console.log(`Siguiente tarea: ${todo.pointsToNext + 1}`);
        } else {
            console.log(`No hay más tareas relacionadas.`);
        }
        console.log('-------------------------');
    });
}

printTodos(todos);
class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    // Método para agregar una persona a la cola (en la parte trasera)
    enqueue(person) {
        this.queue.push(person);
    }

    // Método para remover una persona de la cola (del frente)
    dequeue() {
        return this.queue.shift();
    }

    // Método para ver la persona que está al frente de la cola sin removerla
    front() {
        return this.queue[0];
    }

    // Método para verificar si la cola está vacía
    isEmpty() {
        return this.queue.length === 0;
    }

    // Método para imprimir toda la cola
    printQueue() {
        this.queue.forEach((person, index) => {
            console.log(`Persona ${index + 1}:`);
            console.log(`Nombre: ${person.name}`);
            console.log(`Hora de llegada: ${person.arrivedTime}`);
            console.log('-------------------------');
        });
    }
}

// Crear la cola de personas en el ATM
const atmQueue = new Queue();

// Llenar la cola con algunas personas
atmQueue.enqueue(new Person("Carlos", "08:00 AM"));
atmQueue.enqueue(new Person("María", "08:05 AM"));
atmQueue.enqueue(new Person("Juan", "08:10 AM"));
atmQueue.enqueue(new Person("Ana", "08:15 AM"));

atmQueue.printQueue();
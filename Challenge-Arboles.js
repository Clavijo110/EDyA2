class Person {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.children = []; // Lista de hijos
    }

    // Método para añadir un hijo
    addChild(child) {
        this.children.push(child);
    }
}

// Primera generación
const grandparent = new Person("Juan Pérez", "1940-05-12");

// Segunda generación
const parent = new Person("Carlos Pérez", "1970-07-23");
grandparent.addChild(parent);

// Tercera generación
const child1 = new Person("Luis Pérez", "1995-03-18");
const child2 = new Person("Ana Pérez", "1998-11-05");
parent.addChild(child1);
parent.addChild(child2);

function preOrder(person) {
    if (person === null) return;

    console.log(`Nombre: ${person.fullName}, Fecha de nacimiento: ${person.birthdate}`);
    person.children.forEach(child => preOrder(child));
}

function postOrder(person) {
    if (person === null) return;

    person.children.forEach(child => postOrder(child));
    console.log(`Nombre: ${person.fullName}, Fecha de nacimiento: ${person.birthdate}`);
}

function inOrder(person) {
    if (person === null) return;

    const mid = Math.floor(person.children.length / 2);
    for (let i = 0; i < mid; i++) {
        inOrder(person.children[i]);
    }
    
    console.log(`Nombre: ${person.fullName}, Fecha de nacimiento: ${person.birthdate}`);
    
    for (let i = mid; i < person.children.length; i++) {
        inOrder(person.children[i]);
    }
}

console.log("Preorden:");
preOrder(grandparent);
console.log("-------------------------");

console.log("Postorden:");
postOrder(grandparent);
console.log("-------------------------");

console.log("Inorden:");
inOrder(grandparent);
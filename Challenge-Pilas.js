class Book {
    constructor(name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class BookStack {
    constructor() {
        this.stack = [];
    }

    // Método para agregar un libro a la pila
    push(book) {
        this.stack.push(book);
    }

    // Método para remover un libro de la pila
    pop() {
        return this.stack.pop();
    }

    // Método para ver el último libro de la pila sin removerlo
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // Método para verificar si la pila está vacía
    isEmpty() {
        return this.stack.length === 0;
    }

    // Método para imprimir la pila completa
    printStack() {
        this.stack.forEach((book, index) => {
            console.log(`Libro ${index + 1}:`);
            console.log(`Nombre: ${book.name}`);
            console.log(`ISBN: ${book.isbn}`);
            console.log(`Autor: ${book.author}`);
            console.log(`Editorial: ${book.editorial}`);
            console.log('-------------------------');
        });
    }
}

// Crear la pila de libros
const bookStack = new BookStack();

// Llenar la pila con algunos libros
bookStack.push(new Book("El Principito", "978-3-16-148410-0", "Antoine de Saint-Exupéry", "Reynal & Hitchcock"));
bookStack.push(new Book("1984", "978-0-452-28423-4", "George Orwell", "Secker & Warburg"));
bookStack.push(new Book("Cien Años de Soledad", "978-84-376-0494-7", "Gabriel García Márquez", "Editorial Sudamericana"));
bookStack.push(new Book("Don Quijote de la Mancha", "978-84-670-4200-5", "Miguel de Cervantes", "Francisco de Robles"));

bookStack.printStack();
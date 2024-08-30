class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city; // Referencia a la ciudad en la que vive
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.residents = []; // Lista de personas que viven en esta ciudad
    }

    // Método para añadir un residente a la ciudad
    addResident(person) {
        this.residents.push(person);
    }
}

// Crear ciudades
const city1 = new City("New York");
const city2 = new City("Los Angeles");
const city3 = new City("Chicago");

// Crear personas y asignarlas a una ciudad
const person1 = new Person("Alice", 30, city1);
const person2 = new Person("Bob", 25, city2);
const person3 = new Person("Charlie", 28, city1);
const person4 = new Person("David", 22, city3);

// Añadir las personas como residentes a las ciudades correspondientes
city1.addResident(person1);
city1.addResident(person3);
city2.addResident(person2);
city3.addResident(person4);

function printResidents(city) {
    console.log(`Personas que viven en ${city.name}:`);
    city.residents.forEach(person => {
        console.log(`Nombre: ${person.name}, Edad: ${person.age}`);
    });
}

// Ejemplo: Imprimir los residentes de "New York"
printResidents(city1);

// Ejemplo: Imprimir los residentes de "Los Angeles"
printResidents(city2);

// Ejemplo: Imprimir los residentes de "Chicago"
printResidents(city3);
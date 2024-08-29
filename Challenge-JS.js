//Sintaxis:
    //Arrow Function:
    //const functionName = (parameters) => { /* code */ };

    //Regular Function:
    //function functionName(parameters) {
        /* code */
    //}

//Contexto de "this":
    //Arrow Function: No tiene su propio "this". Hereda el "this" del contexto donde se define, lo cual es útil en situaciones como el uso de funciones dentro de métodos de objetos.
    //Regular Function: Tiene su propio "this", que se refiere al objeto desde el cual se invocó la función.

//"arguments" Objeto:
    //Arrow Function: No tiene un objeto "arguments". Si necesitas acceder a los argumentos, deberás usar el parámetro rest "(...args)".
    //Regular Function: Tiene acceso al objeto "arguments", que es un array-like de todos los argumentos pasados a la función.

//Uso como Constructor:
    //Arrow Function: No puede ser usada como constructor. Intentar usar "new" con una arrow function lanzará un error.
    //Regular Function: Puede ser usada como constructor para crear nuevas instancias de un objeto.

//Nombre de la Función:
    //Arrow Function: No tiene nombre propio a menos que esté asignada a una variable.
    //Regular Function: Tiene un nombre propio que puede ser usado para referencia dentro de la función o para funciones recursivas.

//EJ:
    //Regular Function:
    function checkEvenOdd(number) {
        if (number % 2 === 0) {
            console.log(number + " is even");
        } else {
            console.log(number + " is odd");
        }
    }
    checkEvenOdd(5); // Output: 5 is odd
    checkEvenOdd(8); // Output: 8 is even

    //Arrow Function:
    const checkEvenOddArrow = (number) => {
        if (number % 2 === 0) {
            console.log(number + " is even");
        } else {
            console.log(number + " is odd");
        }
    };    
    checkEvenOddArrow(5); // Output: 5 is odd
    checkEvenOddArrow(8); // Output: 8 is even    
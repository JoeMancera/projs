console.log("Hello TypeScript");

function add(a:number, b: number) {
    return a + b;
}

const sum = add(2,3);

/** Typos de datos básicos */

// Boolen
let muted: boolean = true;
muted = false;
// muted = "Apagado" // da error por el tipado

// Numbers
let numerador: number = 42;
let denominador: number = 6
let resultado = numerador/denominador;

// Strings
let nombre: string = "Richard";
let saludo: string = `Me llamo ${nombre}`;

// Arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push(900);
people.push("900");

// podemos agregar varios tipos de datos a un array así
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(900);

// Enum
enum Colors{
    Rojo = "Rojo", // 0
    Verde = "Verde", // 1
    Azul = "Azul", // 2
    Amarillo = "Amarillo" // 3
}

let colorFavorito: Colors = Colors.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
// podemos asignar una variable dinámica de tipado
let comodin: any = "Joker";
comodin = { type:'Wildcard' };

// Object
let someObject: object = { type:'Wildcard' };
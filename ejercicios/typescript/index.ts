console.log("Hello TypeScript");

function add(a:number, b: number) {
    return a + b;
}

const sum = add(2,3);

//////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////

// Funciones
// Podemos declara los parámeo tros de entrada la igual de el de salida o el de retorno
function add2(a:number, b: number): number {
    return a + b;
}

// VSCode nos ayuda con el typo de dato que se nececita y lo que se retorna
const sum2 = add2(4, 3);

// le decimos que la funcion retorna una funcion que toma el numero y regresa un numero
// A colocar un arrow func el entiende que debe devolver una funcion
function createAdder(a:number): (numero) => number {
    return function (b:number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// Si queremos un parámetro que sea opcional, colocamos el simbolo '?' antes de 
// especificar el tipo de dato
// function fullName(firstName:string, lastName?:string): string{

// Para tener un dato por defecto podemos hacer una asignación después del tipado
function fullName(firstName:string, lastName:string = 'Mille'): string{
    return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');
console.log(richard);

///////////////////////////////////////////////////////////////////////////////////

// Interfaces
// Nos permiten def la forma que tiene un objeto, nos permite evitar ellores y ayuda en completado

interface Rectangulo{
    ancho: number;
    alto: number;
    color?: Color   // Opcional
}

enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
}

let rect:Rectangulo ={
    ancho:4,
    alto:6,
    color: Color.Rojo
}

function area(r:Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

// [object Object]
console.log(rect.toString());

rect.toString = function(){
    return this.color ? `Un rectangulo de color ${this.color}`: `Un rectangulo sin color`;
}
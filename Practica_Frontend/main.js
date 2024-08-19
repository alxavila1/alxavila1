//statements

let x = 10;

let temperatura = 25;

if (temperatura > 30) {
    console.log("Es un dia muy caluroso!.");
} else if(temperatura >= 20){
    console.log("El clima es muy placentero.");
} else { 
    console.log("Es un dia muy frio!.");
}
/*console.log es una funcion que permite mostrar texto en la consola del navegador, si la funcion esta dentro de las {} quiere decir que esta dentro del alcance para ejecutar la funcion.*/

//Expresiones: las expresiones producen un valor:
const resultadoCalculo = 5 + 3 * 2;

let primerNombre = "Alejandro";
let segundoNombre = "Avila";
let nombreApellido = primerNombre + " " +segundoNombre;

/*ejemplo Variables*/
function ejemploVar() {
    if (true){
        var x = 10;
    }

    console.log(x); // salida: 10
}

ejemploVar();
console.log(x); // Error; x no esta definido
/* si agrego console log fuera de la funcion me va a dar error porque ya no estaria fuera del alcance de la funcion */

//reasignacion de var, si reasigno una variable de ambas formas con o sin el var, ella misma cambiaria si ningun problema y en la consola estaria el numero modificado
var y = 5; 
y = 7;
console.log(y); // Salida:7

//redeclaracion de var;
var z = 2;
var z = 4;
console.log(z); // salida 4

// si redeclaro el valor de la misma variable no hay problema tampoco porque me tomaria el utimo valor asignado

/* Ejemplo Let*/
function ejemploLet(){ //bloque de la funcion 
    if(true){ //bloque de la condicion
        let x = 10;
    }
    console.log(x); // Error: x no esta definido, las variables definidas bajo la etiqueta "let" solo tiene un alcance dentro del bloque de codigo donde fue previamente declarado
    // en JavaScript los bloques de codigo estan definidos por mediode las llaves {}
}
/** Aclaratoria de de var y let: tanto var como let se utilizan para declarar variables, pero tienen diferencias importantes en cuanto a su comportamiento y alcance.*/
/** var: Tiene un ámbito de función o global. Esto significa que si declaras una variable con var dentro de una función, estará disponible en toda la función. Si la declaras fuera de cualquier función, estará disponible globalmente.
    var: Permite re-declarar la misma variable dentro del mismo ámbito sin errores.
    var: Las variables declaradas con var se “elevan” (hoisting) al inicio de su ámbito, pero su inicialización no se eleva. Esto significa que puedes usar la variable antes de su declaración, pero su valor será undefined hasta que se asigne.*/

/** let: Tiene un ámbito de bloque. Esto significa que una variable declarada con let solo estará disponible dentro del bloque (por ejemplo, dentro de un if, for, etc.) en el que se declara.
    let: No permite re-declarar la misma variable dentro del mismo ámbito. Si intentas hacerlo, obtendrás un error.
    let: Las variables declaradas con let también se elevan, pero no se pueden usar antes de su declaración en el código. Esto se conoce como “zona muerta temporal” (temporal dead zone).
 */

ejemploLet();

// se puede reasignar valores
let y = 5;
y = 7;
console.log(y); // salida:7

// no es posible re declarar uan variable con el mismo nombre
let z = 2;
let z = 4; // Error identificacion "z" ya ha sido declarado 

/* Ejemplo usando const  */
function ejemploConst(){
    if (true) {
        const x = 10; // "const" nos permite declarar constantes
    }
    console.log(x); // Error: x no esta definido
}

ejemploConst();

/** la palabra clave const se utiliza para declarar constantes, es decir, variables cuyo valor no puede cambiar una vez que han sido inicializadas. */

/** Al igual que let, las variables declaradas con const tienen un ámbito de bloque. Esto significa que solo están disponibles dentro del bloque en el que se declaran (por ejemplo, dentro de un if, for, etc.). */

if (true) {
    const x = 5;
    console.log(x); // 5
}
console.log(x); // Error: x is not defined

// No se puede reasignar valores
const y = 5; 
y = 7; // error: asignacion a variable constante

/** A diferencia de var y let, una variable declarada con "const" debe ser inicializada en el momento de su declaración. No puedes declarar una constante sin asignarle un valor.*/

const y; // Error: Missing initializer in const declaration
const z = 10; // Correcto

/**Una vez que una constante ha sido asignada, no puedes reasignarla a otro valor. Sin embargo, esto no significa que el valor en sí sea inmutable. Si la constante es un objeto o un array, sus propiedades o elementos pueden ser modificados.*/

const z = 2;
const z = 4; //Error: asigancion a variable constante

//-------------------

const a = 10;
a = 20; // Error: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // Esto es permitido
console.log(obj.name); // "Bob"

/**Al igual que let, las constantes declaradas con const son elevadas (hoisted) al inicio de su bloque, pero no pueden ser utilizadas antes de su declaración debido a la “zona muerta temporal” (temporal dead zone).*/

console.log(b); // Error: Cannot access 'b' before initialization
const b = 5;

/**En resumen, const es útil para declarar variables que no deben cambiar su valor a lo largo del tiempo, proporcionando un código más seguro y predecible */

//-------------------------------------------------------------------------------------------------------

// JavaScript es un lenguaje dinamico, osea que una variable asiganda puede ser reasignada con otro valor de diferente tipo

let miVariable = 10;
console.log(typeof miVariable); // Salida: number

miVariable = 'Hola';
console.log(typeof miVariable); // salida; string

// Para que esta funcion se ejecute de manera correcta se tiene que hacer una formula matematica, haciendo que las variables en vez de usar numeros, sea de tipo string (osea, usando texto), lo que se le llamaria una concatenacion.

let nombre = 'Alejandro';
let apellido = 'Avila';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto); //Salida: Alejandro Avila

// En este caso se usa la variable "numeroString" como si fuera un texto, aunque el contenido es un numero.
// Haciendo esto el resultado sea 510, para que haya un espacio entre el 5 y el 10 se debe de usar las comillas simples '' en medio de la suma, de esta forma: let resultado = numero +' ' + numeroString;

let numero = 5;
let numeroString = '10'; //forma de cadena de caracteres, osea que no es un numero.
let resultado = numero + numeroString;
console.log(resultado); // Salida: 510


//Modo estricto

/**
 * El modo estrico de javascript es una forma de habilitar un conjunto de mas estricto de reglas para escribir codigo JavaScript.
 * Ayuda a detectar errores comunes y prevenirlos.
 */

"use strict";
var mensaje = "¡Hola! Estoy en modo estricto.";

'use strict';

// Previene asignar valores a variables no declaradas anteriormente.

variableSinDeclaracion = 17;

//Previene la reasignacion de valores globales.

NaN = 10;

//previene parametros duplicados en funciones.

function suma(x, x){
    return x + x;
}

//No permite eliminar variables, funciones o argumentos de funciones
var x = 10;
delete x;

/**Datos Primitivos */

// se les conocen como primitivos por que no pueden ser modificados

   
// Numeros
let valorNumeral = 1000;
valorNumeral = 1001;

// Strings
const valorString = 'Hola JavaScript';

//Booleanos
const valorBooleano = true;

//Symbol

const valorSymbol = Symbol();

// Indefinidos

const valorIndefinido = undefined;

//Nulos

const valorNulo = null;

// Tipos no primitivos:

//objetos: son contenedores que pueden tener varios valores almacenados dentro de la misma variable, o constante

const objeto ={ nombre: 'Natalia', apellido: Correa};

// Arreglos: son objetos pero diferentes naturaleza, con ellos se pueden crear listas de valores con tipos tanto primitivos como no primitivos.

const arr = [1, 2, 3, 4, 5];

/* Tipo Numbre Bigint.js */

// Valor numeral int:

const numeroInt = 42.6; // este es un valor numeral regular
console.log(numeroInt); // Salida: 42

//valor numeral bigInt:

/*BigInt es un tipo de dato numérico introducido en JavaScript para representar números enteros más grandes que el valor máximo que puede manejar el tipo Number (que es 2^53 – 1). En otras palabras, BigInt permite trabajar con números enteros arbitrariamente grandes de forma precisa*/

// Generalmente se utiliza cuando se necesita hacer una operacion matematica dentro del codigo de manera mas precisa 

let numeroBigInt = 1234567890n;
// Salida: 1234567890123456789012345678901234567890n
console.log(numeroBigInt);

/**Tpo String o cadena de caracteres */
//se utiliza para representar textos en javascript

const stringEjemplo1 = 'Hola mundo!';
console.log(stringEjemplo1); // Salida: Hello world!

const stringEjemplo2 = "Este es un valor string.";
console.log (stringEjemplo2); // Salida: Este es un valor string.

let stringConComillasSimples = 'El dijo, "Buenos dias!"';
console.log(stringConComillasSimples); // Salida: El dijo, "Buenos dias!"


let stringConComillasDobles = "El dijo, 'Buenos dias!'";
console.log(stringConComillasDobles); // Salida: El dijo, 'Buenos dias!'

//Estas son formas de usar las comillas, tanto las simples como las dobles, todo dependera de la necesidad de la tarea, en caso de que necesitemos usar las comillas simples como parte del texto entonces las que conformaran el string seran las comillas dobles.

/** Templates strings */

let nombre = 'Mario';
let edad = 30;

// para definir un string se utilizan las comillas invertidas ``

let saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log (saludo);
// Salida: Hola, mi nombre es Mario y tengo 30.

// Multi linea

let mensaje = `
Los template strings
con varios cambios de linea.
Esto nos facilita darle formato
a un texto.`;
console.log(mensaje);
/**
 Salida:Los template strings
con varios cambios de linea.
Esto nos facilita darle formato
a un texto.
 */

// Expresiones dentro de un template string:
const a = 10;
const b = 20;

let suma = `La suma de ${a} y ${b} es ${a + b}.`;
// Salida: La suma de 10 y 20 es 30.

/** Booleans */

let tienePermiso = true;
let estaLogueado = false;

let tieneAcceso = tienePermiso && estaLogueado;
console.log(tieneAcceso); // Salida: false

/**Symbols */

/** Los Symbols en JavaScript son un tipo de dato primitivo introducido en ECMAScript 6 (ES6). Son únicos y se utilizan principalmente para crear identificadores únicos para propiedades de objetos. En resumen, los Symbols son útiles para crear identificadores únicos y propiedades “ocultas” en objetos, lo que ayuda a evitar conflictos de nombres y a encapsular datos de manera segura 
 

 * Puedes crear un Symbol utilizando la función Symbol(). Cada Symbol es único, incluso si tienen la misma descripción.
*/

const miSimbolo = Symbol();
console.log(typeof miSimbolo); // Salida; symbol

// Con descripcion, Los Symbols se pueden usar como claves de propiedades en objetos. Esto es útil para evitar conflictos de nombres, ya que cada Symbol es único.
const miSimboloConDescripcion = Symbol('algun nombre o descripción.');
console.log(miSimboloConDescripcion.toString());
// Salida: Symbol(algun nombre o descripción)

//Uso como llave unica:
const llaveUnica = symbol('llave unica');

const unObjeto = {
[llaveUnica]: 'Valor asociado a la llave unica'
};

console.log(unObjeto[llaveUnica]); //Salida: valor asociado a la llave unica.

// Tipos Null o Undefined

/**
 Null: Representa la ausencia intencional de valor. Es decir, cuando deseas expresamente indicar que una variable no tiene un valor válido o que un objeto no existe.

 Cuando inicializas una variable que aún no tiene un valor válido

 let resultado = null; // Indica que aún no hay un resultado válido
 
 undefined: Indica que una variable no ha sido inicializada o que no tiene un valor asignado.

 let nombre; // 'nombre' está indefinido

 null se usa para indicar intencionalmente la falta de valor, mientras que undefined se refiere a la falta de asignación o inicialización. Ambos son importantes en diferentes contextos y deben usarse con precisión.
 */

// Asignacion explicita de null a una variable
let miVariable = null;
console.log(miVariable); // Salida: null

function retornoNull(){
    return null;
}

let resultado = retornoNull();
console.log(resultado); // Salida: null

// variables sin un valor asignado:

let miVariable2;
console.log(miVariable2); // Salida: Undefined

function muestraEnConsola(parametro){
    console.log(parametro);
}

muestraEnConsola(); // Salida: Undefined

// Objetos

/*  Los objetos en JavaScript son fundamentales y te permiten representar y organizar datos de manera estructurada.


-Un objeto es una entidad independiente que puede contener propiedades y métodos.
-Las propiedades son pares clave-valor que definen las características del objeto.
-Los métodos son funciones asociadas al objeto.
*/

const persona = {
    nombre: "Carlos",
    apellido: "Monge",
    edad: 30,
    esAutorizado: true
};

console.log(persona.nombre); // Salida: Carlos

console.log = persona.nombre + ' ' + persona.apellido;
persona.edad = 40;

// Objetos anidados: son un grupo de objetos que puedes separarlos por niveles 

const persona2 = {
    nombre: "Carlos",
    apellido: "Monge",
    edad: 30, 
    esAutorizado: true,
    direccion: { 
        calle: 14,
        avenida: 6,
        codigoPostal: 'D05TX45'
    }
};
 // Preferiblemente no anidar muchos datos por que harian el codigo muy complejo

 console.log(persona2.direccion.calle); // Salida:14 - para crear la "ruta" la informacion que queiro sacar se tiene que usar puntos.

//  Arreglos/ Arrays

/**  Los arrays en JavaScript son estructuras de datos que nos permiten almacenar y organizar múltiples valores en una sola variable. También se les conoce como listas o vectores.
     Los arrays son fundamentales en la programación y se utilizan ampliamente para agrupar elementos relacionados.

     Cada elemento en un array tiene una posición numérica llamada índice.

     Los índices comienzan desde 0 (el primer elemento) y aumentan en orden.
 */

const miArray = [elemento1, elemento2, elemento3];

const numeros = [1, 2, 3, 4, 5];
console.log(numeros [0]); //Salida: 1
console.log(numeros [5]); //Salida: undefined

const frutas = ["manzana", "banano", "piña", "naranja"];
console.log(frutas[3]); // Salida: naranja
frutas[2] = 'pera'
console.log (frutas[2]); //Salida: pera

let arregloMixto = [1, "manzana", true, null, { nombre: "Sara"}];

/** Destructuracion de arreglos: */

const numeros = [1, 2, 3, 4, 5];

const [primero, segundo, , cuarto] = numeros;

console.log(primero); //Salida: 1
console.log(segundo); //Salida: 2
console.log(cuarto); //Salida: 4

//destructuracion de objetos:

const usuario = { nombre: "Andres", edad: 30, esAdmin: true};

const { nombre, edad, esAdmin} = usuario;

console.log(nombre); //Salida: Andres
console.log(edad); //Salida: 30
console.log(esAdmin); //Salida: true

// Clase Math

let numero = 16;
let raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada); // Salida: 4

//generar numeros aleatorios:
//Math.random numero aleatorio entre 0 y 1
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// redondear numeros:
let numeroDecimal = 3.7
let numeroRedondeado = Math.round(numeroDecimal);
console.log(numeroRedondeado); //Salida 4

//utilidades de objetos

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Heredia"
}


//object.keys(): solo retorna las keys de los objetos 

let llaves = Object.keys(persona);
console.log(llaves); // Salida ['nombre', 'edad', 'ciudad']

// Object.values(): solo retorna el valor de las keys
const valores = Object.values(persona);
console.log(valores); // Salida: [ 'Juan', 30, 'Heredia' ]

// Object.entries(): retorna tanto las keys como los valores
const entradas = Object.entries(persona);
console.log(entradas);
// Salida: [ [ 'nombre', 'Juan' ], [ 'edad', 30 ], [ 'ciudad', 'Heredia' ] ]

// Object.assign(): se usa para fusionar objetos
const destino = { a: 1, b: 2 };
const origen = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, destino, origen);

console.log(objetoFusionado); // Salida: { a: 1, b: 3, c: 4 }

// objetos tipo date

// Obtener la fecha y hora actual:
const fechaHoraActual = new Date();
console.log(fechaHoraActual);

// Objener información sobre la fecha:
const ahora = new Date();
const anno = ahora.getFullYear();
const mes = ahora.getMonth();
const dia = ahora.getDate();
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

console.log(`Hoy es ${anno}-${mes + 1}-${dia} ${horas}:${minutos}:${segundos}`);

// Como crear un objeto con una fecha y hora específica:
// Año, mes, día, horas, minutos, segundos
const fechaEspecifica = new Date(2023, 8, 30, 12, 30, 0);
console.log(fechaEspecifica);

// Opeadores de asignación

let x = 5; // Asigna el valor de 5 a la variable x

// asignación de suma
let y = 10;
y += 3; // Equivalente a: y = y + 3; 
console.log(y); // y ahora es 13

// asignación de resta
let z = 15;
z -= 7; // Equivalente a: z = z - 7;
console.log(z); // z ahora es 8

// asignación de multiplicación
let w = 20;
w *= 2; // Equivalente a: w = w * 2;
console.log(w); // w ahora es 40

// asignación de división
let a = 50;
a /= 5; // Equivalente a: a = a / 5;
console.log(a); // a ahora es 10

// asignación de módulo
let b = 17;
b %= 5; // Equivalente a: b = b % 5;
console.log(b); // b ahora es 2

// asignación de exponencial
let c = 2;
c **= 3; // Equivalente a: c = c ** 3;
console.log(c); // c ahora es 8

// Operadores aritméticos:

// Suma:
let suma = 5 + 3; // suma ahora es 8

// Resta:
let diferencia = 10 - 4; // diferencia ahora es 6

// Multiplicación:
let producto = 7 * 2; // producto ahora es 14

// División:
let cociente = 20 / 4; // cociente ahora es 5

// Módulo:
let residuo = 17 % 5; // residuo es 2

// Exponencial:
let potencia = 2 ** 3; // potencia ahora es 8

// Incremento:
let x = 5;
x++; // x ahora es 6

// Decremento:
let y = 8;
y--; // y ahora es 7

// Operadores de comparación:

let x = 5;
let y = '5';

// Operador de igualdad:
console.log(x == y); // Salida: true (después de la coerción de tipos)

// Operador de igualdad estricta:
console.log(x === y); // Salida: false

// Operador de no igualdad:
console.log(x != y); // Salida: false (después de la coerción de tipos)

// Operador de no igualdad estricta:
console.log(x !== y); // Salida: true

let a = 10;
let b = 5;
let c = 5;

// Operador "menor que":
console.log(a < b); // Salida: false

// Operador "menor o igual que":
console.log(c <= b); // Salida: true

// Operador "mayor que":
console.log(a > b); // Salida: true

// Operador "mayor o igual que":
console.log(a >= b); // Salida: true

// Operadores que se pueden usar con strings:

// concatenación:
let nombre = "Maria";
let apellido = "Martinez";
let nombreCompleto = nombre + " " + apellido;
console.log(fullName); // Salida: "Maria Martinez"

// concatenación y asignación:
let saludo = "Hola, ";
let usuario = "Alice";
saludo += usuario;
console.log(saludo); // Salida: "Hola, Alice"

// Operadores lógicos:

const x = true;
const y = false;

// Expresiones lógicas:
// AND: doble ampersand
let resultado = x && y && true; // resultado es false

// OR: doble barra vertical
let resultado2 = x || y || false; // resultado2 es true

// NOT: signo de exclamación
let resultado3 = !x; // resultado3 es false
let resultado4 = !y; // resultado3 es true

// Podemos componer expresiones más largas y complejas:

const a = 5;
const b = 6;
const c = 7;

const resultadoExp1 = (a > c) && (b < c);
console.log(resultadoExp1);
// (a > c): false
// (b < c): true
// resultadoExp1 = false

const resultadoExp2 = (a > c) || (b < c);
console.log(resultadoExp2);
// (a > c): false
// (b < c): true
// resultadoExp2 = true

const resultadoExp3 = (a <= b) && ((a > c) || (b < c));
console.log(resultadoExp3);
// (a <= b): true
// (a > c): false
// (b < c): true
// ((a > c) || (b < c)): true
// resultadoExp3 = true

const resultadoExp4 = !(a <= b) && ((a > c) || (b < c));
console.log(resultadoExp4);
// !(a <= b): false
// (a > c): false
// (b < c): true
// ((a > c) || (b < c)): true
// resultadoExp3 = false

// typeof: devuelve el tipo de dato de una variable o una constante:
typeof 42; // "number"
typeof "Buenos días"; // "string"
typeof true; // "boolean"

// instanceof: determina si un objeto es una instancia de una clase
let ahora = new Date();
console.log(ahora instanceof Date); // true

// spread = desparramar, dispersar
// Copiar un arreglo o un objeto:

let arregloOriginal = [1, 2, 3];
let copiaArreglo = [...arregloOriginal];
console.log(copiaArreglo);

let objetoOriginal = { a: 1, b: 2 };
let copiaObjeto = { ...objetoOriginal };
console.log(copiaObjeto);


// Unir arreglos
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let unidos = [...array1, ...array2];
console.log(unidos);

// Pasar argumentos a una función:
function suma(a, b, c) {
  return a + b + c;
}

let numeros = [1, 2, 3];
let resultado = suma(...numeros);
console.log(resultado);

// Convirtiendo un string en un arreglo de caracteres:
let str = 'Hola!, ';
let caracteres = [...str];
console.log(caracteres);

//unidad 5

// if:
let temperatura = 25;
if (temperatura > 30) {
  console.log("Hace calor hoy!");
}

// if-else:
let horaActual = 18;
if (horaActual < 12) {
  console.log("Buenos días!");
} else {
  console.log("Buenas tardes!");
}

// if-else if-else:
let nota = 75;
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// Anidados:
let estaLloviendo = true;
let haceFrio = false;

if (estaLloviendo) {
  if (haceFrio) {
    console.log("Traer un paraguas y un abrigo.");
  } else {
    console.log("Traer un paraguas.");
  }
} else {
  if (haceFrio) {
    console.log("Traer un abrigo.");
  } else {
    console.log("Disfruta tu día!");
  }
}

// Declaraciones switch:
//Ejemplo 1:
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
  case 1:
    nombreDia = "Domingo";
    break;
  case 2:
    nombreDia = "Lunes";
    break;
  case 3:
    nombreDia = "Martes";
    break;
  case 4:
    nombreDia = "Miércoles";
    break;
  case 5:
    nombreDia = "Jueves";
    break;
  case 6:
    nombreDia = "Viernes";
    break;
  case 7:
    nombreDia = "Sábado";
    break;
}

console.log(`Hoy es ${nombreDia}.`);

//Ejemplo 2:
let fruta = "manzana";
let color;

switch (fruta) {
  case "manzana":
  case "cereza":
    color = "rojo";
    break;
  case "banana":
    color = "amarillo";
    break;
  case "uva":
    color = "morado";
    break;
  default:
    color = "desconocido";
}

console.log(`El color de la ${fruta} es ${color}.`);

//Bucles

// Ejemplo 1: Iteración simple
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
  }
  
  // Ejemplo 2: Recorriendo un arreglo:
  let numeros = [10, 20, 30, 40, 50];
  
  for (let i = 0; i < numeros.length; i++) {
    console.log(`El elemento en el índice ${i} es: ${numeros[i]}`);
  }
  
  // Ejemplo 3: For anidados:
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
  
    // Bucles for in:

  // Recorriendo propiedades de un objeto:
let persona = {
    nombre: "Elena",
    apellido: "Salas",
    edad: 30
  };
  
  for (let llave in persona) {
    console.log(`${llave}: ${persona[llave]}`);
  }
  
  // Recorriendo arreglos:
  let colores = ["rojo", "verde", "azul"];
  
  for (let indice in colores) {
    console.log(`Indice ${indice}: ${colores[indice]}`);
  }

  // Bucle for of

  // Iteración sobre arreglo:
let colores = ["rojo", "verde", "azul"];

for (let color of colores) {
  console.log(color);
}

// Iteración sobre los caracteres de un string:
let saludo = "Buenos días";

for (let caracter of saludo) {
  console.log(`El carácter actual es '${caracter}'`);
}

//Bucles while

// Ejemplo 1: bucle simple
let cuenta = 1;

while (cuenta <= 5) {
  console.log(`Cuenta: ${cuenta}`);
  cuenta++;
}

// Ejemplo 2: Usando una condición:
let numero = 10;

while (numero > 0) {
  console.log(`El número es: ${numero}`);
  numero -= 2;
}

// Ejemplo 3: Generando número aleatorio:
let numeroAleatorio;

while (numeroAleatorio !== 5) {
  numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(`El número aleatorio es: ${numeroAleatorio}`);
}

//bucles do while

// do..while
let numeroAleatorio;

do {
  numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(`El número aleatorio en do..while es: ${numeroAleatorio}`);
} while (numeroAleatorio !== 5);

// Ejemplo while vs do..while
let cuenta = 0;

while (cuenta < 15) {
  console.log(`Cuenta actual en while: ${cuenta}`);
  cuenta++;
}

console.log('****************');

//cuenta = 0;

do {
  console.log(`Cuenta actual en do..while: ${cuenta}`);
  cuenta++;
} while (cuenta < 15);

//Funciones:

// Ejemplo de una función:

function sumarNumeros(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(sumarNumeros(5, 3)); // Salida: 8

// Llamado de una función dentro de un bucle for:

function raizCuadrada(numero) {
  return numero * numero;
}

for (let i = 1; i <= 5; i++) {
  let resultado = raizCuadrada(i);
  console.log(`La raíz cuadrada de ${i} es ${resultado}`);
}

// Llamar una función dentro de otra función:

function multiplicarNumeros(num1, num2) {
  return num1 * num2;
}

function ejecutarOperaciones(num1, num2) {
  let suma = sumarNumeros(num1, num2);
  let producto = multiplicarNumeros(num1, num2);

  console.log(`Suma: ${suma}`);
  console.log(`Producto: ${producto}`);
}

ejecutarOperaciones(5, 3);

// Parametros:

// Enviar parámetros por valor:
// Los datos primitivos siempre se pasan por valor.

function incrementar(numero) {
  numero++;
  return numero;
}

let num = 5;
let resultado = incrementar(num);

console.log(num);    // Salida: 5
console.log(resultado); // Salida: 6

// Paso de parámetros por referencia:
// Los datos no primitivos siempre se pasan por referencia.

function agregarArreglo(arr, valor) {
  arr.push(valor);
  return arr;
}

let miArreglo = [1, 2, 3];
let miArregloResultado = agregarArreglo(miArreglo, 4);

console.log(miArreglo); // Salida: [1, 2, 3, 4]
console.log(miArregloResultado); // Salida: [1, 2, 3, 4]

// Declaraciones funciones:

/*
Las declaraciones de funciones utilizan
la palabra clave function
*/
function saludo(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludo("Eli");

//expresiones de funciones

// Funciones declaradas como una expresión:
const saludo = function (nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludo("Eli");

// Permite pasar la función como parámetro:

function generarSaludo(saludoFuncion) {
  const nombres = ['Eleanor', 'María', 'Gaby'];
  for (const nombre of nombres) {
    saludoFuncion(nombre);
  }
}

generarSaludo(saludo);

//funciones flechas

// Función flecha con valor de retorno implícito:
let sumar = (x, y) => x + y;

let resultado = sumar(5, 3);
console.log(resultado); // Salida: 8

// Función flecha sin parámetros:
let decirHola = () => {
  console.log("Hola!");
};

decirHola(); // Salida: Hola!

// Función flecha con un parámetro:
let raizCuadrada = x => x * x;

let resultado2 = raizCuadrada(9);
console.log(resultado2); // Salida: 81

// Función flecha con objeto literal:
let crearPersona = (nombre, edad) => ({ nombre: nombre, edad: edad });

let persona = crearPersona("Eleanor", 16);
console.log(persona); // Salida: { nombre: 'Eleanor', edad: 16 }

// this

// "this" hace referencia al contexto donde se invoca:

// Ejemplo 1: hace referencia al contexto global.
// En el navegador hace referencia al objeto window.
console.log(this);

//Ejemplo 2: En un objeto, hace referencia al objeto:
const miObjeto = {
  mensaje: "Mensaje del Objeto",
  funcionRegular: function () {
    console.log(this.mensaje); // Salida: Mensaje del Objeto
  },
};

miObjeto.funcionRegular(); // Salida: Mensaje del Objeto

//Ejemplo 3: En una función, hace referencia al contexto global.
function probarThis() {
  console.log(this);
  const probarThisFlecha = () => {
    // también hace referencia al contexto global.
    console.log(this);
  }
  probarThisFlecha();
}

probarThis();

// Ejemplo 4: diferencia entre función regular y una función flecha:
const unObjeto = {
  mensaje: "Mensaje del Objeto",
  funcionRegular: function () {
    console.log(this.mensaje);
  },
  funcionFlecha: () => {
    console.log(this.mensaje);
  }
};

unObjeto.funcionRegular(); // Salida: Mensaje del Objeto
unObjeto.funcionFlecha();   // Salida: undefined

// Mayusculas y Minusculas

// La clase String contiene varios métodos que utilizamos para
// manipular strings

const textoEnMinuscula = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit`;

const textoEnMayuscula = textoEnMinuscula.toUpperCase();

console.log(textoEnMayuscula);

console.log(textoEnMayuscula.toLowerCase());

// Concatenacion

const string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ";
const string2 = "Maecenas pretium tempus nisi non lacinia";

// Ejemplo 1:
const resultado1 = string1 + string2;
console.log(resultado1);

// Ejemplo 2:
const resultado2 = `${string1}${string2}`;
console.log(resultado2);

// Ejemplo 3:
const resultado3 = string1.concat(string2);
console.log(resultado3);

// Ejemplo 4:
const arr = [string1, string2];
const resultado4 = arr.join();
console.log(resultado4);


// strings Arreglos

const texto = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Maecenas pretium tempus nisi non lacinia`;

const resultado1 = texto.split(' ');
console.log(resultado1);

const resultado2 = texto.split('o');
console.log(resultado2);

// Como reemplazar una palabra:
const textoSplit = texto.split(' ');
textoSplit[3] = 'PALABRA';
console.log(textoSplit.join(' '));

// Extraer texto

const texto = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Maecenas pretium tempus nisi non lacinia`;

// Toma el texto desde el índice 0 al índice 5:
const lorem = texto.substring(0, 5);
console.log(lorem);

// Extrae los 10 primeros caracteres:
const primerasLetras = texto.slice(undefined, 10);
console.log(primerasLetras);

// Toma todo el string, excepto los 10 primeros caracteres:
const ignoraPrimerasLetras = texto.slice(10);
console.log(ignoraPrimerasLetras);

// Toma del carácter 5 al carácter 10:
const ignoraPrimerasLetras2 = texto.slice(5, 10);
console.log(ignoraPrimerasLetras2);

// expresiones regulares

// Verificando si un string contiene un patrón:
const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //primer grupo es el nombre del usuario, segundo grupo es el arroba, tercero el nombre del dominio , luego el punto, luego el com o el net

const email1 = "usuario@example.com";
const email2 = "email.invalido@com";
const email3 = "otro.usuario@sub.domain.co.uk";

console.log(patronEmail.test(email1)); // Salida: true
console.log(patronEmail.test(email2)); // Salida: false
console.log(patronEmail.test(email3)); // Salida: true

// Reemplazando texto:
const poema = `
Quiero vivir la vida aventurera
de los errantes pájaros marinos;
no tener, para ir a otra ribera,
la prosaica visión de los caminos.`;

const palabraAReemplazar = "pájaros";
const reemplazo = "aves";

const regex = new RegExp(palabraAReemplazar, "gi"); // expresion "gi" significa que que la expresion regular tiene que buscar de manera global en el texto 
const resultado = poema.replace(regex, reemplazo);

console.log(resultado);

/**
Salida:
Quiero vivir la vida aventurera
de los errantes aves marinos;
no tener, para ir a otra ribera,
la prosaica visión de los caminos.
 */

// Métodos trim:
const texto = "   Un texto con espacios en blanco   ";

console.log(texto.trim() + '***');
console.log(texto.trimStart() + '***');
console.log(texto.trimEnd() + '***');

// Métodos pad:
const textoNumero = "5";
console.log(textoNumero.padStart(4, "0"));
console.log(textoNumero.padEnd(4, "0"));

// charAt():
const textoPrueba = "Quiero vivir la vida aventurera...";
console.log(textoPrueba.charAt(5));

// Convirtiendo strings a números:
const strNumero = "123";
const numero = parseInt(strNumero);
const numero2 = +strNumero;

console.log(typeof numero); // Salida: number
console.log(typeof numero2); // Salida: number

const strFloat = "3.14";
const numeroDecimal = parseFloat(strFloat);

console.log(numeroDecimal); // Salida: 3.14
console.log(typeof numeroDecimal); // Salida: number

// Convirtiendo números a strings:
const valorNumeral = 789;
const numeroString = valorNumeral.toString();
const numeroString2 = `${valorNumeral}`;

console.log(numeroString); // Salida: "789"
console.log(numeroString2); // Salida: "789"

//unidad 8:

//recorriendo arreglos:

const frutas = ['manzana', 'banana', 'pera'];

frutas.forEach(fruta => { console.log(fruta); });

console.log('\n');

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log('\n');

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]);
}

console.log('\n');

for (const fruta of frutas) {
  console.log(fruta);
}

console.log('\n');

for (const fruta in frutas) {
  console.log(fruta);
}

// Método push:
const frutas = ['manzana', 'banana', 'mango'];
frutas.push('piña');
console.log(frutas); // Salida: ['manzana', 'banana', 'mango', 'piña']

// Método unshift:
const colores = ['rojo', 'verde', 'amarillo'];
colores.unshift('azul');

console.log(colores); // Salida: ['azul', 'rojo', 'verde', 'amarillo']

// Método splice:
const numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 0, 6);

console.log(numeros); // Salida: [1, 2, 6, 3, 4, 5]

// Operador spread:
const arregloOriginal = [1, 2, 3];
const nuevoArreglo = [...arregloOriginal, 4, 5];

console.log(nuevoArreglo); // Salida: [1, 2, 3, 4, 5]

// Método concat:
const autos = ['Nissan', 'Toyota'];
const masAutos = autos.concat('Chevy', 'BMW');

console.log(masAutos); // Salida: [ 'Nissan', 'Toyota', 'Chevy', 'BMW' ]

// Usando la propiedad length:
const letras = ['A', 'B', 'C'];
letras[letras.length] = 'D';

console.log(letras); // Salida: ['A', 'B', 'C', 'D']

//Eliminar arreglos:

// Método pop:
const frutas = ['manzana', 'banana', 'mango'];
const frutaEliminada = frutas.pop();

console.log(frutaEliminada); // Salida: 'mango'
console.log(frutas); // Salida: ['manzana', 'banana']

// Método shift:
const colores = ['rojo', 'verde', 'azul'];
const colorEliminado = colores.shift();

console.log(colorEliminado); // Salida: 'rojo'
console.log(colores); // Salida: ['verde', 'azul']

// Método splice:
const numeros = [1, 2, 3, 4, 5];
const numerosEliminado = numeros.splice(2, 2);

console.log(numerosEliminado); // Salida: [3, 4]
console.log(numeros); // Salida: [1, 2, 5]

// Método slice:
const autos = ['Nissan', 'Toyota', 'Chevy', 'BMW'];
const autosEliminados = autos.slice(1, 3);

console.log(autosEliminados); // Salida: [ 'Toyota', 'Chevy' ]
console.log(autos); // Salida: ['Nissan', 'Toyota', 'Chevy', 'BMW']

// reemplazando un arreglo

// Utilizando el índice:
const autos = ['Nissan', 'Toyota', 'Chevy', 'BMW'];
autos[1] = 'Ford';

console.log(autos); // Salida: ['Nissan', 'Ford', 'Chevy', 'BMW']

// Método splice:
const numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1, 6);

console.log(numeros); // Salida: [1, 2, 6, 4, 5]

// Método fill:
const letras = ['A', 'B', 'C', 'D', 'E', 'H', 'I'];
letras.fill('X', 2, 4);

console.log(letras); // Salida: ['A', 'B', 'X', 'X', 'E', 'H', 'I'] 

// Mutar datos

// Método reverse: invierte el orden de los elementos:
const flores = ['amapola', 'geranio', 'girasol'];
flores.reverse();

console.log(flores); // Salida: ['girasol', 'geranio', 'amapola']

// Método sort: ordena los elementos en el arreglo
/**
 * La función callback debe retornar un valor dependiendo del caso:
 * - Un valor negativo si el primer parámetro es menor que el segundo
 * - Cero si son iguales
 * - Un valor positivo si el primer parámetro es mayor que el segundo
 * Si la función se omite, los elementos se ordenan ascendentemente
 * según el orden de caracteres ASCII.
 */
const numeros = [3, 1, 4, 1, 5, 9, 2, 6];
numeros.sort((a, b) => a - b); // Ordena los elementos en orden ascendente
console.log(numeros); // Salida: [1, 1, 2, 3, 4, 5, 6, 9]

const categorias = ['categoria3', 'categoria1', 'categoria2', 'categoria3', 'categoria2', 'categoria2', 'categoria1'];
categorias.sort((catA, catB) => {
  if (catA === 'categoria3') {
    return 1;
  } else if (catA === 'categoria1') {
    return -1;
  } else if (catA === 'categoria2' && catB === 'categoria3') {
    return -1;
  } else {
    return 1;
  }
});

console.log(categorias); // Salida: ['categoria1', 'categoria1', 'categoria2', 'categoria2', 'categoria2', 'categoria3', 'categoria3']

// Método map:
const numerosAlCuadrado = numeros.map(num => num ** 2);
console.log(numerosAlCuadrado); // Salida: [1,  1,  4,  9, 16, 25, 36, 81]

const personas = [{ nombre: 'eli' }, { nombre: 'pedro' }, { nombre: 'ana' }];
const nombres = personas.map(persona => persona.nombre.toUpperCase());
console.log(nombres); // Salida: [ 'ELI', 'PEDRO', 'ANA' ]

// buscar datos arreglos:

const personas = [
  { nombre: 'Eli' },
  { nombre: 'Pedro' },
  { nombre: 'Ana' },
  { nombre: 'Eli' },
  { nombre: 'María' }
];

let frutas = ['manzana', 'banana', 'pera', 'melón', 'banana'];

// Métodos indexOf y lastIndexOf: retorna el primer o el último índice 
// que coincida con la búsqueda
// retorna -1 si no se encuentra el elemento
let indiceBanana = frutas.indexOf('banana');
let ultimoindiceBanana = frutas.lastIndexOf('banana');

console.log(indiceBanana); // Salida: 1
console.log(ultimoindiceBanana); // Salida: 4

console.log(personas.indexOf({ nombre: 'Eli' })); // Salida: -1
console.log(personas.lastIndexOf({ nombre: 'Eli' })); // Salida: -1

console.log(personas.indexOf(personas[3])); // Salida: 3
console.log(personas.lastIndexOf(personas[1])); // Salida: 1

// Método includes: determina si el arreglo contiene el elemento buscado
// Devuelve un valor booleano
console.log(frutas.includes('melón')); // Salida: true
console.log(frutas.includes('sandía')); // Salida: false

console.log(personas.includes({ nombre: 'Eli' })); // Salida: false
console.log(personas.includes(personas[3])); // Salida: true

// Método find: retorna primer elemento que coincida con la búsqueda
console.log(frutas.find(fruta => fruta === 'melón')); // Salida: 'melón'
console.log(frutas.find(fruta => fruta === 'sandía')); // Salida: undefined

console.log(personas.find(persona => persona.nombre === 'Eli')); 
// Salida: { nombre: 'Eli' }

// Método findIndex: retorna el elemento que coincida con la búsqueda
console.log(frutas.findIndex(fruta => fruta === 'melón')); // Salida: 3
console.log(frutas.findIndex(fruta => fruta === 'sandía')); // Salida: -1

console.log(personas.findIndex(persona => persona.nombre === 'Eli')); 
// Salida: 0

// Utilizando un loop:
let encontrada = false;
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'melón') {
    encontrada = true;
    break;
  }
}
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

miVariable = 'hola';
console.log(typeof miVariable); // salida; string

// Para que esta funcion se ejecute de manera correcta se tiene que hacer una formula matematica, haciendo que las variables en vez de usar numeros, sea de tipo string (osea, usando texto), lo que se le llamaria una concatenacion.

let nombre = 'Alejandro';
let apellido = 'Avila';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto); //Salida; Alejandro Avila

// En este caso se usa la variable "numeroString" como si fuera un texto, aunque el contenido es un numero.
// Haciendo esto el resultado sea 510, para que haya un espacio entre el 5 y el 10 se debe de usar las comillas simples '' en medio de la suma, de esta forma: let resultado = numero +' ' + numeroString;

let numero = 5;
let numeroString = '10'; //forma de cadena de caracterex, osea que no es un numero.
let resultado = numero + numeroString;
console.log(resultado); // Salida: 510








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
let nombreCompleto = primerNombre + " " +segundoNombre;

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
/** var: Tiene un ámbito de función o global. Esto significa que si declaras una variable con var dentro de una función, estará disponible en toda la función. Si la declaras fuera de cualquier función, estará disponible globalmente.*/

/** let: Tiene un ámbito de bloque. Esto significa que una variable declarada con let solo estará disponible dentro del bloque (por ejemplo, dentro de un if, for, etc.) en el que se declara. */






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

// No se puede reasignar valores
const y = 5; 
y = 7; // error: asignacion a variable constante











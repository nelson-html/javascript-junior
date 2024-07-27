// aca abajo podemos observar un ejemplo de Scope de varibales globales y locales.

/*

let pedro = "pedro"

if (5 > 1){
    var juan = "juan"

    document.write(pedro," ", juan);
}

document.write(" ",juan) */
//----------------------------------------------------------------------------------

//USANDO PROMPT

/*

let nombre = prompt("Hola prix");

document.write("hola "+ nombre) */

//----------------------------------------------------------------------------------

// OPERADORES DE ASIGNACION
/*
let numero = 10;
let numero1 = 10;
let numero2= 10;
let numero3 = 10;
let numero4 = 10;
let numero5 = 10;
let numero5_5 = 10;

numero += 5;
numero1 -= 5;
numero2 *= 5;
numero3 /= 5;
numero4 %= 6;
numero5 **= 3;
numero5_5 = numero5_5 ** 3;

document.write(numero,"\n")
document.write(numero1,"\n")
document.write(numero2,"\n")
document.write(numero3,"\n")
document.write(numero4,"\n")
document.write(numero5,"\n")
document.write(numero5_5,"\n")
*/
//----------------------------------------------------------------------------------


//OPERADORES ARITMETICOS

/*
numero1 = 10;
numero2 = 5;
numero3 = 5;

numero1--
numero2++
resultado = numero1;
resultado1 = numero2;
resultado2 = numero3**2;
document.write(resultado)
document.write("\n\-------- ",resultado1)
document.write("\n\-------- ",resultado2)*/
//----------------------------------------------------------------------------------

// Uso de condicionales
/*
let nombre = "ruizs";

if (nombre == "nelson") {
    document.write("Que pros, NELSON");
}
else if (nombre == "ruiz") {
    document.write("Que giga pros eres ruiz");
}
else{
    document.write("Tu eres otro...")
}
*/
//----------------------------------------------------------------------------------

//arrays en general
/*
let ejemplo = ["contenido", 15, "Hola", "XD"];

document.write(ejemplo )
*/
/*
let pc1 = {
    nombre: "NelsonPcerdo",
    procesador: "Intel Core i5",
    ram: "16gb",
    espacio: "1TB"
}

document.write(pc1["nombre"]);
document.write(pc1[1]); //debemos de poner los nombres de los obejetos definidos
*/
//----------------------------------------------------------------------------------

// bucles
/*
let numero = 0;

while (numero < 1000){
    numero++;
    document.write(numero + "<br> ")
    if (numero == 15) {
        break;
    }
}
*/

//----------------------------------------------------------------------------------
//uso de continue
/*
numero = 50;

for (let i = 10; i > 0; i--) {
    
    if (i == 5) {
        continue;
    }
    document.write(i + "<br>");
    
}*/
//----------------------------------------------------------------------------------
//uso de for in y for of
/*
let array1 = ["Maria", "Josefa", "Carla"];
let array2 = ["Marcos", "Calvino", "Ignacio de Layola", array1];

for (let array in array2){
    if (array == 3){
        for (let array of array1){
            document.write(array + "<br>")
        }
    }
    else{
        document.write(array2[array] + "<br>")
    }
}
*/

//----------------------------------------------------------------------------------      
//funcion flecha
/*
const saludar = () => {
   let respuesta = prompt("Hola que tal te va?")
    if (respuesta == "bien"){
        alert("Me alegro");
    }
    else{
        alert("una pena")
    }
}

saludar();
saludar();
saludar();
saludar();*/
//----------------------------------------------------------------------------------

//uso de return en funciones

/*
function saludar(){
    alert("Hola prix");
    a = 10;
    b = 5;

    c = a+b;
    return c
    document.write(c)
}

let respuesta = saludar();
document.write(respuesta);
*/
//----------------------------------------------------------------------------------

//Empenzando a usar POO
/*
class Animal {
    constructor (especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${especie}, tengo la de edad de ${edad} años y un color ${color} <br>`
    }
    verInfo(){
        document.write(this.info);
    }
    /*ladrar(){
        if (this.especie == "Perro"){
            document.write("WAF WAF" + "<br>")
        }
        else{
            document.write("No puede ladrar porque es un ", this.especie)
        }
    }
}

class Perro extends Animal{
    constructor (especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }
    // static ladrar(){
    //     document.write("El perro dice WAW WAW WAW XD")
    // }

    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("Perro", 10, "Verde", "pitbull");
const gato = new Animal("Gato", 2, "cafe");

// document.write(perro.info)
// document.write(gato.info)

// perro.verInfo();
// gato.verInfo();

perro.setRaza = "Pedro"

document.write(perro.getRaza)
gato.ladrar();
*/


//Metodos de cadenas
//Concat
/*
let cadena = "hola que tal";

result = cadena.concat(" como estas?");

document.write(result + "<br>")

let start_Cadena = "Hola"

resultado = start_Cadena.startsWith(cadena)
document.write(resultado)*/

//metodo include
/*
let cadena = "hola cadena hola";

resultado = cadena.lastIndexOf("hola");

document.write(resultado)
*/

//uso de pad start
/*
let cad = "holaaaaa"

let result = cad.padEnd(15, "L")
document.write(result + "<br>")

let result1 = cad.padStart(15, "L")
document.write(result1)*/
/*
let cadena = "hola";

resultado = cadena.repeat(10);
document.write(resultado + "<br>")

const estado = "Feliz "
document.write(`Yo estoy muy ${estado.repeat(3)}`)*/

/*
let cadena = "Hola como estas crack"

resultado = cadena.split(" ")

document.write(resultado[0])*/

/*
let cadena = "ABCDEFGHIJKLMNÑOPQRSTUVIXYZ"

resultado = cadena.substring(1,5 )
document.write(resultado)*/

/*let cadena = "            hola        ";

resultado = cadena.trim();
document.write(resultado.length)*/

//METODOS DE ARRAY
////////////////////////////////////////////////////////////////
/*
let nombres = ["nelson", "daniel", "carmen"];

let resultado = nombres.push("Jorge", "alvaro");
document.write(resultado + "<br>");
document.write(nombres.reverse())*/
/*
const numeros = [2,5,5,8,6,9,1,2,3];

numeros.sort();
document.write(numeros);*/
/*
const numeros = [5,4,8,1,0,2,3,8];

numeros.splice(3,0, "Nelson")
document.write(numeros)*/
/*
let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

document.write(numeros + "<br>")

let resultado = numeros.join(" - ");

document.write(resultado)*/

/*
let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

document.write(numeros + "<br>")

let resultado = numeros.includes("pedro")
let resultado1 = numeros.indexOf("pedro")
let resultado2 = numeros.lastIndexOf("pedro")
document.write(resultado + "<br>");
document.write(resultado1 + "<br>");
document.write(resultado2 + "<br>");*/

/*
let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

resultado1 = numeros.slice(0,4)
document.write(resultado1 + "<br>")

resultado = numeros.filter(numero => numero.length > 5)

document.write(resultado)*/

//objeto math----------------------------------------------------------------------------------------
/*
numero = Math.max(9,10,15,10,13,15,25,255,854);
numero = Math.min(9,10,15,10,13,15,25,255,854);

document.write(numero + "<br>")

let numero2 = Math.random()*99;
numero2 = Math.round(9.9)
numero2 = Math.trunc(8.4)
document.write(numero2)
*/

//consola----------------------------------------------------------------------------------------
//--------------------------------DOM------------------------------------------------------------

// let parrado = document.getElementsByTagName("parrafo");

// document.write(parrafo)

// let inputRadio = document.querySelector(".radio")
// inputRadio.setAttribute("type","date")

// document.write(inputRadio.getAttribute("type")) 

//-----------------atributos globales---

// let saludo = document.querySelector(".titulo")
// saludo.setAttribute("title", "jajaja xd")

//METODO STYLE------------------------------------------------------------------------------
/*
const titulo = document.querySelector(".h1_mod");

titulo.style.color = "#087"
titulo.style.backgroundColor = "#fff"
titulo.style.padding = "10px"
*/

//CLASSLIST ------------------------------------------------------------------------------------

// const titulo = document.querySelector(".h1_mod");
// titulo.classList.add("perro")
// titulo.classList.add("mujer")
// titulo.classList.remove("mujer")
// let valor = titulo.classList.item(0)

// document.write(valor  + "<br>")

// let valor2 = titulo.classList.contains("maruchan")
// if (valor2 == true){
//     document.write("La clase existe" + "<br>")
// } else{
//     document.write("La clase no existe" + "<br>")
// }

// const titulo = document.querySelector(".h1_mod");
// titulo.classList.toggle("maruchan")


// const titulo = document.querySelector(".maruchan")

// let resultado = titulo.innerHTML;
// document.write(resultado)

//creacion de elementos --------------------------------------------------------------------

// const container = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();

// for (let i = 0; i < 20; i++) {
//     const item = document.createElement("LI")
//     item.innerHTML = ("Este es un item de la lista")
//     fragmento.appendChild(item)
// }

// container.appendChild(fragmento)

// console.log(container)

//Obtencion de childs -----------------------------------------------------------------------------
// const container = document.querySelector(".contenedor");

// const primerHijo = container.children;

// for (hijo of primerHijo){
//     console.log(hijo)
// }

//METODOS DE CHILDS ----------------------------------------------------------------------

// const container = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"

// const h2_antiguo = document.querySelector(".h2");

// // container.removeChild(h2_antiguo)

// let respuesta = container.hasChildNodes();

// if (respuesta) {
//     document.write("El elemento tiene hijos")
// } else {
//     document.write("El elemento no tiene hijos")
// }

//PROPIEDADES SIBLINSG--------------------------------------------

// const container = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"

// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_antiguo.nextElementSibling)



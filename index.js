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
    }*/
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

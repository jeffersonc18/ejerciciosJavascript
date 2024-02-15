// Escribir un programa que pida por teclado cuatro números y calcule y presente la media de los cuatro. 


let numero1 = Number(prompt("Escriba el numero 1"));
let numero2 = Number(prompt("Escriba el numero 2"));
let numero3 = Number(prompt("Escriba el numero 3"));
let numero4 = Number(prompt("Escriba el numero 4"));

const cantidadNumeros = 4;
let sumaNumeros = (numero1 + numero2 + numero3 + numero4);
let media = sumaNumeros/cantidadNumeros;

document.write('La media de los cuatro números es: ',media);
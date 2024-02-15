// Escribir un programa que pida por teclado dos resistencias y calcule y presente la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)). 


let resistencia1 = Number(prompt("Escriba el valor de la resistencia 1: "));
let resistencia2 = Number(prompt("Escriba el valor de la resistencia 2: "));

let multiResistencias = resistencia1 * resistencia2;

let sumResistencias = resistencia1 + resistencia2;

let resistenciaEquivalente = multiResistencias/sumResistencias;

document.write('El valor de la resistencia equivalente en paralelo es: ',resistenciaEquivalente,' Ohmios');
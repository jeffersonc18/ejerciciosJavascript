// Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el descuento 20%, el programa dirá que el precio final con descuento es de 240.

let precio = prompt("¿Cuál es el precio?: ");

const porcentajeDescuento = prompt("Dame el descuento %, ejemplo 20,30,...");

let descuento = (precio * porcentajeDescuento/100) ;

let precioFinal = precio - descuento;

document.write('El precio final del producto es: ',precioFinal);

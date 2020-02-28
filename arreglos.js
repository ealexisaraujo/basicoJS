var fruta = ['🍏', '🍎', '🍐', '🍊'];

console.log(fruta);

// Para ver el tamaño de un array
console.log(fruta.length);

//Consultar un elemento especifico del array
console.log(fruta[0]);

console.log(fruta[2]);

//Metodos que nos ayudan a mutar el array
//Agregar mas frutas al final de nuestro array
var masFrutas = fruta.push('🍓');

//Eliminar ultimo elemento del array
var ultimo = fruta.pop('🍓');

//Agregar al inicio de nuestro array
var nuevaLongitud = fruta.unshift('🍇');

//Borrar primer elemento del array
var borrarFruta = fruta.shift('🍇');

//Nos ayuda a saber la posicion del elemento que le pasemos al array
var posicion = fruta.indexOf('🍊');

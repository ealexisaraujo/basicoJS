//Ejemplo 1: Llamando la variable antes de declararla
console.log(miNombre);

var miNombre = 'Diego';

hey();

function hey() {
  console.log('hola ' + miNombre);
}

var miNombre = 'Alexis';

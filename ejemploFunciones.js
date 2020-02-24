// Declarativas

function miFuncion() {
  return console.log(3);
}

miFuncion();
// Expresion

var miFuncion = (a, b) => {
  var resultado = a + b;
  return console.log(resultado);
};

miFuncion(2, 3);

function saludarEstudiantes(estudiante) {
  return console.log(`Hola ${estudiante}`);
}

saludarEstudiantes('alexis');

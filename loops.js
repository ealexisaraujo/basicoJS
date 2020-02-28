var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

for (const estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

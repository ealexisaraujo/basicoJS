var edad = 10;

if (edad === 18) {
  console.log('Puedes votar, sera tu 1ra votacion');
} else if (edad > 18) {
  console.log('Puedes votar de nuevo');
} else {
  console.log('Aun no puedes votar');
}

var resultado =
  edad === 18
    ? 'Puedes votar, sera tu 1ra votacion'
    : edad > 18
    ? 'Puedes votar de nuevo'
    : 'Aun no puedes votar';

console.log(resultado);

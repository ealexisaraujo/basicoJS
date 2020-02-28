var productos = [
  {
    nombre: 'Bici',
    costo: 3400,
  },
  {
    nombre: 'TV',
    costo: 4800,
  },
  {
    nombre: 'Libro',
    costo: 5500,
  },
  {
    nombre: 'Celular',
    costo: 15000,
  },
  {
    nombre: 'Laptop',
    costo: 45000,
  },
  {
    nombre: 'Audifonos',
    costo: 500,
  },
];

const productosFiltrado = productos.filter(item => {
  return item.costo <= 500;
});

console.log(productosFiltrado);

//Ayudar a mapear, genera un nuevo array
const productosMapeados = productos.map(item => {
  return { ...item };
});

console.log(productosMapeados);

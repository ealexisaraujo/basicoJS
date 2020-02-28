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

//Ayuda a encontrar algo dentro del array de productos
const productosFind = productos.find(item => {
  return item.nombre === 'Laptop';
});

console.log(productosFind);

productos.forEach(item => {
  console.log(item.nombre);
});

//some se genera un nuevo array, regresa un condicion en boolean
const articulosBaratos = productos.some(item => {
  return item.costo <= 700;
});

console.log(articulosBaratos);

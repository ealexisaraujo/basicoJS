function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

var autos = [];

for (let i = 0; i < 30; i++) {
  const carro = autos.push(
    new auto(
      `Marca ${i}`,
      `Modelo ${i}`,
      Math.floor(Math.random() * 19) + 2000,
    ),
  );
}

console.log(autos);

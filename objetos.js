var miAuto = {
  marca: 'Toyoya',
  modelo: 'Corolla',
  anio: 2020,
  encendido: false,
  arrancar: function(encendido) {
    this.encendido = !encendido;
  },
  detalleDelAuto: function() {
    console.log(`Auto ${this.modelo} ${this.anio}`);
  },
};

miAuto.detalleDelAuto();

//This es una variable que hace referencia al objeto

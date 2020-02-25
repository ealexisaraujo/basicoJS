var valueUser = prompt('Escribe Piedra, Papel o Tijera');
var machine = ['piedra', 'papel', 'tijera'];
var randomChoise = machine[Math.floor(Math.random() * 3)];

if (valueUser === randomChoise) {
  alert(`Empataste! La maquina ha elegido ${randomChoise}`);
} else {
  switch (valueUser) {
    case 'piedra':
      randomChoise === 'tijera'
        ? alert(`Ganaste! La maquina ha elegido ${randomChoise}`)
        : alert(`Perdiste! La maquina ha elegido ${randomChoise}`);
      break;
    case 'papel':
      randomChoise === 'piedra'
        ? alert(`Ganaste! La maquina ha elegido ${randomChoise}`)
        : alert(`Perdiste! La maquina ha elegido ${randomChoise}`);
      break;
    default:
      randomChoise === 'papel'
        ? alert(`Ganaste! La maquina ha elegido ${randomChoise}`)
        : alert(`Perdiste! La maquina ha elegido ${randomChoise}`);
  }
}
